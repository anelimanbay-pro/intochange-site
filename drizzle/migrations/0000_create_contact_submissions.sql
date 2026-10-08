CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'website',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors may send an enquiry"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(name)) BETWEEN 1 AND 100
  AND char_length(trim(email)) BETWEEN 6 AND 255
  AND char_length(trim(message)) BETWEEN 1 AND 2000
);

CREATE OR REPLACE FUNCTION public.enforce_enquiry_rate_limit()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF (
    SELECT count(*)
    FROM public.contact_submissions
    WHERE lower(email) = lower(NEW.email)
      AND created_at > now() - interval '1 hour'
  ) >= 5 THEN
    RAISE EXCEPTION 'Too many enquiries from this address recently. Please try again later.';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER enquiry_rate_limit
BEFORE INSERT ON public.contact_submissions
FOR EACH ROW EXECUTE FUNCTION public.enforce_enquiry_rate_limit();
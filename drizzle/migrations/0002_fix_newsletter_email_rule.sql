DROP POLICY IF EXISTS "Visitors may join the private list" ON public.newsletter_subscribers;

CREATE POLICY "Visitors may join the private list"
ON public.newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(email)) BETWEEN 6 AND 255
  AND email ~ '^[^@,;:<>[:space:]]+@[^@,;:<>[:space:]]+[.][^@,;:<>[:space:]]+$'
);
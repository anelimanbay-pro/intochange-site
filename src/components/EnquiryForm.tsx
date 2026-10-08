import { useState } from "react";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please tell us your name")
    .max(100, "Please keep this shorter"),
  email: z
    .string()
    .trim()
    .min(6, "Please enter a valid email address")
    .email("Please enter a valid email address")
    .max(255, "Please enter a shorter email address"),
  message: z
    .string()
    .trim()
    .min(10, "A sentence or two is enough")
    .max(2000, "Please keep your message under 2000 characters"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;

type EnquiryFormProps = {
  /** Where the enquiry came from, so you can tell the pages apart later. */
  source?: string;
};

const fieldClass =
  "rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-base font-light shadow-none focus-visible:ring-0 focus-visible:border-foreground placeholder:text-muted-foreground/60";

const labelClass =
  "block text-[11px] font-sans tracking-[0.3em] uppercase text-muted-foreground mb-3";

const EnquiryForm = ({ source = "website" }: EnquiryFormProps) => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const update =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: a real person never sees or fills this field.
    const honey = (e.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honey) {
      setSent(true);
      return;
    }

    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors({
        name: flat.name?.[0],
        email: flat.email?.[0],
        message: flat.message?.[0],
      });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      source,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "We couldn't send that",
        description:
          "Please try again in a moment, or write to us via Instagram — we'll pick it up from there.",
        variant: "destructive",
      });
      return;
    }

    setValues({ name: "", email: "", message: "" });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="py-10 animate-fade-in-up">
        <div className="w-16 h-px bg-foreground/40 mx-auto mb-8" />
        <p className="text-xl md:text-2xl font-serif italic font-light text-foreground/90 mb-4">
          Thank you. Your message is with us.
        </p>
        <p className="text-sm font-sans tracking-[0.2em] uppercase text-muted-foreground">
          We reply personally, and in confidence.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
        <div>
          <label className={labelClass} htmlFor="enquiry-name">
            Name
          </label>
          <Input
            id="enquiry-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            className={fieldClass}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-2 text-xs font-sans tracking-wide text-destructive">{errors.name}</p>
          )}
        </div>
        <div>
          <label className={labelClass} htmlFor="enquiry-email">
            Email
          </label>
          <Input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            className={fieldClass}
            placeholder="Where we may reply"
          />
          {errors.email && (
            <p className="mt-2 text-xs font-sans tracking-wide text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <label className={labelClass} htmlFor="enquiry-message">
          What are you looking for
        </label>
        <Textarea
          id="enquiry-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={update("message")}
          className={`${fieldClass} resize-none`}
          placeholder="A work, an artist, a fair, a collection — or simply an introduction."
        />
        {errors.message && (
          <p className="mt-2 text-xs font-sans tracking-wide text-destructive">{errors.message}</p>
        )}
      </div>

      {/* Hidden from visitors — anti-spam measure only. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="text-center pt-10">
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="group min-w-[240px] border-primary/30 hover:border-primary hover:bg-primary/5"
          variant="outline"
        >
          {submitting ? "Sending" : "Send Enquiry"}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </form>
  );
};

export default EnquiryForm;

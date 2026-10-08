import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .min(6, "Please enter a valid email address")
  .email("Please enter a valid email address")
  .max(255, "Please enter a shorter email address");

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [joined, setJoined] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast({
        title: "Invalid email",
        description: parsed.error.issues[0]?.message ?? "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setBusy(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data });
    setBusy(false);

    if (error) {
      if (error.code === "23505") {
        setJoined(true);
        setEmail("");
        toast({
          title: "You're already on the list",
          description: "You'll receive private notices of new works as they become available.",
        });
        return;
      }
      toast({
        title: "We couldn't add you",
        description: "Please try again in a moment — or write to us via Instagram and we'll add you.",
        variant: "destructive",
      });
      return;
    }

    setEmail("");
    setJoined(true);
    toast({
      title: "Thank you",
      description: "You'll receive private notices of new works as they become available.",
    });
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-wide mb-4">
          Available Artworks
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
          Subscribe to receive private notices when exceptional works become available —
          curated pieces from our acquisitions and off-market channels, shared with
          subscribers first.
        </p>

        {joined ? (
          <p className="text-lg font-serif italic font-light text-foreground/80 py-3 animate-fade-in-up">
            You're on the list. We'll be in touch quietly.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              autoComplete="email"
              required
            />
            <Button type="submit" size="lg" disabled={busy}>
              {busy ? "Adding" : "Subscribe for Updates"}
            </Button>
          </form>
        )}

        <p className="text-sm text-muted-foreground mt-4">
          A private list for collectors and art lovers. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;

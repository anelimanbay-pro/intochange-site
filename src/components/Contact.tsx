import { Instagram } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-t from-muted/30 to-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[0.15em] uppercase mb-8">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
            To begin a discreet dialogue — an acquisition, an off-market sale, or access to a
            fair — write to us here. Every message reaches us directly, and every conversation is
            private by design.
          </p>
        </div>

        <EnquiryForm source="contact" />

        <div className="mt-16 flex items-center justify-center gap-8">
          <a
            href="https://www.instagram.com/art_and_change?igsh=MTdvcHAxczkyODUyNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://intochange.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans tracking-[0.25em] uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            intochange.net
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

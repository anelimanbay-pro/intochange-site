import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

import { Shield } from "lucide-react";
import advisoryHeroImg from "@/assets/advisory-hero.jpg";

import acquisitionsImg from "@/assets/advisory-acquisitions.jpg";
import offMarketImg from "@/assets/advisory-offmarket.jpg";
import fairsImg from "@/assets/advisory-fairs.jpg";
import craftImg from "@/assets/advisory-craft.jpg";

const services = [
  {
    number: "01",
    title: "Private Acquisitions",
    description:
      "Sourcing museum-quality works for discerning collectors — from modern masters to exceptional contemporary Portuguese artists. Every acquisition is researched, verified and negotiated on your behalf.",
    image: acquisitionsImg,
  },
  {
    number: "02",
    title: "Discreet Off-Market Sales",
    description:
      "Access to works that never reach the public market. We place exceptional pieces through private channels, protecting the privacy of both buyer and seller at every step.",
    image: offMarketImg,
  },
  {
    number: "03",
    title: "VIP Art Fair Escort",
    description:
      "Private, curated guidance through the world's most important art fairs — with previews, priority access and expert counsel tailored to your collecting vision.",
    image: fairsImg,
  },
  {
    number: "04",
    title: "Portuguese Craft",
    description:
      "Bespoke commissions of extraordinary Portuguese craftsmanship, including gold-plated furniture created by master artisans — heritage techniques made for contemporary living.",
    image: craftImg,
  },
];

const fairs = [
  "Art Basel",
  "Art Basel Miami",
  "Art Basel Hong Kong",
  "Frieze London",
  "Frieze New York",
  "TEFAF Maastricht",
  "The Armory Show",
  "Artissima",
  "Art Dubai",
  "1-54 Contemporary African Art Fair",
  "ARCO Madrid",
  "Venice Biennale",
  "Paris+ par Art Basel",
];

const Advisory = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={advisoryHeroImg}
            alt="Discreet art advisory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm font-sans tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-in">
              Into Change · Art Advisory
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-light tracking-[0.12em] uppercase mb-8 animate-fade-in-up drop-shadow-lg">
              Discreet Access<br />to Exceptional Art
            </h1>
            <div className="w-24 h-px bg-foreground/60 mx-auto mb-8 animate-scale-in" style={{ animationDelay: "0.3s" }} />
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
              Private art advisory for the world's most discerning collectors.
              Acquisitions, discreet sales and VIP access, handled in strict confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[0.15em] uppercase mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Four disciplines, one standard: absolute discretion and uncompromising quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {services.map((service) => (
              <div key={service.number} className="group">
                <div className="aspect-[4/3] overflow-hidden mb-8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-sm font-sans tracking-widest text-accent">{service.number}</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wider">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fairs */}
      <section className="py-28 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[0.15em] uppercase mb-6">
              Where We Guide You
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Private access and curated guidance at the world's leading art events
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5">
            {fairs.map((fair) => (
              <div key={fair} className="flex items-center gap-4 border-b border-border pb-4">
                <span className="w-2 h-2 rounded-full bg-accent/60 flex-shrink-0" />
                <span className="text-base font-sans tracking-wider text-foreground/80">{fair}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing / CTA */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <Shield className="h-8 w-8 mx-auto text-accent mb-8" strokeWidth={1.25} />
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider mb-6">
            Handled in Strict Confidence
          </h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground mb-12">
            Every conversation, acquisition and introduction is private by design. To begin a
            discreet dialogue, leave us a message here — it reaches us directly, and we reply
            personally.
          </p>
          <div className="max-w-xl mx-auto">
            <EnquiryForm source="advisory" />
          </div>


          <p className="mt-20 text-xs font-sans tracking-[0.4em] uppercase text-muted-foreground/60">
            Into Change Art Advisory · Strictly Confidential
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advisory;

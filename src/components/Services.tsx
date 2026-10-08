import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import acquisitionsImg from "@/assets/advisory-acquisitions.jpg";
import offMarketImg from "@/assets/advisory-offmarket.jpg";
import fairsImg from "@/assets/advisory-fairs.jpg";
import craftImg from "@/assets/advisory-craft.jpg";

const services = [
  {
    number: "01",
    title: "Private Acquisitions",
    description:
      "Museum-quality works sourced for you — modern masters and exceptional contemporary Portuguese artists, researched, verified and negotiated on your behalf.",
    image: acquisitionsImg,
  },
  {
    number: "02",
    title: "Discreet Off-Market Sales",
    description:
      "Works that never reach the public market, placed through private channels that protect the privacy of buyer and seller at every step.",
    image: offMarketImg,
  },
  {
    number: "03",
    title: "VIP Art Fair Escort",
    description:
      "Curated guidance through the world's most important art fairs, with previews, priority access and expert counsel tailored to your collecting vision.",
    image: fairsImg,
  },
  {
    number: "04",
    title: "Portuguese Craft",
    description:
      "Bespoke commissions of extraordinary Portuguese craftsmanship — heritage techniques and gold-plated furniture made for contemporary living.",
    image: craftImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[0.15em] uppercase mb-8 text-center">
          Exceptional Art, Quietly Found
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-light">
          Four disciplines, one standard: absolute discretion and uncompromising quality
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => (
            <Card
              key={service.number}
              className="group relative overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-sm font-sans tracking-widest text-accent">
                    {service.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wider group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            to="/advisory"
            className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.25em] uppercase text-foreground border-b border-foreground/40 pb-2 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Discover the Advisory
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

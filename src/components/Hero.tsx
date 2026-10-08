import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackgroundImg from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Elegant Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackgroundImg}
          alt="Elegant artistic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/55" />
      </div>

      {/* Sophisticated Overlay Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-accent/20" />

      {/* Elegant Geometric Patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <p className="text-xs md:text-sm font-sans tracking-[0.45em] uppercase text-muted-foreground mb-10 animate-fade-in">
          Private Art Advisory · Portugal
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-[0.15em] uppercase mb-4 animate-fade-in-up drop-shadow-lg">
          Into Change
        </h1>
        <p className="text-lg md:text-2xl font-serif italic font-light text-foreground/90 mb-8 animate-fade-in-up drop-shadow-md" style={{ animationDelay: "0.15s" }}>
          Exceptional art, found quietly.
        </p>
        <div className="w-24 h-px bg-foreground/60 mx-auto mb-8 animate-scale-in drop-shadow-lg" style={{ animationDelay: "0.2s" }} />
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-[0.12em] uppercase text-foreground/90 mb-8 animate-fade-in-up drop-shadow-md" style={{ animationDelay: "0.3s" }}>
          Discreet Access
          <br className="sm:hidden" /> to Exceptional Art
        </p>
        <p className="text-base md:text-lg font-light leading-relaxed text-foreground/85 max-w-xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          Acquisitions, off-market sales and VIP fair access for the world&apos;s most
          discerning collectors — handled in strict confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            variant="outline"
            size="lg"
            className="group min-w-[250px] border-primary/30 hover:border-primary hover:bg-primary/5"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request a Private Consultation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Link
            to="/advisory"
            className="text-sm font-sans tracking-[0.25em] uppercase text-foreground border-b border-foreground/40 pb-2 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Explore the Advisory
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-20 top-1/4 w-40 h-40 border border-foreground/10 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: "6s" }} />
      <div className="absolute -right-20 bottom-1/4 w-32 h-32 border border-foreground/10 rounded-full animate-pulse hidden lg:block" style={{ animationDuration: "7s", animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;

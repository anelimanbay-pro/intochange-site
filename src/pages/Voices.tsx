import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import voicesHeroImg from "@/assets/voices-hero.jpg";
import voicesUnheardImg from "@/assets/voices-unheard.jpg";
import voicesStageImg from "@/assets/voices-stage.jpg";
import urbanEchoesImg from "@/assets/urban-echoes.jpg";
import breakingSilenceImg from "@/assets/breaking-silence.jpg";

const projects = [
  {
    title: "Voices Unheard",
    description:
      "A multimedia exhibition exploring marginalized narratives through contemporary art",
    category: "Exhibition",
    image: voicesUnheardImg,
  },
  {
    title: "Digital Gallery",
    description:
      "An online catalogue showcasing curated artworks from emerging Portuguese artists, making contemporary art accessible to a global audience",
    category: "Online Catalogue",
    image: voicesStageImg,
  },
  {
    title: "Urban Echoes",
    description:
      "Street art initiative transforming public spaces into platforms for dialogue",
    category: "Public Art",
    image: urbanEchoesImg,
  },
  {
    title: "Breaking Silence",
    description:
      "Performance series addressing social justice through movement and sound",
    category: "Performance",
    image: breakingSilenceImg,
  },
];

const Voices = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={voicesHeroImg}
            alt="Flowing silk textile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs md:text-sm font-sans tracking-[0.4em] uppercase text-muted-foreground mb-8 animate-fade-in">
              Into Change · Cultural Movement
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.15em] uppercase mb-8 animate-fade-in-up drop-shadow-lg">
              Voices of Art
              <br />
              and Change
            </h1>
            <div
              className="w-24 h-px bg-foreground/60 mx-auto mb-8 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            />
            <p
              className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 animate-fade-in-up max-w-2xl mx-auto"
              style={{ animationDelay: "0.4s" }}
            >
              Discovering, mentoring and showcasing emerging Portuguese artists.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
            <p>
              "Voices of Art and Change" is a cultural movement by Into Change dedicated to
              discovering, mentoring, and showcasing emerging Portuguese artists.
            </p>
            <p>
              We believe art has the power to reshape societies, redefine identities, and
              ignite conversations. Through exhibitions, mentorship, and storytelling, we
              give a platform to young Portuguese creators — the ones shaping the next
              chapter of Portugal&apos;s artistic voice.
            </p>
            <p className="text-xl md:text-2xl font-serif pt-8">
              This is more than an initiative.
            </p>
            <p className="text-2xl md:text-3xl font-serif italic">
              It&apos;s a call to listen — to the Voices of Art and Change.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-[0.15em] uppercase mb-8 text-center">
            Curated Exhibitions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-light">
            Transformative art experiences that amplify emerging voices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wider mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider mb-6">
            Support the Movement
          </h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground mb-10 max-w-2xl mx-auto">
            Into Change is a registered non-profit in Portugal. Your support funds curated
            exhibitions, mentorship and content production that give emerging artists a
            platform.
          </p>
          <Link to="/donate">
            <Button
              variant="outline"
              size="lg"
              className="group min-w-[220px] border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              Support Our Mission
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Voices;

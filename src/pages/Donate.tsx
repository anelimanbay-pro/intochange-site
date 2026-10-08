import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Palette, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import donateHeroImg from "@/assets/donate-hero.jpg";
import exhibitionImg from "@/assets/exhibition-impact.jpg";
import mentorshipImg from "@/assets/mentorship-impact.jpg";
import communityImg from "@/assets/community-impact.jpg";
import contentImg from "@/assets/content-impact.jpg";

const Donate = () => {
  const impactAreas = [
    {
      icon: Palette,
      title: "Curated Exhibitions",
      description: "Fund transformative art exhibitions that give emerging Portuguese artists the platform they deserve",
      image: exhibitionImg
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Support one-on-one mentorship connecting established creators with the next generation",
      image: mentorshipImg
    },
    {
      icon: BookOpen,
      title: "Content Production",
      description: "Create compelling stories and documentation that amplify artists' voices and reach wider audiences",
      image: contentImg
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "Foster inclusive spaces where art becomes a catalyst for meaningful social change",
      image: communityImg
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={donateHeroImg} 
            alt="Support artistic voices" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-light tracking-[0.2em] uppercase mb-6 animate-fade-in text-foreground drop-shadow-lg">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8 animate-fade-in-up drop-shadow-md">
              Help us amplify the voices of emerging Portuguese artists
            </p>
            <div className="w-24 h-px bg-foreground/60 mx-auto" />
          </div>
        </div>
      </section>

      {/* Non-Profit Statement */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-accent/20 bg-gradient-to-br from-card to-muted/20">
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground mb-6">
                Into Change is a registered <span className="text-foreground font-serif italic">non-profit organization</span> in Portugal, 
                dedicated to discovering, mentoring, and showcasing emerging Portuguese artists.
              </p>
              <p className="text-base md:text-lg font-light text-muted-foreground">
                Your donations directly fund curated exhibitions and content production that empowers artists 
                to share their voices and create meaningful change through art.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Every contribution creates lasting change in the Portuguese art community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {impactAreas.map((area, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-700 hover:border-accent/30 bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <area.icon className="h-10 w-10 text-accent mb-2 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-serif mb-3 tracking-wide">{area.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Details */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-background" />
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-center mb-16">
            How to Donate
          </h2>
          
          <Card className="border-accent/20 bg-card/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-10 md:p-16">
              <div className="space-y-8">
                {/* Legal Information */}
                <div className="text-center pb-8 border-b border-border">
                  <h3 className="text-xl font-serif mb-6 text-muted-foreground tracking-wider uppercase text-sm">
                    Legal Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 font-sans tracking-wide">Legal Name</p>
                      <p className="text-lg font-serif">ASSOCIAÇÃO INTO CHANGE</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 font-sans tracking-wide">NIF (Tax ID)</p>
                      <p className="text-lg font-mono tracking-wider">518452662</p>
                    </div>
                  </div>
                </div>

                {/* Bank Transfer Details */}
                <div className="text-center">
                  <h3 className="text-xl font-serif mb-6 text-muted-foreground tracking-wider uppercase text-sm">
                    Bank Transfer
                  </h3>
                  <div className="bg-muted/30 rounded-lg p-6 mb-4">
                    <p className="text-sm text-muted-foreground mb-2 font-sans tracking-wide">IBAN</p>
                    <p className="text-xl font-mono tracking-wider mb-4">PT50 0079 0000 9046 4550 1015 1</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("PT50007900009046455010151")}
                      className="hover:bg-accent hover:text-accent-foreground"
                    >
                      Copy IBAN
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Please include "Donation - Voices of Art and Change" in the transfer description
                  </p>
                </div>

                {/* Thank You Note */}
                <div className="text-center pt-8 border-t border-border">
                  <p className="text-lg md:text-xl font-serif italic text-muted-foreground">
                    Every contribution, no matter the size, helps us create opportunities 
                    for artists to share their voices and inspire change.
                  </p>
                  <p className="text-2xl font-serif mt-6">Thank you for your support.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;

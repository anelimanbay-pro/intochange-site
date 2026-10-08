import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import jessicaPintoImage from "@/assets/jessica-pinto.jpg";
import anelAvatarImage from "@/assets/anel-imanbay-avatar.jpg";
import suzanaBarrosImage from "@/assets/suzana-barros.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Anel Imanbay",
      role: "Co-Founder",
      contribution: "Cultural entrepreneur and art advisor, Board Advisor to the Sovereign Art Fund of Portugal and curator of TEDxMarvila. Anel co-founded Into Change to connect the world's most discerning collectors with exceptional art — from private acquisitions to VIP fair access — always handled in strict confidence.",
      image: anelAvatarImage,
      initials: "AI",
      style: { objectPosition: "50% 0%" }
    },
    {
      name: "Suzana Barros",
      role: "Co-Founder",
      contribution: "Former Sotheby's specialist who went on to lead the art collection of Millennium BCP in Portugal for almost a decade, and an accomplished ceramic artist. Suzana is known for her curated art dinners — intimate gatherings where collectors, artists and ideas meet around the table. Her eye for detail and deep market knowledge shape the advisory's refined, personal approach.",
      image: suzanaBarrosImage,
      initials: "SB",
      style: { objectPosition: "22% 50%", filter: "grayscale(1) contrast(1.05)" }
    },
    {
      name: "Jessica Pinto",
      role: "Art Curator",
      contribution: "Curator with a keen eye for emerging Portuguese talent. Jessica works closely with artists, galleries and estates to surface work of genuine quality — bridging traditional and contemporary practice so that every piece we present is worth a collector's attention.",
      image: jessicaPintoImage,
      initials: "JP",
      style: {
        objectPosition: "51% 24%",
        transform: "scale(2)",
        transformOrigin: "50% 10%",
        filter: "grayscale(1) contrast(1.05)"
      }
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-[0.2em] uppercase mb-6 animate-fade-in">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed animate-fade-in-up">
            The people behind a discreet source of exceptional art — access, judgement and absolute discretion
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border bg-card hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    {/* Avatar Section */}
                    <div className="p-8 pb-6 flex justify-center">
                      <Avatar className="h-32 w-32 border-4 border-accent/20 transition-transform duration-500 group-hover:scale-105">
                        <AvatarImage 
                          src={member.image} 
                          alt={member.name} 
                          className="object-cover"
                          style={member.style}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-accent/30 to-muted text-2xl font-serif">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Content Section */}
                    <div className="px-8 pb-8 text-center">
                      <h3 className="text-2xl font-serif font-semibold mb-2 tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-sm font-sans tracking-widest uppercase text-muted-foreground mb-4">
                        {member.role}
                      </p>
                      <div className="w-16 h-px bg-accent/50 mx-auto mb-6" />
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        {member.contribution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground italic">
            "Exceptional art is rarely found by looking. It is found through relationships,
            rigorous judgement, and the discretion to keep it that way."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

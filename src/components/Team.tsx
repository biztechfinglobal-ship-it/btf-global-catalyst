import { Card, CardContent } from "@/components/ui/card";
import teamDeepak from "@/assets/team-deepak.jpg";
import teamNeelam from "@/assets/team-neelam.jpg";
import teamLiayan from "@/assets/team-liayan.jpg";
import teamPramod from "@/assets/team-pramod.jpg";
import teamShivam from "@/assets/team-shivam.jpg";
import teamShivani from "@/assets/team-shivani.jpg";

const Team = () => {
  const team = [
    {
      name: "Deepak Bansal",
      role: "Founder & CEO",
      image: teamDeepak,
    },
    {
      name: "Neelam Bansal",
      role: "Senior Consultant",
      image: teamNeelam,
    },
    {
      name: "Liayan Bansal",
      role: "Business Strategist",
      image: teamLiayan,
    },
    {
      name: "Pramod Bansal",
      role: "Technology Lead",
      image: teamPramod,
    },
    {
      name: "Shivam Taluja",
      role: "Financial Advisor",
      image: teamShivam,
    },
    {
      name: "Shivani Bansal",
      role: "Operations Manager",
      image: teamShivani,
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to driving business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-smooth hover:shadow-glow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import teamDeepak from "@/assets/team-deepak.jpg";
import teamLiyana from "@/assets/team-liyana.jpg";
import teamNeelam from "@/assets/team-neelam.jpg";
import teamPramod from "@/assets/team-pramod.jpg";
import teamShivam from "@/assets/team-shivam.jpg";
import teamShivani from "@/assets/team-shivani.jpg";

const Team = () => {
  const team = [
    {
      name: "Deepak Bansal",
      role: "Founder, CEO & Business Consultant",
      image: teamDeepak,
    },
    {
      name: "Liyana Bansal",
      role: "Co-Founder & Strategic Lead",
      image: teamLiyana,
    },
    {
      name: "Neelam Bansal",
      role: "Operational Lead",
      image: teamNeelam,
    },
    {
      name: "Pramod Bansal",
      role: "Technical & Operational Lead",
      image: teamPramod,
    },
    {
      name: "Shivam Taluja",
      role: "Technical & Operational Lead",
      image: teamShivam,
    },
    {
      name: "Shivani Bansal",
      role: "Planning & Digital Lead",
      image: teamShivani,
    },
  ];

  return (
    <section id="team" className="py-8 sm:py-12 lg:py-14 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Team
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Expert professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-smooth hover:shadow-glow">
              <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                <Avatar className="w-28 h-28 sm:w-32 sm:h-32 mb-4 border-4 border-primary/20 shadow-glow">
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  <AvatarFallback className="bg-gradient-primary text-white text-2xl sm:text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{member.name}</h3>
                <p className="text-primary font-semibold text-sm sm:text-base leading-relaxed">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

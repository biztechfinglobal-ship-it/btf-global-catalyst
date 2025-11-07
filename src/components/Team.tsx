import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Deepak Bansal",
      role: "Founder, CEO & Business Consultant",
    },
    {
      name: "Liyana Bansal",
      role: "Co-Founder & Strategic Lead",
    },
    {
      name: "Neelam Bansal",
      role: "Operational Lead",
    },
    {
      name: "Pramod Bansal",
      role: "Technical & Operational Lead",
    },
    {
      name: "Shivam Taluja",
      role: "Technical & Operational Lead",
    },
    {
      name: "Shivani Bansal",
      role: "Planning & Digital Lead",
    },
  ];

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Team
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-smooth hover:shadow-glow aspect-square">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <span className="text-white text-2xl sm:text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
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

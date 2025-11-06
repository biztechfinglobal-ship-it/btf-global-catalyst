import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Pramod Bansal",
      role: "Technology Lead",
    },
    {
      name: "Shivam Taluja",
      role: "Financial Advisor",
    },
    {
      name: "Shivani Goyal",
      role: "Operations Manager",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-smooth hover:shadow-glow">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl sm:text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium text-sm sm:text-base">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

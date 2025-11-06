import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Passionate professionals dedicated to driving business transformation
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {team.map((member, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden border-2 hover:shadow-glow transition-smooth h-full">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-5 text-center">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5">{member.name}</h3>
                      <p className="text-primary font-medium text-sm sm:text-base">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Team;

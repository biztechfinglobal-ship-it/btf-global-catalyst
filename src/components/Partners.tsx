import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Partners = () => {
  const partners = [
    { name: "Limart Online Shopping Store", logo: "https://via.placeholder.com/200x100/FF6B35/ffffff?text=Limart" },
    { name: "Shree Travels", logo: "https://via.placeholder.com/200x100/004E89/ffffff?text=Shree+Travels" },
    { name: "Pyaoo.com", logo: "https://via.placeholder.com/200x100/F77F00/ffffff?text=Pyaoo.com" },
    { name: "Oldcar.com", logo: "https://via.placeholder.com/200x100/06A77D/ffffff?text=Oldcar.com" },
    { name: "TechHub India", logo: "https://via.placeholder.com/200x100/9D4EDD/ffffff?text=TechHub" },
    { name: "Finance Pro", logo: "https://via.placeholder.com/200x100/D62828/ffffff?text=Finance+Pro" },
    { name: "Smart Business", logo: "https://via.placeholder.com/200x100/0077B6/ffffff?text=Smart+Biz" },
    { name: "Digital Solutions", logo: "https://via.placeholder.com/200x100/06A77D/ffffff?text=Digital+Sol" },
    { name: "Innovation Labs", logo: "https://via.placeholder.com/200x100/FF6B35/ffffff?text=Innovation" },
    { name: "Global Trade", logo: "https://via.placeholder.com/200x100/004E89/ffffff?text=Global+Trade" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Partners
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-3">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <Card className="border-2 hover:border-primary/50 transition-smooth h-full">
                  <CardContent className="flex aspect-video items-center justify-center p-4 sm:p-5">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
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

export default Partners;


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SponsorsSection = () => {
  // Sample sponsors - easy to add more
  const sponsors = [
    {
      name: "Composite",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "InnovateLab",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Sponsors</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {sponsors.map((sponsor, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center">
                      <div className="mb-6">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name}
                          className="w-48 h-24 mx-auto object-contain rounded-lg"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{sponsor.name}</h3>
                      <p className="text-gray-300">Thank you to our amazing sponsors for making ForgeHacks possible!</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white border-white/20 hover:bg-white/10" />
              <CarouselNext className="text-white border-white/20 hover:bg-white/10" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OrganizersSection = () => {
  const organizers = [
    {
      name: "Oliver Cho",
      image: "/lovable-uploads/dac91278-9576-4eb1-b2c7-0cf07a922c2f.png",
      linkedin: "https://www.linkedin.com/in/oliver-s-cho/"
    },
    {
      name: "Aryan Mehra", 
      image: "/lovable-uploads/04938047-8c80-4368-bccb-6ba0ec2ed560.png",
      linkedin: "https://www.linkedin.com/in/aryan-mehra/"
    }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="animate-slide-up">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet the Organizers</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizers.map((organizer, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img 
                      src={organizer.image} 
                      alt={organizer.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-400/20"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{organizer.name}</h3>
                  <Button 
                    variant="outline" 
                    className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
                    onClick={() => window.open(organizer.linkedin, '_blank')}
                  >
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;

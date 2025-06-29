
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";

const TracksSection = () => {
  const tracks = [
    {
      title: "Metro // AI for Public Good",
      description: "Create a product that improves the lives of San Francisco residents (public transportation, education access, community building, healthcare equity, employment, civic engagement, etc.).",
      icon: MapPin,
      gradient: "from-yellow-500 to-orange-400"
    },
    {
      title: "Health // AI for Healthy Living",
      description: "Build a product that guides users toward healthier habits—mentally, physically, or emotionally.",
      icon: Heart,
      gradient: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="animate-slide-up">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Hackathon Tracks</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tracks.map((track, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${track.gradient} flex items-center justify-center mb-6`}>
                    <track.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{track.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{track.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;

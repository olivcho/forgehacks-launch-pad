
import { Users } from "lucide-react";

const AudienceSection = () => {
  const audience = [
    "High school students",
    "Undergraduates", 
    "Recent graduates",
    "Developers",
    "Product managers",
    "Anyone interested in consumer AI"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="animate-slide-up">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Who Should Attend?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {audience.map((person, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <div className="text-white font-medium">{person}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

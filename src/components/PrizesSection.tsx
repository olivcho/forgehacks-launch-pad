
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

const PrizesSection = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="animate-slide-up">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Prizes & Opportunities</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-8 mx-auto">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Fast-tracked interviews with Composite + cash prizes</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Winners get direct access to opportunities with our sponsor partners and cash rewards to celebrate your innovation and hard work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;

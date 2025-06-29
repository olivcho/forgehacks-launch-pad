
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

interface HeroSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const HeroSection = ({ timeLeft }: HeroSectionProps) => {
  const [currentWord, setCurrentWord] = useState(0);
  const rotatingWords = ["builders", "students", "professionals", "engineers", "you"];

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10"></div>
      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ForgeHacks is for
              <br />
              <span className="relative inline-block">
                <span 
                  key={currentWord}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-fade-in"
                >
                  {rotatingWords[currentWord]}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"></span>
              </span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-lg px-4 py-2">
                🔥 Only 50 spots available
              </Badge>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-lg px-4 py-2">
                🗓️ Saturday, July 26, 2025
              </Badge>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Building alone is hard. ForgeHacks is a community-driven hackathon that connects you with makers, mentors, and investors to help you get it done.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">Event Starts In:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
                  <div className="text-gray-300 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            onClick={() => window.open('https://lu.ma/7qw2nqyf', '_blank')}
          >
            Secure Your Spot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

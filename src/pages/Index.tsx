
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Zap, Heart, MapPin, Mail } from "lucide-react";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const rotatingWords = ["builders", "students", "professionals", "engineers", "you"];
  const targetDate = new Date("2025-07-26T09:00:00").getTime();

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const scheduleItems = [
    { time: "9AM - 10AM", activity: "Mingle, create teams, hackathon introduction" },
    { time: "10AM - 4PM", activity: "Hacking" },
    { time: "4PM - 6PM", activity: "Presentations and Judging" },
    { time: "6PM - 7:30PM", activity: "Happy Hour" }
  ];

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

  const audience = [
    "High school students",
    "Undergraduates", 
    "Recent graduates",
    "Developers",
    "Product managers",
    "Anyone interested in consumer AI"
  ];

  const organizers = [
    {
      name: "Oliver Cho",
      image: "/static/oliver.jpg",
      linkedin: "https://www.linkedin.com/in/oliver-s-cho/"
    },
    {
      name: "Aryan Mehra", 
      image: "/static/aryan.jpg",
      linkedin: "https://www.linkedin.com/in/aryan-mehra/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
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

      {/* Registration Widget */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Register Now</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <iframe
                src="https://lu.ma/embed/event/evt-5L5GDEKngBTgA72/simple"
                className="w-full h-[600px] rounded-xl"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">164 Townsend St, San Francisco</h3>
                <p className="text-gray-300">Join us in the heart of SOMA for an amazing day of building!</p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.378024727!2d-122.39483348468186!3d37.779819779759644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd7d02392cb%3A0xf1264d1936610a7b!2s164%20Townsend%20St%2C%20San%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
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
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Full Schedule</h2>
          <div className="max-w-3xl mx-auto">
            {scheduleItems.map((item, index) => (
              <div key={index} className="flex items-center mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 mr-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xl font-semibold text-white">{item.time}</div>
                  <div className="text-gray-300">{item.activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
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
      </section>

      {/* Audience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
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
      </section>

      {/* Call to Action Footer */}
      <footer className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-8">
              Interested in joining the team? 
              <a 
                href="https://form.typeform.com/to/iHgG44MA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline ml-1"
              >
                You may apply here.
              </a>
            </p>
            <div className="flex items-center justify-center text-gray-400 mb-6">
              <Mail className="w-5 h-5 mr-2" />
              <span>Questions or sponsorships: </span>
              <a href="mailto:help@forgehacks.io" className="text-yellow-400 hover:text-yellow-300 ml-1">
                help@forgehacks.io
              </a>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              onClick={() => window.open('https://lu.ma/7qw2nqyf', '_blank')}
            >
              <Zap className="w-5 h-5 mr-2" />
              Secure Your Spot Now
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

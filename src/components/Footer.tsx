
import { Button } from "@/components/ui/button";
import { Zap, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-slide-up">
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
  );
};

export default Footer;

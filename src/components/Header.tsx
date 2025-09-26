import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ForexPro
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="text-foreground hover:text-primary transition-smooth">
            Courses
          </a>
          <a href="#brokers" className="text-foreground hover:text-primary transition-smooth">
            Brokers
          </a>
          <a href="#apply" className="text-foreground hover:text-primary transition-smooth">
            Apply Now
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-green-600 hover:text-green-700 hover:bg-green-50"
            onClick={() => window.open('https://wa.me/254114470612', '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
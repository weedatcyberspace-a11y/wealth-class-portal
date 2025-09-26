import { Button } from "@/components/ui/button";
import heroImage from "@/assets/forex-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Forex Trading Success"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Master Forex Trading
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto">
          Learn from industry experts and join thousands of successful traders. 
          Get professional guidance and access to trusted brokers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-6"
          >
            Start Learning Today
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-smooth text-lg px-8 py-6"
          >
            View Courses
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground/70">Success Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-foreground/70">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground/70">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
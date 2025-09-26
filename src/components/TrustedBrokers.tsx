import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award } from "lucide-react";

const brokers = [
  {
    name: "MetaTrader Pro",
    rating: 4.8,
    regulation: "FCA, CySEC", 
    spread: "0.1 pips",
    features: ["Zero Commission", "Advanced Platform", "24/7 Support"],
    trusted: true
  },
  {
    name: "ForexGlobal",
    rating: 4.7,
    regulation: "ASIC, FSA",
    spread: "0.2 pips", 
    features: ["Low Spreads", "Mobile Trading", "Copy Trading"],
    trusted: true
  },
  {
    name: "TradePro Markets",
    rating: 4.9,
    regulation: "FCA, CIMA",
    spread: "0.0 pips",
    features: ["ECN Account", "AI Tools", "VPS Hosting"],
    trusted: true
  },
  {
    name: "CapitalFX",
    rating: 4.6,
    regulation: "CySEC, DFSA", 
    spread: "0.3 pips",
    features: ["Social Trading", "Education", "Bonuses"],
    trusted: true
  }
];

const TrustedBrokers = () => {
  return (
    <section id="brokers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Trusted Broker Partners
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We've partnered with the most reliable and regulated brokers in the industry to ensure your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brokers.map((broker, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-smooth">
                    {broker.name}
                  </h3>
                  {broker.trusted && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      <Shield size={12} className="mr-1" />
                      Trusted
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="text-primary fill-primary" size={16} />
                    <span className="font-medium">{broker.rating}</span>
                    <span className="text-foreground/60 text-sm">rating</span>
                  </div>

                  <div className="text-sm text-foreground/70">
                    <div className="flex justify-between">
                      <span>Regulation:</span>
                      <span className="text-primary">{broker.regulation}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>Spreads from:</span>
                      <span className="text-primary">{broker.spread}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {broker.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Award size={12} className="text-primary" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 text-sm">
            All our partner brokers are fully regulated and have been thoroughly vetted for your security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrokers;
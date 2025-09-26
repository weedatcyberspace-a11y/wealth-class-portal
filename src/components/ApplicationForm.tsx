import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, UserCheck, BookOpen } from "lucide-react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    course: "",
    goals: ""
  });
  const [showPayment, setShowPayment] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "Your application has been received. Please proceed with payment to secure your spot."
    });
    
    setShowPayment(true);
  };

  return (
    <section id="apply" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Apply for Classes
          </h2>
          <p className="text-xl text-foreground/80">
            Take the first step towards becoming a successful forex trader. Fill out the application below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="text-primary" />
                Application Details
              </CardTitle>
              <CardDescription>
                Tell us about yourself and your trading goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-muted border-border"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Trading Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Complete Beginner</SelectItem>
                      <SelectItem value="some">Some Experience</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="course">Preferred Course *</Label>
                  <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner Forex Fundamentals ($49)</SelectItem>
                      <SelectItem value="advanced">Advanced Trading Strategies ($79)</SelectItem>
                      <SelectItem value="professional">Professional Trader Program ($99)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="goals">Your Trading Goals</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    placeholder="Tell us about your trading goals and what you hope to achieve..."
                    className="bg-muted border-border min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
                  disabled={showPayment}
                >
                  <BookOpen className="mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="text-primary" />
                Secure Payment
              </CardTitle>
              <CardDescription>
                Complete your enrollment with secure payment processing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showPayment ? (
                <div className="text-center py-12">
                  <div className="text-foreground/60 mb-4">
                    Please submit your application first to proceed with payment.
                  </div>
                  <div className="text-sm text-foreground/50">
                    Your payment will be processed securely through Pesapal.
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="text-lg font-medium text-foreground mb-2">
                      Application Approved!
                    </div>
                    <div className="text-foreground/70">
                      Complete your payment to secure your spot in the course.
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4 bg-muted/50">
                    <div className="text-sm text-foreground/70 mb-2">Selected Course:</div>
                    <div className="font-medium">{formData.course}</div>
                  </div>

                  <div className="flex justify-center">
                    <iframe 
                      width="200" 
                      height="40" 
                      src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/usarichesportal" 
                      frameBorder="0" 
                      allowFullScreen
                      className="border border-border rounded"
                    ></iframe>
                  </div>

                  <div className="text-xs text-foreground/60 text-center">
                    Secure payment powered by Pesapal. Your information is protected with enterprise-grade encryption.
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
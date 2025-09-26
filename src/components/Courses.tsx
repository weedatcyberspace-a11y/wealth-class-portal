import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users } from "lucide-react";

const courses = [
  {
    title: "Beginner Forex Fundamentals",
    description: "Transform from complete beginner to confident trader. 85% of our students achieve profitable trades within 6 weeks.",
    duration: "4 weeks",
    students: "127",
    price: "$297",
    features: [
      "Market basics and terminology",
      "Reading charts and patterns", 
      "Risk management strategies",
      "Practice trading accounts"
    ]
  },
  {
    title: "Advanced Trading Strategies",
    description: "Master advanced techniques used by professional traders. Average student increases portfolio by 40% in first 3 months.",
    duration: "6 weeks", 
    students: "89",
    price: "$597",
    features: [
      "Advanced technical indicators",
      "Market psychology",
      "Automated trading systems",
      "1-on-1 mentorship sessions"
    ]
  },
  {
    title: "Professional Trader Program",
    description: "Join the elite 5% of profitable traders. Our graduates average $2,500+ monthly income from trading.",
    duration: "12 weeks",
    students: "63", 
    price: "$1,297",
    features: [
      "Complete trading curriculum",
      "Live trading sessions",
      "Direct broker connections", 
      "Lifetime support access"
    ]
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Trading Courses
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Choose from our comprehensive range of forex trading courses designed for all skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-glow transition-smooth group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {course.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                </div>
                <CardDescription className="text-foreground/70">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    {course.students}
                  </div>
                </div>

                <ul className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
                  onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import TrustedBrokers from "@/components/TrustedBrokers";
import ApplicationForm from "@/components/ApplicationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Courses />
      <TrustedBrokers />
      <ApplicationForm />
    </div>
  );
};

export default Index;
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Algorithm HQ Command Center"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-charcoal/50"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon/5 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card/20 border border-teal/30 backdrop-blur-sm mb-8 animate-glow">
            <span className="text-teal font-montserrat font-bold text-sm tracking-wide">
              🔥 JOIN THE SYNDICATE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-extrabold leading-tight mb-8">
            <span className="text-gradient text-glow">Algorithm</span>{" "}
            <span className="text-foreground">HQ</span>
            <br />
            <span className="text-foreground-secondary text-4xl md:text-5xl lg:text-6xl">
              by Linkard
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-12 max-w-3xl mx-auto">
            The exclusive SaaS platform for elite content creators and freelancers. 
            Master your empire with our <span className="text-teal font-semibold">11 powerful modules</span> - 
            from scheduling to analytics, we've got your syndicate covered.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary group">
              Start Your Empire
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-secondary group">
              <Play className="mr-3 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-foreground-muted">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal rounded-full animate-pulse"></div>
              <span className="font-inter text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
              <span className="font-inter text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
              <span className="font-inter text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-teal/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { ArrowRight, Users, TrendingUp } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-teal/30 rounded-full"></div>
        <div className="absolute top-20 right-20 w-60 h-60 border border-neon/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-warning/20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-teal mr-2" />
                <span className="text-4xl font-montserrat font-extrabold text-neon">10K+</span>
              </div>
              <p className="text-foreground-muted">Active Syndicate Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-teal mr-2" />
                <span className="text-4xl font-montserrat font-extrabold text-neon">500%</span>
              </div>
              <p className="text-foreground-muted">Average Revenue Increase</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center mr-2">
                  <span className="text-charcoal font-bold text-sm">24</span>
                </div>
                <span className="text-4xl font-montserrat font-extrabold text-neon">hrs</span>
              </div>
              <p className="text-foreground-muted">Weekly Time Saved</p>
            </div>
          </div>

          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-foreground mb-8">
            Ready to Join the <span className="text-gradient text-glow">Syndicate</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-12 max-w-3xl mx-auto">
            Stop playing small. Algorithm HQ isn't just a tool—it's your gateway to industry dominance. 
            Join the elite creators who've already unlocked their potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="btn-primary group text-xl px-12 py-6 animate-glow">
              Join the Syndicate
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-ghost text-lg px-8 py-4">
              Schedule a Demo
            </button>
          </div>

          {/* Trust Elements */}
          <div className="text-center">
            <p className="text-foreground-muted mb-4">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex justify-center items-center gap-2 text-warning">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
              <span className="text-foreground-muted ml-2">4.9/5 from 2,847 reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon/5 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}}></div>
    </section>
  );
};

export default CTABanner;
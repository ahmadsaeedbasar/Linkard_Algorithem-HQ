import { Github, Twitter, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-teal/20">
      {/* Newsletter Section */}
      <div className="section-padding border-b border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-montserrat font-bold text-foreground mb-4">
              Stay in the <span className="text-gradient">Loop</span>
            </h3>
            <p className="text-foreground-muted mb-8">
              Get exclusive updates, insider tips, and early access to new features.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-input border border-input-border rounded-xl text-foreground placeholder-foreground-muted focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <button className="btn-primary group px-8">
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h4 className="text-2xl font-montserrat font-extrabold text-gradient mb-4">
                Algorithm HQ
              </h4>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                The exclusive SaaS platform for elite content creators and freelancers. 
                Join the syndicate and dominate your industry.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-card border border-teal/30 rounded-lg flex items-center justify-center hover:bg-teal hover:text-charcoal transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-teal/30 rounded-lg flex items-center justify-center hover:bg-teal hover:text-charcoal transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-teal/30 rounded-lg flex items-center justify-center hover:bg-teal hover:text-charcoal transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-teal/30 rounded-lg flex items-center justify-center hover:bg-teal hover:text-charcoal transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h5 className="font-montserrat font-bold text-foreground mb-6">Product</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Features</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Modules</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Integrations</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">API Docs</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Mobile App</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h5 className="font-montserrat font-bold text-foreground mb-6">Company</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">About</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Blog</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Careers</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Press</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h5 className="font-montserrat font-bold text-foreground mb-6">Support</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Help Center</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Contact</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Community</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Status</a></li>
                <li><a href="#" className="text-foreground-muted hover:text-teal transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="text-foreground-muted hover:text-teal transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground-muted hover:text-teal transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-foreground-muted hover:text-teal transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
            
            <div className="flex items-center text-foreground-muted text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <span>© 2024 Algorithm HQ by Linkard. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
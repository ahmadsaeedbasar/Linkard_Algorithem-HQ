import { 
  Calendar, 
  Database, 
  Users, 
  FolderOpen, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap,
  Target,
  Globe,
  Bell
} from "lucide-react";

const modules = [
  {
    icon: Calendar,
    title: "Content Scheduler",
    description: "Automate your content pipeline",
    subtitle: "Cross-platform posting automation"
  },
  {
    icon: Database,
    title: "Asset Manager", 
    description: "Centralized media library",
    subtitle: "Cloud storage with AI tagging"
  },
  {
    icon: Users,
    title: "Client CRM",
    description: "Relationship management suite",
    subtitle: "Lead tracking & communication"
  },
  {
    icon: FolderOpen,
    title: "Portfolio Builder",
    description: "Showcase your best work",
    subtitle: "Dynamic portfolio websites"
  },
  {
    icon: BarChart3,
    title: "Analytics Engine",
    description: "Deep performance insights",
    subtitle: "Real-time metrics dashboard"
  },
  {
    icon: Smartphone,
    title: "Mobile Companion",
    description: "On-the-go productivity",
    subtitle: "Native iOS & Android apps"
  },
  {
    icon: Shield,
    title: "Security Center",
    description: "Enterprise-grade protection",
    subtitle: "2FA & encrypted backups"
  },
  {
    icon: Zap,
    title: "Automation Hub",
    description: "Workflow optimization",
    subtitle: "Custom triggers & actions"
  },
  {
    icon: Target,
    title: "Campaign Manager",
    description: "Multi-channel campaigns",
    subtitle: "ROI tracking & optimization"
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Lightning-fast delivery",
    subtitle: "Worldwide content distribution"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Intelligent alerts system",
    subtitle: "Priority-based filtering"
  }
];

const FeatureGrid = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-gradient mb-6">
            The Complete Arsenal
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Eleven powerful modules designed to dominate your industry. 
            Each tool is crafted with precision to give you the competitive edge.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div 
                key={index}
                className="card-feature group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-charcoal" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-3 group-hover:text-teal transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-foreground-muted mb-4 leading-relaxed">
                  {module.description}
                </p>
                
                <p className="text-sm text-teal font-inter font-medium">
                  {module.subtitle}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-teal/50 transition-colors duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground-muted mb-6">
            Ready to access all modules?
          </p>
          <button className="btn-primary">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
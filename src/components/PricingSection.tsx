import { useState } from "react";
import { Check, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Operator",
    description: "For solo creators starting their empire",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "5 Content Modules",
      "Basic Analytics",
      "1GB Asset Storage", 
      "Email Support",
      "Mobile App Access",
      "Basic Automation"
    ],
    cta: "Start Operating",
    popular: false
  },
  {
    name: "Syndicate",
    description: "For growing teams and agencies",
    monthlyPrice: 129,
    annualPrice: 99,
    features: [
      "All 11 Modules",
      "Advanced Analytics",
      "50GB Asset Storage",
      "Priority Support",
      "Team Collaboration",
      "Advanced Automation",
      "Custom Integrations",
      "White-label Options"
    ],
    cta: "Join Syndicate", 
    popular: true
  },
  {
    name: "Empire",
    description: "For enterprises dominating markets",
    monthlyPrice: 299,
    annualPrice: 249,
    features: [
      "Everything in Syndicate",
      "Unlimited Storage",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Custom Development",
      "API Access",
      "Advanced Security",
      "SLA Guarantee"
    ],
    cta: "Build Empire",
    popular: false
  }
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-foreground mb-6">
            Choose Your <span className="text-gradient">Power Level</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-8">
            Select the plan that matches your ambition. Every tier unlocks new capabilities.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-card rounded-2xl p-2 max-w-sm mx-auto">
            <span className={`font-inter font-medium ${!isAnnual ? 'text-foreground' : 'text-foreground-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                isAnnual ? 'bg-teal' : 'bg-border'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-inter font-medium ${isAnnual ? 'text-foreground' : 'text-foreground-muted'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-bold">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-pricing relative ${
                plan.popular ? 'ring-2 ring-teal scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-charcoal px-6 py-2 rounded-full font-montserrat font-bold text-sm flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground-muted mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-montserrat font-extrabold text-gradient">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-foreground-muted">
                    /{isAnnual ? 'month' : 'month'}
                  </span>
                  {isAnnual && (
                    <div className="text-sm text-teal mt-2">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-charcoal" />
                    </div>
                    <span className="text-foreground-muted font-inter">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={
                  plan.popular 
                    ? "btn-primary w-full" 
                    : "btn-secondary w-full"
                }
              >
                {plan.cta}
                {plan.popular && <Zap className="ml-2 w-5 h-5" />}
              </button>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-foreground-muted">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal/20 rounded-lg flex items-center justify-center">
              <span className="text-teal font-bold text-sm">SSL</span>
            </div>
            <span className="text-sm font-inter">256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal/20 rounded-lg flex items-center justify-center">
              <span className="text-teal font-bold text-sm">PCI</span>
            </div>
            <span className="text-sm font-inter">Compliant Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal/20 rounded-lg flex items-center justify-center">
              <span className="text-teal font-bold text-sm">SOC</span>
            </div>
            <span className="text-sm font-inter">Type 2 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    company: "Digital Syndicate",
    image: testimonial1,
    quote: "Algorithm HQ transformed how we operate. The automation alone saved us 40 hours a week. It's like having a secret weapon.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Freelance Designer",
    company: "Independent",
    image: testimonial2,
    quote: "The portfolio builder and client CRM are game-changers. I've doubled my client base and my rates since joining the syndicate.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Content Strategist",
    company: "Growth Labs",
    image: testimonial3,
    quote: "The analytics engine gives me insights I never had before. Now I make data-driven decisions that actually move the needle.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-foreground mb-6">
            Voices from the <span className="text-gradient">Syndicate</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Join thousands of elite creators who've elevated their game with Algorithm HQ.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="card-feature text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-warning fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl md:text-3xl font-inter leading-relaxed text-foreground mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-teal mr-4 object-cover"
                      />
                      <div className="text-left">
                        <h4 className="font-montserrat font-bold text-lg text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-foreground-muted">
                          {testimonial.role}
                        </p>
                        <p className="text-teal font-medium text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card border border-teal/30 rounded-full p-4 hover:bg-teal hover:text-charcoal transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card border border-teal/30 rounded-full p-4 hover:bg-teal hover:text-charcoal transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal scale-125' 
                    : 'bg-border hover:bg-teal/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
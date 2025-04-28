import { GraduationCap, Book, Users, MessageCircle, LifeBuoy, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  activeIndex: number;
  totalServices: number;
  radius: number;
  isMobile: boolean;
  onClick: () => void;
}
const Services = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(220);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Check for mobile viewport and adjust radius
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setRadius(mobile ? 150 : 220);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const rotateRight = () => {
    setActiveCardIndex((prev) => (prev + 1) % services.length);
  };

  const rotateLeft = () => {
    setActiveCardIndex((prev) => (prev - 1 + services.length) % services.length);
  };
  
  const selectCard = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 text-gold">
          Our Services
        </h1>

        <div className="flex flex-col items-center relative">
          {/* Carousel container with fixed height */}
          <div 
            ref={carouselRef}
            className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center mb-8"
          >
            {/* Ring indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-gold/20"></div>
            
            {/* Service Cards */}
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index}
                activeIndex={activeCardIndex}
                totalServices={services.length}
                radius={radius}
                isMobile={isMobile}
                onClick={() => selectCard(index)}
              />
            ))}
          </div>
          
          {/* Carousel controls */}
          <div className="flex gap-8 mb-8">
            <button 
              onClick={rotateLeft} 
              className="p-3 rounded-full bg-gold/20 hover:bg-gold/40 transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 text-gold" />
            </button>
            <button
              onClick={rotateRight}
              className="p-3 rounded-full bg-gold/20 hover:bg-gold/40 transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 text-gold" />
            </button>
          </div>
          
          {/* Active service details */}
          <div className="max-w-2xl mx-auto text-center mt-4 px-4">
            <h2 className="text-2xl font-montserrat font-bold text-gold mb-4">
              {services[activeCardIndex].title}
            </h2>
            <p className="text-gray-300 text-sm">
              {services[activeCardIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ 
  service, 
  index, 
  activeIndex,
  totalServices,
  radius,
  isMobile,
  onClick
}: ServiceCardProps) => {
  // Calculate rotational offset to position active card at the top
  const rotationOffset = -90; // Start from the top position (12 o'clock)
  
  // Calculate the base angle for each card
  const angleStep = 360 / totalServices;
  
  // Calculate position on the circle - add the activeIndex rotation to create the carousel effect
  const angleOffset = -activeIndex * angleStep;
  const itemAngle = angleStep * index + angleOffset + rotationOffset;
  
  // Convert to radians for positioning
  const radians = (itemAngle * Math.PI) / 180;
  
  // Calculate x and y coordinates on the circle
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  
  // Determine if this card is active
  const isActive = activeIndex === index;
  
  // Adjust size based on active state and viewport
  const size = isMobile 
    ? (isActive ? 110 : 90) 
    : (isActive ? 140 : 120);
  
  // Calculate z-index - cards in front should appear on top
  // Using sine of the angle to determine if card is in front (positive values) or back (negative values)
  const zIndex = Math.round(50 - Math.sin(radians) * 20);
  
  // Calculate opacity - cards in back should be slightly more transparent
  const opacityMultiplier = 0.7 + 0.3 * Math.max(0, Math.cos(radians));
  const opacity = isActive ? 1 : 0.6 * opacityMultiplier;
  
  // Scale effect based on position and active state
  const scaleBase = isActive ? 1.1 : 0.95;
  const scaleFactor = scaleBase * (0.85 + 0.15 * Math.max(0, Math.cos(radians)));
  
  return (
    <div 
      className={`absolute rounded-full shadow-lg bg-gray-900 border flex flex-col items-center justify-center p-3 cursor-pointer transition-all
        ${isActive ? 'border-gold shadow-gold/30' : 'border-gold/20'}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${x}px, ${y}px) scale(${scaleFactor})`,
        zIndex,
        opacity,
        transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      onClick={onClick}
    >
      {/* Content that stays oriented correctly */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-gold mb-1">
          {service.icon}
        </div>
        <h3 className="text-center text-xs md:text-sm font-montserrat font-semibold text-gold line-clamp-2">
          {service.title}
        </h3>
      </div>
    </div>
  );
};

const services: Service[] = [
  {
    title: "Peer Mentoring",
    description: "Connect with experienced students who have successfully navigated the admissions process. Our mentors provide personalized guidance based on their own experiences with university applications, helping you avoid common pitfalls and maximize your chances of success.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Study Resources",
    description: "Access our curated collection of study materials, guides, and practice tests. We offer comprehensive resources for standardized tests, subject-specific study guides, and application preparation materials to help you excel academically.",
    icon: <Book className="w-8 h-8" />,
  },
  {
    title: "Application Guidance",
    description: "Get personalized advice on your university applications and essays. Our experts provide feedback on personal statements, application strategies, and interview preparation to help you present your best self to admissions committees.",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: "Chat with a Mentor",
    description: "Ask questions anonymously or directly in our Discord community for on-demand support. Join our Discord to have on-demand answers to your burning questions about university admissions. Prefer privacy? Ask via our website anonymously for a response within 2-7 business days, straight to your email.",
    icon: <MessageCircle className="w-8 h-8" />,
  },
  {
    title: "Course Help",
    description: "Get assistance with higher-level high school courses in math, sciences, computer science, and business. We offer targeted help for challenging high school courses including mathematics, biology, chemistry, physics, computer science, and business-related subjects. Join our Discord for immediate assistance or submit questions through our website.",
    icon: <LifeBuoy className="w-8 h-8" />,
  },
  {
    title: "Resource Library",
    description: "Read our Medium blog for FAQ about extracurriculars, admissions, and student spotlights. Our regularly updated blog features comprehensive guides on building compelling extracurricular profiles, navigating the admissions process, and inspirational stories from successful students who've achieved their university goals.",
    icon: <Book className="w-8 h-8" />,
  },
];

export default Services;

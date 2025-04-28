import { GraduationCap, Users, Award } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import TeamMember from "@/components/TeamMember";
import { teamMembers } from "@/data/teamMembers";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setFocusedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const startAutoPlay = () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      
      autoPlayRef.current = setInterval(() => {
        if (!isPaused && emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        }
      }, 3000);
    };

    startAutoPlay();

    emblaApi.on('pointerDown', () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    });
    
    emblaApi.on('pointerUp', () => {
      startAutoPlay();
    });

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      emblaApi.off('pointerDown');
      emblaApi.off('pointerUp');
    };
  }, [emblaApi, isPaused]);

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 text-gold">
          About Uni'D
        </h1>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-300 mb-6">
            Founded by students for students, Uni'D is committed to democratizing access to quality education guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-900 border-gold/20">
            <CardHeader>
              <Users className="w-12 h-12 mb-4 text-gold" />
              <h3 className="text-xl font-montserrat font-semibold text-gold">Our Community</h3>
            </CardHeader>
            <CardContent className="text-gray-300">
              A diverse network of students, alumni, and mentors dedicated to helping each other succeed.
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gold/20">
            <CardHeader>
              <GraduationCap className="w-12 h-12 mb-4 text-gold" />
              <h3 className="text-xl font-montserrat font-semibold text-gold">Our Mission</h3>
            </CardHeader>
            <CardContent className="text-gray-300">
              To empower students with the knowledge and support they need to achieve their academic goals.
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gold/20">
            <CardHeader>
              <Award className="w-12 h-12 mb-4 text-gold" />
              <h3 className="text-xl font-montserrat font-semibold text-gold">Our Values</h3>
            </CardHeader>
            <CardContent className="text-gray-300">
              Integrity, collaboration, and dedication to student success guide everything we do.
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-montserrat font-bold text-center mb-8 text-gold">
          Meet Our Team
        </h2>
        
        <div 
          className="relative px-4 sm:px-12 max-w-5xl mx-auto" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex py-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 px-4">
                  <TeamMember 
                    {...member} 
                    isFocused={index === focusedIndex} 
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/80 border border-gold/30 rounded-full p-2 text-gold hover:bg-gold/10 hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/80 border border-gold/30 rounded-full p-2 text-gold hover:bg-gold/10 hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

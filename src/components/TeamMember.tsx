
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMemberProps {
  name: string;
  handle: string;
  role?: string;
  university: string;
  program: string;
  appliedTo: string[];
  extra: string;
  linkedin?: string;
  cv?: string;
  isFocused: boolean;
}

const TeamMember = ({ 
  name, 
  handle, 
  role,
  university, 
  program, 
  appliedTo, 
  extra, 
  linkedin, 
  cv,
  isFocused 
}: TeamMemberProps) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      animate={{
        scale: isFocused ? 1 : 0.9,
        opacity: isFocused ? 1 : 0.7
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={`transition-all duration-300 ${isFocused ? 'z-10' : 'z-0'}`}
    >
      <Card className="bg-gray-900 border-gold/20 overflow-hidden">
        <div className={`transition-all duration-300 ease-in-out ${isFocused ? 'h-420 w-350' : 'h-200 w-250'}`}>
          <CardContent className="pt-6 pb-2 flex flex-col items-center justify-center w-full text-center h-full">
            <Avatar className={`border-2 border-gold/50 transition-all duration-300 ${isFocused ? 'h-24 w-24 mb-4' : 'h-16 w-16 mb-2'}`}>
              <AvatarFallback className="bg-gray-800 text-gold font-semibold">{initials}</AvatarFallback>
              <AvatarImage src="/placeholder.svg" alt={name} />
            </Avatar>
            
            <h3 className={`font-montserrat font-semibold text-gold text-center w-full transition-all duration-300 ${isFocused ? 'text-2xl mb-2' : 'text-lg'}`}>
              {name}
            </h3>
            
            {isFocused && (
              <div className="w-full space-y-4 mt-3 px-2 flex flex-col items-center">
                <div className="space-y-1 text-center w-full">
                  {role && <p className="text-gold/80 font-medium">{role}</p>}
                  <p className="text-gray-300">{university}</p>
                  <p className="text-gray-300">{program}</p>
                </div>
                
                {appliedTo.length > 0 && (
                  <div className="space-y-1 text-center w-full">
                    <h4 className="text-gold/80 font-semibold text-sm">Accepted to:</h4>
                    <div className="text-gray-300 text-sm">
                      {appliedTo.join(", ")}
                    </div>
                  </div>
                )}
                
                <div className="space-y-1 text-center w-full">
                  <h4 className="text-gold/80 font-semibold text-sm">Fun Fact:</h4>
                  <p className="text-gray-300 text-sm italic">{extra}</p>
                </div>
                
                <div className="flex gap-2 mt-4 justify-center w-full">
                  {linkedin && (
                    <a 
                      href={linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-gray-800 hover:bg-gray-700 text-white transition-colors py-1.5 px-3 rounded-md"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                  )}
                  
                  {cv && (
                    <a 
                      href={cv} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-gray-800 hover:bg-gray-700 text-white transition-colors py-1.5 px-3 rounded-md"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="text-xs">CV</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default TeamMember;

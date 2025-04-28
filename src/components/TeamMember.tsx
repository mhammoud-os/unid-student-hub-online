
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  handle: string;
  university: string;
  program: string;
  appliedTo: string[];
  extra: string;
  linkedin?: string;
}

const TeamMember = ({ name, handle, university, program, appliedTo, extra, linkedin }: TeamMemberProps) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="bg-gray-900 border-gold/20 w-[300px] h-[450px] flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20 mb-3 border-2 border-gold/50">
            <AvatarFallback className="bg-gray-800 text-gold font-semibold">{initials}</AvatarFallback>
            <AvatarImage src="/placeholder.svg" alt={name} />
          </Avatar>
          <h3 className="text-xl font-montserrat font-semibold text-gold text-center">{name}</h3>
          <p className="text-gray-400 text-sm">{handle}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div>
          <h4 className="text-gold/80 font-semibold mb-1">Program</h4>
          <p className="text-gray-300">{university}</p>
          <p className="text-gray-300">{program}</p>
        </div>
        <div>
          <h4 className="text-gold/80 font-semibold mb-1">Accepted to</h4>
          <div className="text-gray-300 text-sm">
            {appliedTo.join(", ")}
          </div>
        </div>
        <div>
          <h4 className="text-gold/80 font-semibold mb-1">Fun Fact</h4>
          <p className="text-gray-300 text-sm italic">{extra}</p>
        </div>
      </CardContent>
      {linkedin && (
        <CardFooter className="pt-0">
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white transition-colors py-2 px-4 rounded-md"
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default TeamMember;

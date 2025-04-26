
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  handle: string;
  university: string;
  program: string;
  appliedTo: string[];
  extra: string;
}

const TeamMember = ({ name, handle, university, program, appliedTo, extra }: TeamMemberProps) => {
  return (
    <Card className="bg-gray-900 border-gold/20 w-[300px] h-[400px]">
      <CardHeader>
        <h3 className="text-xl font-montserrat font-semibold text-gold">{name}</h3>
        <p className="text-gray-400">{handle}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-gold/80 font-semibold mb-1">Program</h4>
          <p className="text-gray-300">{university}</p>
          <p className="text-gray-300">{program}</p>
        </div>
        <div>
          <h4 className="text-gold/80 font-semibold mb-1">Applied to</h4>
          <div className="text-gray-300 text-sm">
            {appliedTo.join(", ")}
          </div>
        </div>
        <div>
          <h4 className="text-gold/80 font-semibold mb-1">Extra</h4>
          <p className="text-gray-300 text-sm italic">{extra}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;

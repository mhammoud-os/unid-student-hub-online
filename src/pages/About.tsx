
import { GraduationCap, Users, Award } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const About = () => {
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
      </div>
    </div>
  );
};

export default About;

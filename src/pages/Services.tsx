
import { GraduationCap, Book, Users } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12 text-gold">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <div className="text-gold mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4 text-gold">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Peer Mentoring",
    description: "Connect with experienced students who have successfully navigated the admissions process.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Study Resources",
    description: "Access our curated collection of study materials, guides, and practice tests.",
    icon: <Book className="w-8 h-8" />,
  },
  {
    title: "Application Guidance",
    description: "Get personalized advice on your university applications and essays.",
    icon: <GraduationCap className="w-8 h-8" />,
  },
];

export default Services;

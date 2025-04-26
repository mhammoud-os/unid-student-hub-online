import { Link } from "react-router-dom";
import { DiscIcon, InstagramIcon, BookIcon, Linkedin, Discord  } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-xl">Uni'D</h3>
            <p className="font-opensans text-sm text-gray-300">
              Student-led, community-driven organization helping others succeed in their admissions journeys.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-montserrat font-bold">Quick Links</h4>
            <div className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/ask">Ask Anonymously</FooterLink>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-montserrat font-bold">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="https://discord.gg/as4APmagn6" className="text-white hover:text-gold transition-colors">
              <Discord size={24} />
            </a>
            <a href="https://www.instagram.com/uni.d_/" className="text-white hover:text-gold transition-colors">
              <InstagramIcon size={24} />
            </a>
            <a href="https://medium.com/@unidadmissions" className="text-white hover:text-gold transition-colors">
              <BookIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/company/unid-admissions/" className="text-white hover:text-gold transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Uni'D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <div>
    <Link
      to={to}
      className="block text-gray-300 hover:text-gold transition-colors font-opensans text-sm"
    >
      {children}
    </Link>
  </div>
);

export default Footer;

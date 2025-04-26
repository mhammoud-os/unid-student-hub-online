import { Link } from "react-router-dom";
import { InstagramIcon, BookIcon, Linkedin } from "lucide-react";

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
              <FooterLink to="/">Home</FooterLink>
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
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127.14 96.36"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
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

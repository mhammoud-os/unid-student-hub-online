
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-50 border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/favicon.ico"
              alt="Uni'D Logo" 
              className="h-10 w-10 rounded-full object-cover transition-transform group-hover:scale-105" 
            />
            <span className="font-montserrat font-bold text-xl text-white group-hover:text-gold transition-colors">
              Uni'D
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/ask">Ask Anonymously</NavLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="space-y-2">
              {[1, 2, 3].map((bar) => (
                <span
                  key={bar}
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen && (
                      bar === 1 ? "rotate-45 translate-y-2.5" :
                      bar === 2 ? "opacity-0" :
                      "-rotate-45 -translate-y-2.5"
                    )
                  }`}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? "max-h-64" : "max-h-0"
          } overflow-hidden transition-all duration-300`}
        >
          <div className="pb-4 space-y-2">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink to="/ask" onClick={() => setIsOpen(false)}>Ask Anonymously</MobileNavLink>
            <div className="px-4 py-2">
              <a 
                href="https://discord.gg/unid" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors"
              >
                <img 
                  src="/discord-logo.svg" 
                  alt="Discord" 
                  className="h-5 w-5" 
                />
                <span className="font-opensans">Join Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="font-opensans text-gray-300 hover:text-gold transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="block py-2 px-4 text-gray-300 hover:text-gold transition-colors font-opensans"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;

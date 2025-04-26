import { InstagramIcon, BookIcon, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black via-black/95 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in text-gold">
            Welcome to Uni'D
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-gold/80 mb-8 animate-fade-in">
            Student-led, community-driven.
          </p>
          <p className="font-opensans text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in">
            We are a group of university students passionate about helping others succeed in their admissions journeys.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <SocialButton
              href="https://discord.gg/as4APmagn6"
              icon={
                <svg
                  className="mr-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  fill="currentColor"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              }
              text="Join our Discord"
            />
            <SocialButton
              href="https://www.instagram.com/uni.d_/"
              icon={<InstagramIcon className="mr-2" />}
              text="Follow on Instagram"
            />
            <SocialButton
              href="https://medium.com/@unidadmissions"
              icon={<BookIcon className="mr-2" />}
              text="Read on Medium"
            />
            <SocialButton
              href="https://www.linkedin.com/company/unid-admissions/"
              icon={<Linkedin className="mr-2" />}
              text="Follow on LinkedIn"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Peer Tutoring"
              description="Get help from experienced students who've been in your shoes."
            />
            <FeatureCard
              title="Resources"
              description="Access alumni notes and study materials for your journey."
            />
            <FeatureCard
              title="Community"
              description="Connect with like-minded students and mentors."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6 text-gold">
            Ready to Start Your Journey?
          </h2>
          <Link
            to="/services"
            className="inline-block bg-gold text-black font-montserrat font-semibold px-8 py-3 rounded-md hover:bg-gold/90 transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  );
};

const SocialButton = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    className="inline-flex items-center bg-gold/10 text-gold border border-gold/20 font-montserrat font-semibold px-6 py-3 rounded-md hover:bg-gold/20 transition-colors"
  >
    {icon}
    {text}
  </a>
);

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-black/50 p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
    <h3 className="font-montserrat font-semibold text-xl mb-4 text-gold">{title}</h3>
    <p className="font-opensans text-gray-300">{description}</p>
  </div>
);

export default Index;

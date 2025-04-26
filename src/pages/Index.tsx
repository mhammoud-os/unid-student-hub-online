
import { DiscIcon, InstagramIcon, BookIcon, Linkedin} from "lucide-react";
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
              icon={<DiscIcon className="mr-2" />}
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

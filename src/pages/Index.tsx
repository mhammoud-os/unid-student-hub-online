import { DiscIcon, InstagramIcon, BookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gold/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Welcome to Uni'D
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Student-led, community-driven.
          </p>
          <p className="font-opensans text-lg text-gray-700 max-w-2xl mx-auto mb-12 animate-fade-in">
            We are a group of university students passionate about helping others succeed in their admissions journeys.
          </p>
      
      <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
        <SocialButton
          href="https://discord.gg/your-invite-link"
          icon={<DiscIcon className="mr-2" />}
          text="Join Discord"
        />
        <SocialButton
          href="https://instagram.com/your-instagram"
          icon={<InstagramIcon className="mr-2" />}
          text="Follow Instagram"
        />
        <SocialButton
          href="https://medium.com/your-publication"
          icon={<BookIcon className="mr-2" />}
          text="Read on Medium"
        />
      </div>
      
      {/* Features Section */}
      <section className="py-16">
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
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <Link
            to="/services"
            className="inline-block bg-gold text-black font-montserrat font-semibold px-8 py-3 rounded-md hover:bg-gold-light transition-colors"
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
    className="inline-flex items-center bg-black text-white font-montserrat font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
  >
    {icon}
    {text}
  </a>
);

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="font-montserrat font-semibold text-xl mb-4">{title}</h3>
    <p className="font-opensans text-gray-600">{description}</p>
  </div>
);

export default Index;

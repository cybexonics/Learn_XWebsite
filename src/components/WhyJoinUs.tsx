
import React from "react";
import {
  CreditCard, Link as LinkIcon, Shield, Users, Award
} from "lucide-react";

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center p-3 bg-teachGrow-muted rounded-lg text-teachGrow-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyJoinUs = () => {
  const features = [
    {
      icon: <LinkIcon size={24} />,
      title: "No More Copy-Paste Hassles",
      description: "Forget about copying meeting links and WhatsApp confusion. Create professional classes with just one click and share instantly.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Say Goodbye to Payment Chasing",
      description: "Never chase students for payments again. Our platform ensures students pay first, with 90% transferred directly to your account.",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure and Private Classes",
      description: "Every class is encrypted and protected from unwanted sharing. Only registered, paying students can access your teaching content.",
    },
    {
      icon: <Users size={24} />,
      title: "We Bring Students to You",
      description: "Join for just ₹999/year and we'll actively promote your profile to help you acquire more students without additional marketing costs.",
    },
    {
      icon: <Award size={24} />,
      title: "Build Your Personal Brand",
      description: "Establish yourself as an authority in your field. Grow your following, showcase your expertise, and build credibility that lasts.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teachGrow-dark mb-4">Why Professional Educators Choose Learn X</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focus on what you do best—teaching—while Learn X handles the technical, administrative, and marketing aspects of your online teaching business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;

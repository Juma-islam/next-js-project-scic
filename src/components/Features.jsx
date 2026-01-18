import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Headset } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-8 h-8 text-purple-600" />,
    title: "Free Shipping",
    description: "On all orders over $50.00",
    bg: "bg-blue-50"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "Secure Payment",
    description: "SSL encrypted transactions",
    bg: "bg-green-50"
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-orange-600" />,
    title: "Easy Returns",
    description: "30-day money back guarantee",
    bg: "bg-orange-50"
  },
  {
    icon: <Headset className="w-8 h-8 text-red-600" />,
    title: "24/7 Support",
    description: "Dedicated customer assistance",
    bg: "bg-red-50"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Seamless Shopping
          </h2>
          <p className="text-gray-500">
            We provide the best services for our customers to ensure a smooth and reliable buying experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
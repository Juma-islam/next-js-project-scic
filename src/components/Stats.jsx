import React from 'react';

const stats = [
  { label: "Happy Customers", value: "10K+", suffix: "Global users trust us" },
  { label: "Premium Products", value: "500+", suffix: "Curated collections" },
  { label: "Store Categories", value: "50+", suffix: "Everything you need" },
  { label: "Expert Support", value: "24/7", suffix: "Always here to help" },
];

const Stats = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                {/* Subtle underline decoration */}
                <div className="w-10 h-1 bg-purple-500 mx-auto rounded-full mb-4 opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all"></div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-100 uppercase tracking-widest text-sm mb-1">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm italic">
                {stat.suffix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80',
    count: '150+ Items',
    link: '/category/electronics',
    gridSpan: 'md:col-span-2' // Makes this item wider for visual interest
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
    count: '300+ Items',
    link: '/category/fashion',
    gridSpan: 'md:col-span-1'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80',
    count: '80+ Items',
    link: '/category/accessories',
    gridSpan: 'md:col-span-1'
  },
  {
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1513519247388-44735dd35cbf?auto=format&fit=crop&q=80',
    count: '120+ Items',
    link: '/category/home',
    gridSpan: 'md:col-span-2'
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase tracking-tight">
              Shop by Category
            </h2>
            <p className="text-gray-500">Find exactly what you're looking for in our curated collections.</p>
          </div>
          <Link href="/shop" className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Shop <ArrowRight size={20} />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link 
              href={cat.link} 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl h-[300px] shadow-lg ${cat.gridSpan}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content Label */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-1 block">
                      {cat.count}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-0 uppercase tracking-wide">
                      {cat.name}
                    </h3>
                  </div>
                  
                  {/* Floating Action Button */}
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
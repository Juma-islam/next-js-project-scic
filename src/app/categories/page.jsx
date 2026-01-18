import Link from 'next/link';
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Shirt, 
  Home, 
  Book, 
  Gamepad2, 
  Car, 
  Heart, 
  Utensils,
  Camera,
  Watch,
  Dumbbell,
  Baby,
  PawPrint,
  Palette,
  Wrench,
  Flower2,
  Gift,
  Music
} from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and tech accessories',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    itemCount: 156
  },
  {
    id: 'computers',
    name: 'Computers',
    description: 'Laptops, desktops and accessories',
    icon: Laptop,
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'hover:from-purple-600 hover:to-purple-700',
    itemCount: 89
  },
  {
    id: 'audio',
    name: 'Audio & Music',
    description: 'Headphones, speakers and instruments',
    icon: Headphones,
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700',
    itemCount: 124
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Clothing, shoes and accessories',
    icon: Shirt,
    color: 'from-pink-500 to-pink-600',
    hoverColor: 'hover:from-pink-600 hover:to-pink-700',
    itemCount: 234
  },
  {
    id: 'home',
    name: 'Home & Garden',
    description: 'Furniture, decor and garden supplies',
    icon: Home,
    color: 'from-orange-500 to-orange-600',
    hoverColor: 'hover:from-orange-600 hover:to-orange-700',
    itemCount: 178
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Educational, fiction and reference books',
    icon: Book,
    color: 'from-indigo-500 to-indigo-600',
    hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
    itemCount: 312
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Video games and gaming accessories',
    icon: Gamepad2,
    color: 'from-red-500 to-red-600',
    hoverColor: 'hover:from-red-600 hover:to-red-700',
    itemCount: 95
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Car parts and accessories',
    icon: Car,
    color: 'from-gray-500 to-gray-600',
    hoverColor: 'hover:from-gray-600 hover:to-gray-700',
    itemCount: 67
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    description: 'Skincare, makeup and wellness products',
    icon: Heart,
    color: 'from-rose-500 to-rose-600',
    hoverColor: 'hover:from-rose-600 hover:to-rose-700',
    itemCount: 143
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    description: 'Gourmet food and specialty drinks',
    icon: Utensils,
    color: 'from-yellow-500 to-yellow-600',
    hoverColor: 'hover:from-yellow-600 hover:to-yellow-700',
    itemCount: 201
  },
  {
    id: 'photography',
    name: 'Photography',
    description: 'Cameras, lenses and photo equipment',
    icon: Camera,
    color: 'from-teal-500 to-teal-600',
    hoverColor: 'hover:from-teal-600 hover:to-teal-700',
    itemCount: 78
  },
  {
    id: 'watches',
    name: 'Watches',
    description: 'Luxury and casual timepieces',
    icon: Watch,
    color: 'from-amber-500 to-amber-600',
    hoverColor: 'hover:from-amber-600 hover:to-amber-700',
    itemCount: 56
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    description: 'Exercise equipment and sportswear',
    icon: Dumbbell,
    color: 'from-lime-500 to-lime-600',
    hoverColor: 'hover:from-lime-600 hover:to-lime-700',
    itemCount: 167
  },
  {
    id: 'baby',
    name: 'Baby & Kids',
    description: 'Toys, clothing and baby care products',
    icon: Baby,
    color: 'from-cyan-500 to-cyan-600',
    hoverColor: 'hover:from-cyan-600 hover:to-cyan-700',
    itemCount: 189
  },
  {
    id: 'pets',
    name: 'Pet Supplies',
    description: 'Food, toys and accessories for pets',
    icon: PawPrint,
    color: 'from-emerald-500 to-emerald-600',
    hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
    itemCount: 134
  },
  {
    id: 'art',
    name: 'Art & Crafts',
    description: 'Art supplies and craft materials',
    icon: Palette,
    color: 'from-violet-500 to-violet-600',
    hoverColor: 'hover:from-violet-600 hover:to-violet-700',
    itemCount: 92
  },
  {
    id: 'tools',
    name: 'Tools & Hardware',
    description: 'Power tools and hardware supplies',
    icon: Wrench,
    color: 'from-slate-500 to-slate-600',
    hoverColor: 'hover:from-slate-600 hover:to-slate-700',
    itemCount: 145
  },
  {
    id: 'outdoor',
    name: 'Outdoor & Garden',
    description: 'Camping gear and garden tools',
    icon: Flower2,
    color: 'from-green-600 to-green-700',
    hoverColor: 'hover:from-green-700 hover:to-green-800',
    itemCount: 112
  },
  {
    id: 'gifts',
    name: 'Gifts & Occasions',
    description: 'Perfect gifts for every occasion',
    icon: Gift,
    color: 'from-fuchsia-500 to-fuchsia-600',
    hoverColor: 'hover:from-fuchsia-600 hover:to-fuchsia-700',
    itemCount: 87
  },
  {
    id: 'instruments',
    name: 'Musical Instruments',
    description: 'Guitars, keyboards and accessories',
    icon: Music,
    color: 'from-sky-500 to-sky-600',
    hoverColor: 'hover:from-sky-600 hover:to-sky-700',
    itemCount: 73
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Shop by Category</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover thousands of products across all categories. Find exactly what you're looking for.
          </p>
          <div className="flex justify-center items-center space-x-4 text-lg">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              {categories.length} Categories
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              {categories.reduce((total, cat) => total + cat.itemCount, 0)}+ Products
            </span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse All Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From electronics to fashion, find everything you need in our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                href={`/items?category=${category.id}`}
                className="group"
              >
                <div className={`bg-gradient-to-br ${category.color} ${category.hoverColor} rounded-2xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                      <IconComponent size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{category.itemCount}</div>
                      <div className="text-sm opacity-80">items</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {category.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>Shop now</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600">Most searched categories this month</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  href={`/items?category=${category.id}`}
                  className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.itemCount} items
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our support team or browse our complete product catalog
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/items"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
            >
              Browse All Products
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
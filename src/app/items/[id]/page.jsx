import { getSingleItemFromDB } from "@/services/itemsServer";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Star, 
  Package, 
  Shield, 
  Truck,
  RotateCcw
} from "lucide-react";

export default async function ItemDetailPage({ params }) {
  const { id } = await params;
  const item = await getSingleItemFromDB(id);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            href="/items" 
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  // Function to get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Electronics': 'from-blue-500 to-blue-600',
      'Computers': 'from-purple-500 to-purple-600',
      'Audio': 'from-green-500 to-green-600',
      'Fashion': 'from-pink-500 to-pink-600',
      'Home': 'from-orange-500 to-orange-600',
      'Books': 'from-indigo-500 to-indigo-600',
      'Gaming': 'from-red-500 to-red-600',
      'Automotive': 'from-gray-500 to-gray-600',
      'Health': 'from-rose-500 to-rose-600',
      'Food': 'from-yellow-500 to-yellow-600',
      'Photography': 'from-teal-500 to-teal-600',
      'Watches': 'from-amber-500 to-amber-600',
      'Sports': 'from-lime-500 to-lime-600',
      'Baby': 'from-cyan-500 to-cyan-600',
      'Pets': 'from-emerald-500 to-emerald-600',
      'Art': 'from-violet-500 to-violet-600',
      'Tools': 'from-slate-500 to-slate-600',
      'Outdoor': 'from-green-600 to-green-700',
      'Gifts': 'from-fuchsia-500 to-fuchsia-600',
      'Instruments': 'from-sky-500 to-sky-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <section className="bg-white py-4 shadow-sm border-b">
        <div className="container mx-auto px-4">
          <Link 
            href="/items" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                {item.stock === 0 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div>
                <span className={`inline-block bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {item.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {item.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">(4.0)</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">128 reviews</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${item.price}
                </span>
                {item.price > 100 && (
                  <span className="text-xl text-gray-500 line-through">
                    ${(item.price * 1.2).toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
              
              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <Package size={20} className="text-gray-600" />
                <span className="text-gray-700">
                  {item.stock > 0 ? (
                    <span className="text-green-600 font-semibold">
                      In Stock ({item.stock} available)
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">Out of Stock</span>
                  )}
                </span>
              </div>
              {/* Action Buttons */}
              {/* 
              <div className="space-y-4">
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={item.stock === 0}
                >
                  <ShoppingCart size={20} />
                  <span>{item.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                </button>
                
                <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Heart size={20} />
                  <span>Add to Wishlist</span>
                </button>
              </div> */}

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Truck size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders over $50</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Warranty</p>
                    <p className="text-sm text-gray-600">1 year guarantee</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <RotateCcw size={16} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Easy Returns</p>
                    <p className="text-sm text-gray-600">30 day return policy</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Package size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fast Delivery</p>
                    <p className="text-sm text-gray-600">2-3 business days</p>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="pt-6 border-t">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h2>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Product ID:</span>
                    <span className="font-medium text-gray-900">{item._id}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium text-gray-900">{item.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Stock:</span>
                    <span className="font-medium text-gray-900">{item.stock} units</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Added:</span>
                    <span className="font-medium text-gray-900">
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Recently'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

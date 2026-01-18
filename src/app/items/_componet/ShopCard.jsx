"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  ShoppingCart, 
  Heart, 
  Eye, 
  Star,
  Package,
  TrendingUp
} from 'lucide-react'

export const ShopCard = ({item}) => {
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
        return colors[item.category] || 'from-gray-500 to-gray-600';
    };

    // Function to determine stock status
    const getStockStatus = (stock) => {
        if (stock === 0) return { text: 'Out of Stock', color: 'text-red-600 bg-red-50' };
        if (stock <= 5) return { text: 'Low Stock', color: 'text-orange-600 bg-orange-50' };
        return { text: 'In Stock', color: 'text-green-600 bg-green-50' };
    };

    const stockStatus = getStockStatus(item.stock);

    return (
        <div className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Wishlist Button */}
            <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                <Heart size={18} className="text-gray-600 hover:text-red-500 transition-colors" />
            </button>

            {/* Stock Badge */}
            <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${stockStatus.color}`}>
                    {stockStatus.text}
                </span>
            </div>

            {/* Image Section - Clickable */}
            <Link href={`/items/${item._id}`}>
                <div className="relative h-64 bg-gray-100 overflow-hidden cursor-pointer">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                            <button 
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors transform hover:scale-110"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Eye size={20} className="text-gray-700" />
                            </button>
                            <button 
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors transform hover:scale-110"
                                onClick={(e) => e.preventDefault()}
                            >
                                <ShoppingCart size={20} className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Trending Badge */}
                    {item.stock > 50 && (
                        <div className="absolute bottom-4 left-4">
                            <div className="flex items-center space-x-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                <TrendingUp size={12} />
                                <span>Popular</span>
                            </div>
                        </div>
                    )}
                </div>
            </Link>

            {/* Content Section - Also Clickable */}
            <Link href={`/items/${item._id}`}>
                <div className="p-6 cursor-pointer">
                    {/* Category Badge */}
                    <div className="mb-3">
                        <span className={`inline-block bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                            {item.category}
                        </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={14} 
                                    className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(4.0)</span>
                    </div>

                    {/* Price and Stock Info */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">
                                ${item.price}
                            </span>
                            {item.price > 100 && (
                                <span className="text-sm text-gray-500 line-through">
                                    ${(item.price * 1.2).toFixed(2)}
                                </span>
                            )}
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-500">
                            <Package size={14} />
                            <span className="text-sm">{item.stock}</span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Action Buttons - Not clickable for navigation */}
            {/* <div className="px-6 pb-6">
                <div className="flex space-x-2">
                    <button 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                        disabled={item.stock === 0}
                        onClick={(e) => {
                            e.preventDefault();
                            // Add to cart logic here
                        }}
                    >
                        <ShoppingCart size={16} />
                        <span>{item.stock === 0 ? 'Sold Out' : 'Add to Cart'}</span>
                    </button>
                    
                    <button 
                        className="w-12 h-10 border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            // Add to wishlist logic here
                        }}
                    >
                        <Heart size={16} />
                    </button>
                </div>
            </div> */}

            {/* Discount Badge */}
            {item.price > 100 && (
                <div className="absolute top-0 left-0">
                    <div className="bg-red-500 text-white px-3 py-1 text-xs font-bold transform -rotate-45 -translate-x-3 translate-y-6">
                        SALE
                    </div>
                </div>
            )}
        </div>
    )
}
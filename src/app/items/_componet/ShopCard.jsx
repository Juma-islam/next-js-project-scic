import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ShopCard = ({item}) => {
    return (
        <div> <Link
            key={item._id}
            href={`/items/${item._id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
        >
            <div className="relative h-64">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h2 className="text-xl text-gray-600 font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                        ${item.price}
                    </span>
                    <span className="text-sm text-gray-500">
                        Stock: {item.stock}
                    </span>
                </div>
                <div className="mt-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">
                        {item.category}
                    </span>
                </div>
            </div>
        </Link></div>
    )
}

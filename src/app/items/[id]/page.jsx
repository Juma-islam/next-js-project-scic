import { getSingleItem } from "@/services/itemes.itemes";
import Image from "next/image";
import Link from "next/link";



export default async function ItemDetailPage({ params }) {
  const { id } = await params;
  const itemRes = await getSingleItem(id);
  const item = itemRes;

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/items" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <section className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <Link href="/items" className="text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
        
            <div>
              <h1 className="text-4xl text-gray-600 font-bold mb-4">{item.name}</h1>
              
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-semibold">
                  {item.category}
                </span>
              </div>
              
              <p className="text-3xl font-bold text-blue-600 mb-6">
                ${item.price}
              </p>
              
              <div className="mb-6">
                <h2 className="text-xl text-gray-600 font-semibold mb-2">Description</h2>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl text-gray-600  font-semibold mb-2">Availability</h2>
                <p className="text-gray-700">
                  {item.stock > 0 ? (
                    <span className="text-green-600 font-semibold">
                      In Stock ({item.stock} available)
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">Out of Stock</span>
                  )}
                </p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Add to Cart
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-semibold">
                  Add to Wishlist
                </button>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <h2 className="text-xl font-semibold text-gray-600 mb-4">Product Details</h2>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Product ID:</strong> {item._id}</li>
                  <li><strong>Category:</strong> {item.category}</li>
                  <li><strong>Stock:</strong> {item.stock} units</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { getItems } from "@/services/itemes.itemes";
import { ShopCard } from "./_componet/ShopCard";

export default async function ItemsPage({ searchParams }) {
  const getParams = await searchParams;
  const items = await getItems({ ...getParams });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Discover amazing products at great prices</p>
        </div>
      </section>

      
      <section className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">{items.length}+</h3>
              <p className="text-gray-600 mt-2">Products Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-600 mt-2">Quality Guaranteed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600 mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-600">
              No products available. Visit /api/seed to add sample products!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
             <ShopCard key={item._id} item={item}/>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

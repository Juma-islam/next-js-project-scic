// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function AddItemPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [checking, setChecking] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//     category: "Electronics",
//     stock: ""
//   });

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = async () => {
//     try {
//       const token = document.cookie.split('; ').find(row => row.startsWith('auth-token='));
//       if (!token) {
//         router.push("/login");
//       } else {
//         setChecking(false);
//       }
//     } catch (error) {
//       router.push("/login");
//     }
//   };

//   if (checking) {
//     return (
//       <div className="container mx-auto px-4 py-12 text-center">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("/api/items", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           ...formData,
//           price: parseFloat(formData.price),
//           stock: parseInt(formData.stock)
//         })
//       });

//       if (response.ok) {
//         toast.success("Product added successfully!");
//         setFormData({
//           name: "",
//           description: "",
//           price: "",
//           image: "",
//           category: "Electronics",
//           stock: ""
//         });
//         setTimeout(() => router.push("/items"), 1500);
//       } else {
//         toast.error("Failed to add product");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className=" px-4 bg-white py-12">
//       <div className="max-w-2xl mx-auto rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl text-gray-600 mb-8">Add New Product</h1>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Product Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={4}
//               className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Price ($)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 step="0.01"
//                 min="0"
//                 className="w-full px-4 py-2  text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Stock
//               </label>
//               <input
//                 type="number"
//                 name="stock"
//                 value={formData.stock}
//                 onChange={handleChange}
//                 min="0"
//                 className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Category
//             </label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             >
//               <option value="Electronics">Electronics</option>
//               <option value="Accessories">Accessories</option>
//               <option value="Fashion">Fashion</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Image URL
//             </label>
//             <input
//               type="url"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="https://example.com/image.jpg"
//               className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-semibold"
//           >
//             {loading ? "Adding Product..." : "Add Product"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "Electronics",
    stock: "",
  });

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find(row => row.startsWith("auth="));

    if (!token) {
      router.push("/login");
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) {
    return <p className="text-center py-10">Checking auth...</p>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          stock: Number(formData.stock),
        }),
      });

      if (res.ok) {
        toast.success("Item added successfully");
        router.push("/items");
      } else {
        toast.error("Failed to add item");
      }
    } catch {
      toast.error("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Add Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2" required />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border p-2" required />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="w-full border p-2" required />
        <input name="stock" type="number" placeholder="Stock" onChange={handleChange} className="w-full border p-2" required />
        <input name="image" placeholder="Image URL" onChange={handleChange} className="w-full border p-2" required />

        <button disabled={loading} className="bg-blue-600 text-white w-full py-2">
          {loading ? "Saving..." : "Add Item"}
        </button>
      </form>
    </div>
  );
}

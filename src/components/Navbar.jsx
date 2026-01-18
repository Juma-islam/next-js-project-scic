"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { 
  Home, 
  Package, 
  Grid3X3, 
  ShoppingBag, 
  Plus, 
  LogOut, 
  LogIn, 
  Menu, 
  X,
  ShoppingCart,
  User
} from "lucide-react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const hasAuthCookie = document.cookie
      .split("; ")
      .some((row) => row.startsWith("auth="));

    setIsAuthenticated(hasAuthCookie);
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    toast.success("Logged out successfully!");
    router.push("/");
    router.refresh();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/categories", label: "Categories", icon: Grid3X3 },
    { href: "/shop", label: "Shop", icon: ShoppingBag },
    { href: "/items", label: "Products", icon: Package },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span>ShopBD</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActiveLink(link.href)
                        ? "bg-blue-100 text-blue-700 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent size={18} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Cart Icon */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>

              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <Link
                    href="/add-item"
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    <Plus size={18} />
                    <span>Add Item</span>
                  </Link>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User size={16} className="text-gray-600" />
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActiveLink(link.href)
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <IconComponent size={20} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}

                <div className="border-t border-gray-200 pt-4 mt-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <Link
                        href="/add-item"
                        onClick={closeMobileMenu}
                        className="flex items-center space-x-3 px-4 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        <Plus size={20} />
                        <span>Add Item</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg font-medium transition-colors w-full text-left"
                      >
                        <LogOut size={20} />
                        <span>Logout</span>
                      </button>
                    </div>
                  ) : (
                    <Link
                      href="/login"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <LogIn size={20} />
                      <span>Login</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

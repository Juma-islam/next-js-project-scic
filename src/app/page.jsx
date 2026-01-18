import Categories from "@/components/Categories";
import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
     <Features/>

      {/* Categories Section */}
     <Categories/>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* Stats Section */}
      <Stats/>

      {/* Newsletter Section */}
    <Newsletter/>

      {/* CTA Section */}
    <Cta/>
    </div>
  );
}

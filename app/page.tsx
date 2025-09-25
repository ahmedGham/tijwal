"use client";

import { useState, useEffect } from "react";
import WhyUsSection from "@/sections/WhyUsSection";
import Services from "@/sections/Services";
import AboutUs from "@/sections/AboutUs";
import ContactUs from "@/sections/ContactUs";
import Reviews from "@/sections/Reviews";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = ()=> setIsMenuOpen((prev)=>!prev)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} scrollY={scrollY}/>

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection}/>
      

      {/* Services Section */}
      <Services />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Reviews Section */}
      <Reviews/>

      {/* About Us Section */}
      <AboutUs/>
      {/* Contact Section */}
      
      <ContactUs/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

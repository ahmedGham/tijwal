import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = ({ scrollToSection ,isMenuOpen,toggleMenu,scrollY}: { scrollToSection: Function ,isMenuOpen:boolean,toggleMenu:Function,scrollY:number}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Image
              src="/image.png"
              alt="تجوال"
              width={100}
              height={100}
              className="rounded-lg"
            />
            {/* <span className="text-2xl font-bold" style={{color: '#24335a'}}>تجوال</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 transition-colors"
              style={{ "--hover-color": "#24335a" }}
              onMouseEnter={(e) => (e.target.style.color = "#24335a")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 transition-colors"
              style={{ "--hover-color": "#24335a" }}
              onMouseEnter={(e) => (e.target.style.color = "#24335a")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              خدماتنا
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-gray-700 transition-colors"
              style={{ "--hover-color": "#24335a" }}
              onMouseEnter={(e) => (e.target.style.color = "#24335a")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              لماذا نحن
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 transition-colors"
              style={{ "--hover-color": "#24335a" }}
              onMouseEnter={(e) => (e.target.style.color = "#24335a")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              آراء العملاء
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 transition-colors"
              style={{ "--hover-color": "#24335a" }}
              onMouseEnter={(e) => (e.target.style.color = "#24335a")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 transition-colors"
              style={{ "--hover-color": "#24335a" }}
              onMouseEnter={(e) => (e.target.style.color = "#24335a")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              تواصل معنا
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => toggleMenu()}
            className="md:hidden p-2 rounded-md text-gray-700"
            style={{ "--hover-color": "#24335a" }}
            onMouseEnter={(e) => (e.target.style.color = "#24335a")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 w-full text-right transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-gray-700 w-full text-right transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="block px-3 py-2 text-gray-700 w-full text-right transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                لماذا نحن
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block px-3 py-2 text-gray-700 w-full text-right transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                آراء العملاء
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 w-full text-right transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 w-full text-right transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                تواصل معنا
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

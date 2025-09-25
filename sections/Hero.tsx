import AnimationUp from "@/components/common/AnimationUp";
import React from "react";

const Hero = ({ scrollToSection }: { scrollToSection: Function }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <AnimationUp>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              اكتشف العالم مع <span style={{ color: "#24335a" }}>تجوال</span>
            </h1>
          </AnimationUp>
          <AnimationUp transition={{ delay: 0.2 }}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed ">
              رحلات استثنائية وتجارب لا تُنسى في أجمل وجهات العالم. نحن نجعل
              أحلام السفر حقيقة
            </p>
          </AnimationUp>
          <AnimationUp transition={{ delay: 0.3 }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: "#24335a" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#1e2a47")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#24335a")
                }
              >
                استكشف خدماتنا
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 px-8 py-4 rounded-full text-lg font-semibold hover:text-white transform hover:scale-105 transition-all duration-300"
                style={{ borderColor: "#24335a", color: "#24335a" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#24335a";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#24335a";
                }}
              >
                تواصل معنا
              </button>
            </div>
          </AnimationUp>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-60 animate-bounce delay-1000"
        style={{ backgroundColor: "#24335a40" }}
      ></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-bounce delay-2000"></div>
      <div
        className="absolute top-1/2 left-20 w-12 h-12 rounded-full opacity-60 animate-bounce delay-3000"
        style={{ backgroundColor: "#24335a30" }}
      ></div>
    </section>
  );
};

export default Hero;

import AnimationUp from "@/components/common/AnimationUp";
import { MapPin } from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimationUp>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                من نحن
              </h2>
            </AnimationUp>
            <AnimationUp>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                تجوال هي شركة رائدة في مجال السياحة والسفر، تأسست عام 2008 بهدف
                تقديم تجارب سفر استثنائية لعملائنا في جميع أنحاء العالم.
              </p>
            </AnimationUp>
            <AnimationUp>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نحن نؤمن بأن السفر ليس مجرد انتقال من مكان لآخر، بل هو رحلة
                لاكتشاف الذات والثقافات الجديدة. لذلك نحرص على تقديم برامج
                سياحية متنوعة تناسب جميع الأذواق والميزانيات.
              </p>
            </AnimationUp>
            <AnimationUp>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#24335a" }}
                  >
                    15+
                  </div>
                  <div className="text-gray-600">سنة خبرة</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "#24335a" }}
                  >
                    10K+
                  </div>
                  <div className="text-gray-600">عميل سعيد</div>
                </div>
              </div>
            </AnimationUp>

            <div className="flex flex-wrap gap-4">
              <AnimationUp>
                <span
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ backgroundColor: "#24335a20", color: "#24335a" }}
                >
                  حجز تذاكر طيران
                </span>
              </AnimationUp>
              <AnimationUp transition={{ delay: 0.1 }}>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  تأشيرات سياحية
                </span>
              </AnimationUp>
              <AnimationUp transition={{ delay: 0.2 }}>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  حجوزات فندقية
                </span>
              </AnimationUp>
              <AnimationUp transition={{ delay: 0.3 }}>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                  باكيجات سياحية
                </span>
              </AnimationUp>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #24335a, #1e2a47)",
                  }}
                >
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  رؤيتنا
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الخيار الأول للمسافرين العرب في تحقيق أحلام السفر
                  والاستكشاف، من خلال تقديم خدمات متميزة وتجارب لا تُنسى.
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 animate-pulse"
              style={{ backgroundColor: "#24335a40" }}
            ></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import AnimationUp from "@/components/common/AnimationUp";
import Counter from "@/components/common/Counter";
import PopupInView from "@/components/common/Popup";
import SectionTitle from "@/components/common/SectionTitle";
import { useInView } from "motion/react";
import React, { useRef } from "react";

const WhyUsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationUp>
          <SectionTitle
            title="لماذا تختار تجوال؟"
            description="نحن نتميز بالخبرة والاحترافية في تقديم أفضل الخدمات السياحية"
          />
        </AnimationUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                title: "خبرة أكثر من 15 عاماً",
                description: "فريق محترف مع خبرة واسعة في مجال السياحة والسفر",
                icon: "🏆",
              },
              {
                title: "أسعار تنافسية",
                description:
                  "نقدم أفضل الأسعار مع الحفاظ على جودة الخدمة العالية",
                icon: "💰",
              },
              {
                title: "دعم على مدار الساعة",
                description: "فريق خدمة العملاء متاح 24/7 لمساعدتك في أي وقت",
                icon: "🕐",
              },
              {
                title: "ضمان الجودة",
                description: "نضمن لك تجربة سفر استثنائية أو نعيد لك أموالك",
                icon: "✅",
              },
            ].map((feature, index) => (
              <AnimationUp key={index}>
                <div
                  key={index}
                  className="flex items-start space-x-4 space-x-reverse group"
                >
                  <PopupInView style="">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                  </PopupInView>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors group-hover:text-[#24335a]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimationUp>
            ))}
          </div>

          <div className="relative">
            <AnimationUp className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div
                  ref={ref}
                  className="rounded-xl p-6 text-white text-center"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #24335a, #1e2a47)",
                  }}
                >
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold mb-4">
                    أكثر من{" "}
                    <Counter target={10000} duration={2} inView={inView} /> عميل
                    سعيد
                  </h3>
                  <p className="text-blue-100">
                    نفخر بثقة عملائنا وتقييماتهم الإيجابية
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#24335a" }}
                    >
                      <Counter target={500} duration={2} inView={inView} />+
                    </div>
                    <div className="text-sm text-gray-600">رحلة منظمة</div>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#24335a" }}
                    >
                      <Counter target={50} duration={2} inView={inView} />+
                    </div>
                    <div className="text-sm text-gray-600">وجهة سياحية</div>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#24335a" }}
                    >
                      <Counter target={98} duration={2} inView={inView} />%
                    </div>
                    <div className="text-sm text-gray-600">رضا العملاء</div>
                  </div>
                </div>
              </div>
            </AnimationUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

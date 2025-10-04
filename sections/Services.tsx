import AnimationUp from "@/components/common/AnimationUp";
import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

const servicesList = [
  {
    title: "حجز تذاكر طيران حول العالم",
    description: "حجز تذاكر الطيران لجميع الوجهات العالمية بأفضل الأسعار",
    icon: "✈️",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "موافقة أمنية",
    description: "استخراج الموافقات الأمنية اللازمة للسفر والعمل",
    icon: "🛡️",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "تأشيرات سياحية",
    description: "استخراج التأشيرات السياحية لجميع الدول بسهولة ويسر",
    icon: "📋",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "حجوزات فندقية",
    description: "حجز أفضل الفنادق والمنتجعات في جميع أنحاء العالم",
    icon: "🏨",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "رخص قيادة دولية",
    description: "استخراج رخص القيادة الدولية للسفر والعمل في الخارج",
    icon: "🚗",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "خدمات عقارية",
    description: "استشارات وخدمات عقارية للاستثمار والإقامة في الخارج",
    icon: "🏢",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "خدمات استقبال وتوديع",
    description: "خدمات VIP للاستقبال والتوديع في المطارات",
    icon: "🤝",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "تأشيرة عمرة",
    description: "تسهيل إجراءات الحصول على تأشيرة العمرة والحج",
    icon: "🕌",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "باكيجات سياحية",
    description: "برامج سياحية متكاملة لأجمل الوجهات حول العالم",
    icon: "🎒",
    color: "from-rose-500 to-pink-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationUp>
          <SectionTitle
            title="خدماتنا المميزة"
            description="نقدم مجموعة شاملة من الخدمات السياحية لضمان رحلة مثالية"
          />
        </AnimationUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const delay = 1 / ((index + 1));

            return (
              <AnimationUp key={index} >
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div
                    className={`h-2 bg-gradient-to-r ${service.color}`}
                  ></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-[#24335a]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimationUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

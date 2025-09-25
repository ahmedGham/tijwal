import AnimationUp from "@/components/common/AnimationUp";
import { Star } from "lucide-react";
import React from "react";

const revs = [
  {
    name: "أحمد محمد",
    location: "الرياض",
    rating: 5,
    review:
      "تجربة رائعة مع تجوال! الخدمة كانت ممتازة والتنظيم مثالي. أنصح الجميع بالتعامل معهم.",
    trip: "رحلة إلى تركيا",
  },
  {
    name: "فاطمة العلي",
    location: "جدة",
    rating: 5,
    review:
      "فريق محترف جداً وأسعار معقولة. استمتعت برحلتي كثيراً وسأكرر التجربة قريباً.",
    trip: "رحلة إلى ماليزيا",
  },
  {
    name: "خالد السعد",
    location: "الدمام",
    rating: 5,
    review:
      "خدمة عملاء ممتازة ومتابعة مستمرة. شكراً لفريق تجوال على الرحلة الرائعة.",
    trip: "رحلة إلى إندونيسيا",
  },
  {
    name: "نورا أحمد",
    location: "الكويت",
    rating: 5,
    review:
      "أفضل شركة سياحة تعاملت معها. التنظيم والاهتمام بالتفاصيل كان مذهلاً.",
    trip: "رحلة إلى اليونان",
  },
  {
    name: "محمد الشمري",
    location: "الدوحة",
    rating: 5,
    review: "رحلة العمر! كل شيء كان مثالياً من البداية للنهاية. شكراً تجوال.",
    trip: "رحلة إلى إيطاليا",
  },
  {
    name: "سارة الزهراني",
    location: "أبها",
    rating: 5,
    review: "خدمة راقية وأسعار تنافسية. أنصح بشدة للباحثين عن رحلات مميزة.",
    trip: "رحلة إلى سويسرا",
  },
];
const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimationUp>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              آراء عملائنا
            </h2>
          </AnimationUp>
          <AnimationUp>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اقرأ تجارب عملائنا الحقيقية معنا
            </p>
          </AnimationUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {revs.map((review, index) => (
            <AnimationUp key={index}>
              <div
                
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 p-6 group"
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #24335a, #1e2a47)",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div className="mr-4">
                    <h4 className="font-bold text-gray-900 transition-colors group-hover:text-[#24335a]">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{review.review}"
                </p>

                <div
                  className="text-sm font-semibold"
                  style={{ color: "#24335a" }}
                >
                  {review.trip}
                </div>
              </div>
            </AnimationUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

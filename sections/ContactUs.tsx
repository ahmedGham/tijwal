import AnimationUp from "@/components/common/AnimationUp";
import PopupInView from "@/components/common/Popup";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,

} from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimationUp>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              تواصل معنا
            </h2>
          </AnimationUp>
          <AnimationUp>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تخطيط رحلتك القادمة
            </p>
          </AnimationUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 space-x-reverse group">
              <PopupInView>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#24335a20" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#24335a30")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#24335a20")
                  }
                >
                  <Phone className="w-8 h-8" style={{ color: "#24335a" }} />
                </div>
              </PopupInView>
              <AnimationUp>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    اتصل بنا
                  </h3>
                  <p className="text-gray-600">01-114-452-190</p>
                  <p className="text-gray-600">01-114-452-133</p>
                </div>
              </AnimationUp>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse group">
              <PopupInView>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
              </PopupInView>
              <AnimationUp>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    راسلنا
                  </h3>
                  <p className="text-gray-600">info@tajwal.com</p>
                  <p className="text-gray-600">booking@tajwal.com</p>
                </div>
              </AnimationUp>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse group">
              <PopupInView>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
              </PopupInView>
              <AnimationUp>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    زورنا
                  </h3>
                  <p className="text-gray-600">
                  شارع التحرير/الدقي/الجيزة/دور 11/مكتب 5
                  </p>
                  {/* <p className="text-gray-600">شارع الملك فهد، حي العليا</p> */}
                </div>
              </AnimationUp>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                تابعنا على
              </h3>
              <div className="flex space-x-4 space-x-reverse">
                <PopupInView>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </PopupInView>
                <PopupInView>
                  <a
                    href="#"
                    className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transform hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </PopupInView>
                <PopupInView>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transform hover:scale-110 transition-all duration-300"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </PopupInView>
                
              </div>
            </div>
          </div>
          <AnimationUp>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                احجز استشارة مجانية
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-colors"
                    style={{
                      "--focus-ring-color": "#24335a",
                      "--focus-border-color": "#24335a",
                    }}
                    onFocus={(e) => {
                      e.target.style.ringColor = "#24335a";
                      e.target.style.borderColor = "#24335a";
                    }}
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-colors"
                    onFocus={(e) => {
                      e.target.style.ringColor = "#24335a";
                      e.target.style.borderColor = "#24335a";
                    }}
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-colors"
                    onFocus={(e) => {
                      e.target.style.ringColor = "#24335a";
                      e.target.style.borderColor = "#24335a";
                    }}
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الوجهة المفضلة
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-colors"
                    onFocus={(e) => {
                      e.target.style.ringColor = "#24335a";
                      e.target.style.borderColor = "#24335a";
                    }}
                  >
                    <option>اختر الوجهة</option>
                    <option>تركيا</option>
                    <option>ماليزيا</option>
                    <option>إندونيسيا</option>
                    <option>اليونان</option>
                    <option>إيطاليا</option>
                    <option>سويسرا</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رسالتك
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 transition-colors"
                    onFocus={(e) => {
                      e.target.style.ringColor = "#24335a";
                      e.target.style.borderColor = "#24335a";
                    }}
                    placeholder="أخبرنا عن متطلباتك..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#24335a" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#1e2a47")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#24335a")
                  }
                >
                  إرسال الطلب
                </button>
              </form>
            </div>
          </AnimationUp>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

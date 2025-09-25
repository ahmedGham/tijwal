import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <Image
                  src="/image.png"
                  alt="تجوال"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                شريكك المثالي في رحلات السفر والاستكشاف. نحن نجعل أحلام السفر
                حقيقة.
              </p>
            </div>

            {/* <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: "#24335a" }}
              >
                خدماتنا
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    حجز تذاكر طيران
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    تأشيرات سياحية
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    حجوزات فندقية
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    باكيجات سياحية
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: "#24335a" }}
              >
                روابط مهمة
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    من نحن
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    شروط الخدمة
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    onMouseEnter={(e) => (e.target.style.color = "#24335a")}
                    onMouseLeave={(e) => (e.target.style.color = "")}
                  >
                    الأسئلة الشائعة
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: "#24335a" }}
              >
                تواصل معنا
              </h4>
              <div className="space-y-2 text-gray-300" >
                <p>📞 01-114-452-190
                    <br/>
                    01-114-452-133</p>
                <p>✉️ info@tajwal.com</p>
                <p>📍 شارع التحرير/الدقي/الجيزة/دور 11/مكتب 5</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} تجوال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer

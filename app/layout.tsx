import "./globals.css";
import type { Metadata } from "next";
import { Inter, Readex_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const readex_pro = Readex_Pro({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "تجوال - شركة السياحة والسفر",
  description:
    "اكتشف العالم مع تجوال - رحلات استثنائية وتجارب لا تُنسى في أجمل وجهات العالم",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={readex_pro.className}>
      <Link 
          href={"https://wa.me/+79177419629"}
          target="_blank"
          className="fixed right-4 bottom-4 z-40 flex flex-col shadow-xl rounded-xl"
        >
          <Image src="/whatsup.png" alt="واتساب" width={60} height={60} />
        </Link>
        {children}
        </body>
    </html>
  );
}

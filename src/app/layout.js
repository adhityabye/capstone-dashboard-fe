import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata = {
  title: "Capstone",
  description:
    "Capstone is a dashboard template for your next project. It is a modern, responsive, and customizable template.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.variable} ${josefin.variable}`}>
        {children}
      </body>
    </html>
  );
}

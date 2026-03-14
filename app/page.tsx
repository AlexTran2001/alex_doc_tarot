import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Alex Đọc Tarot — Giải mã hành trình của bạn",
  description:
    "Tarot reading chuyên nghiệp với Alex. Đặt lịch qua Instagram để trải nghiệm buổi đọc bài ý nghĩa và sâu sắc.",
  openGraph: {
    title: "Alex Đọc Tarot",
    description: "Giải mã hành trình của bạn cùng Alex",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="page">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

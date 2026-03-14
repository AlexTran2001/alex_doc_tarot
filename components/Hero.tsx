"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import { INSTAGRAM_URL } from "@/lib/constants";
import TarotCard from "./TarotCard";

const cards = [
  {
    symbol: "☽",
    label: "The Moon",
    imageSrc: "/images/the_moon.jpg",
    imageAlt: "The Moon tarot card",
  },
  {
    symbol: "☀",
    label: "The Sun",
    imageSrc: "/images/the_sun.jpg",
    imageAlt: "The Sun tarot card",
  },
  {
    symbol: "★",
    label: "The Star",
    imageSrc: "/images/the_star.jpg",
    imageAlt: "The Star tarot card",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <p className="eyebrow">Tarot · Tâm linh · Kết nối</p>
        <h1>
          Giải mã <em>hành trình</em> của bạn
        </h1>
        <p className={styles.heroDesc}>
          Mỗi lá bài là một câu chuyện. Cùng Alex lắng nghe điều vũ trụ đang
          nhắn gửi — nhẹ nhàng, rõ ràng, và thực sự có ý nghĩa.
        </p>
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          Đặt lịch ngay →
        </Link>
      </div>
      <div className={styles.cardVisual}>
        {cards.map((card, i) => {
          const position = (i - activeIndex + cards.length) % cards.length;
          return (
            <TarotCard
              key={card.label}
              symbol={card.symbol}
              label={card.label}
              index={position}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          );
        })}
      </div>
    </section>
  );
}

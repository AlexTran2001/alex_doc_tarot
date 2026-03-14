import Link from "next/link";
import styles from "./CTA.module.css";
import { INSTAGRAM_URL, THREADS_URL, FACEBOOK_URL } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";
import ThreadsIcon from "@/components/icons/ThreadsIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

export default function CTA() {
  return (
    <section id="cta" className={styles.ctaSection}>
      <p className={styles.eyebrow}>Sẵn sàng chưa?</p>
      <h2>Bắt đầu hành trình của bạn</h2>
      <p>Nhắn tin cho Alex qua Instagram — đặt lịch nhanh, phản hồi trong 24h.</p>

      <Link
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaIgBtn}
      >
        <InstagramIcon />
        Nhắn tin Instagram →
      </Link>

      <div className={styles.socialBar}>
        <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.socialBarLink}>
          <InstagramIcon />
          @alexdoctarot
        </Link>
        <span className={styles.dot}>·</span>
        <Link href={THREADS_URL} target="_blank" rel="noopener noreferrer" className={styles.socialBarLink}>
          <ThreadsIcon />
          @alexdoctarot
        </Link>
        <span className={styles.dot}>·</span>
        <Link href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={styles.socialBarLink}>
          <FacebookIcon />
          Alex Đọc Tarot
        </Link>
      </div>
    </section>
  );
}

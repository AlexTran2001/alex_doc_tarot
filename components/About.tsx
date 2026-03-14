import styles from "./About.module.css";
import Image from "next/image";

const stats = [
  { num: "500+", desc: "Buổi đọc bài" },
  { num: "3+", desc: "Năm kinh nghiệm" },
  { num: "98%", desc: "Khách hàng hài lòng" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutAside}>
        <div className={styles.aboutLabel}>Về tôi</div>
        <div className={styles.aboutCardFrame}>
          <Image
            src="/images/king_of_cups.jpg"
            alt="King of Cups"
            fill
            className={styles.aboutCardImage}
            sizes="(max-width: 580px) 260px, 220px"
            priority={false}
          />
        </div>
      </div>
      <div>
        <h2>Người kể chuyện bằng những lá bài</h2>
        <p>
          Tôi là Alex — tarot reader với niềm tin rằng mỗi buổi đọc bài không
          phải là &ldquo;bói toán&rdquo;, mà là một cuộc trò chuyện an toàn để bạn
          chậm lại và lắng nghe chính mình. Khi bạn đang rối, đang mệt, hay chỉ
          đơn giản là đứng trước một ngã rẽ, những lá bài giúp mình soi sáng
          cảm xúc, gọi tên điều bạn đang né tránh, và mở ra các lựa chọn rõ ràng
          hơn.
          <br />
          <br />
          Mình kết hợp trực giác, tâm lý học, và sự đồng cảm để bạn không chỉ
          &ldquo;biết kết quả&rdquo; — mà hiểu vì sao mình đang ở đây, mình cần điều gì,
          và bước tiếp theo có thể nhẹ nhàng hơn ra sao. Bạn không cần phải
          hoàn hảo mới được chữa lành; bạn chỉ cần thật lòng với câu chuyện của
          mình.
        </p>
        <div className={styles.aboutStats}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

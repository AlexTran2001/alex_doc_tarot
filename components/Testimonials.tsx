import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Buổi đọc bài thực sự giúp tôi nhìn rõ hơn quyết định đang phân vân. Không phán xét, không áp đặt — chỉ là những góc nhìn rất thật.",
    author: "Minh Anh, Hà Nội",
  },
  {
    text: "Tôi vốn hoài nghi về tarot, nhưng sau buổi đầu tiên tôi đã hiểu tại sao nhiều người yêu thích. Rất chuyên nghiệp và ấm áp.",
    author: "Thanh Hà, TP.HCM",
  },
  {
    text: "Celtic Cross giúp tôi thấy bức tranh tổng thể về tình huống đang gặp. Rất chi tiết và có chiều sâu.",
    author: "Phương Linh, Đà Nẵng",
  },
  {
    text: "Đặt lịch đơn giản, phản hồi nhanh. Tôi đã đặt lịch 3 lần rồi và lần nào cũng cảm thấy được lắng nghe thực sự.",
    author: "Gia Bảo, Hà Nội",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="section-header">
        <p className="eyebrow">Cảm nhận</p>
        <h2>Khách hàng nói gì</h2>
      </div>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.testimonial}>
            <div className={styles.quoteMark}>&ldquo;</div>
            <div className={styles.stars}>★ ★ ★ ★ ★</div>
            <p className={styles.quoteText}>{t.text}</p>
            <div className={styles.quoteAuthor}>— {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

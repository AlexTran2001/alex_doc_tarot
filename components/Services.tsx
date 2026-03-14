import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    name: "Trải bài 3 lá",
    desc: "Quá khứ · Hiện tại · Tương lai. Phù hợp cho câu hỏi cụ thể, nhanh và rõ ràng.",
    price: "150.000đ",
    unit: "/ buổi",
    popular: false,
  },
  {
    num: "02",
    name: "Trải bài Chuyên sâu",
    desc: "Trải bài không giới hạn chủ đề, giúp tìm hiểu sâu hơn về bản thân và tình huống hiện tại.",
    price: "250.000đ",
    unit: "/ 30 phút",
    popular: true,
  },
  {
    num: "03",
    name: "Đọc bài tháng",
    desc: "Năng lượng & chủ đề chính của cả tháng. Nhận insight mỗi đầu tháng.",
    price: "500.000đ",
    unit: "/3 tháng",
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-header">
        <p className="eyebrow">Dịch vụ</p>
        <h2>Chọn hành trình của bạn</h2>
      </div>
      <div className={styles.services}>
        {services.map((s, i) => (
          <div key={i} className={styles.serviceCard}>
            {s.popular && <div className={styles.tag}>Phổ biến</div>}
            <div className={styles.serviceNum}>{s.num}</div>
            <div className={styles.serviceName}>{s.name}</div>
            <p className={styles.serviceDesc}>{s.desc}</p>
            <div className={styles.servicePrice}>
              {s.price} <span>{s.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

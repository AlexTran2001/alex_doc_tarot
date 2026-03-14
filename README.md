# ✦ Alex Đọc Tarot — Landing Page

Landing page tarot cá nhân được xây dựng bằng **Next.js 15** + **TypeScript** + **CSS Modules**.

---

## 🚀 Cài đặt & chạy

```bash
# 1. Cài dependencies
npm install

# 2. Chạy môi trường dev
npm run dev

# 3. Mở trình duyệt tại
http://localhost:3000
```

---

## ✏️ Tuỳ chỉnh nội dung

### Đổi link mạng xã hội
Mở file `lib/constants.ts` và thay username của bạn:

```ts
export const INSTAGRAM_HANDLE = "ten_instagram_cua_ban";
export const THREADS_HANDLE   = "ten_threads_cua_ban";
export const FACEBOOK_HANDLE  = "ten_facebook_cua_ban";
```

### Đổi nội dung dịch vụ & giá
Mở `components/Services.tsx` — chỉnh mảng `services[]`.

### Đổi testimonials
Mở `components/Testimonials.tsx` — chỉnh mảng `testimonials[]`.

### Đổi thống kê về tôi
Mở `components/About.tsx` — chỉnh mảng `stats[]` và đoạn văn giới thiệu.

---

## 📦 Deploy lên Vercel (miễn phí)

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Hoặc kết nối repo GitHub với [vercel.com](https://vercel.com) để tự động deploy.

---

## 🗂 Cấu trúc thư mục

```
alex-tarot/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Trang chính
│   └── globals.css       # CSS toàn cục & biến màu
├── components/
│   ├── Nav.tsx           # Thanh điều hướng + social icons
│   ├── Hero.tsx          # Banner đầu trang
│   ├── TarotCard.tsx     # Lá bài tarot animation
│   ├── About.tsx         # Giới thiệu bản thân
│   ├── Services.tsx      # Bảng giá dịch vụ
│   ├── Testimonials.tsx  # Đánh giá khách hàng
│   ├── CTA.tsx           # Call-to-action + link Instagram
│   ├── Footer.tsx        # Chân trang
│   ├── Divider.tsx       # Đường kẻ trang trí
│   └── icons/            # SVG icons (Instagram, TikTok, Facebook)
└── lib/
    └── constants.ts      # Link mạng xã hội — chỉnh ở đây!
```

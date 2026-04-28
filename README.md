# Portfolio - Nhập môn Công nghệ số và Trí tuệ nhân tạo

![Portfolio Preview](/public/screenshot.png) 

Đây là một trang web portfolio cá nhân được xây dựng để lưu trữ và chia sẻ quá trình học tập, các dự án và bài tập trong học phần **Nhập môn công nghệ số và trí tuệ nhân tạo**.

## Thông tin sinh viên
- **Họ và tên:** Tạ Hữu Cường
- **Mã sinh viên (MSV):** 25020053
- **Chuyên ngành:** Công nghệ thông tin (CNTT)
- **Trường:** Đại học Công Nghệ - Đại học Quốc gia Hà Nội (UET - VNU)

## Mục tiêu dự án
- Thể hiện kỹ năng số đã học và tổng hợp kiến thức một cách hệ thống.
- Tạo ra một hồ sơ năng lực (portfolio) trực tuyến để lưu trữ, giới thiệu bản thân và chia sẻ hành trình phát triển cá nhân.
- Xây dựng trải nghiệm người dùng hiện đại, tối ưu cho cả giao diện máy tính và thiết bị di động.

## Công nghệ sử dụng
Dự án được xây dựng dựa trên các công nghệ web hiện đại:
- **[React 19](https://react.dev/)**: Thư viện JavaScript để xây dựng giao diện người dùng.
- **[Vite](https://vitejs.dev/)**: Công cụ build siêu tốc độ dành cho web hiện đại.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utility-first giúp style giao diện nhanh chóng và dễ dàng.
- **[Framer Motion](https://motion.dev/)**: Thư viện animation mạnh mẽ giúp tạo ra các hiệu ứng chuyển động mượt mà.
- **[React Router v7](https://reactrouter.com/)**: Quản lý điều hướng (routing) trong ứng dụng Single Page Application (SPA).
- **[Lucide React](https://lucide.dev/)**: Thư viện cung cấp các icon SVG đẹp và nhẹ.

## Hướng dẫn cài đặt và chạy cục bộ (Run Locally)

**Yêu cầu hệ thống:** Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 18+ được khuyến nghị).

1. **Clone repository về máy (nếu có):**
   ```bash
   git clone <url-repository-cua-ban>
   cd cns-ai.itcuong-dev.io.vn
   ```

2. **Cài đặt các dependencies:**
   ```bash
   npm install
   ```

3. **Chạy server phát triển (Development server):**
   ```bash
   npm run dev
   ```
   Ứng dụng sẽ chạy tại địa chỉ `http://localhost:3000` (hoặc cổng khác được hiển thị trên terminal).

4. **Build dự án để deploy:**
   ```bash
   npm run build
   ```
   Thư mục `dist/` sẽ được tạo ra, chứa các file tĩnh đã được tối ưu hóa sẵn sàng để deploy lên Vercel, Netlify, GitHub Pages, v.v.

## Cấu trúc thư mục chính
- `/src/components`: Chứa các component có thể tái sử dụng (như Layout, Navigation, ParticleBackground, v.v.).
- `/src/pages`: Chứa các trang chính của ứng dụng (như trang Home, chi tiết Project).
- `/src/data`: Chứa dữ liệu tĩnh mô phỏng cho các dự án/bài tập (`projects.ts`).
- `/src/lib`: Chứa các hàm tiện ích hỗ trợ.

## Giấy phép (License)
Dự án này phục vụ mục đích học tập. Mọi cá nhân đều có thể tham khảo.

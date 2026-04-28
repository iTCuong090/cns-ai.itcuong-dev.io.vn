import { Link, Outlet } from "react-router-dom";
import { User } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-200">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight text-blue-700 flex items-center gap-2">
            <User className="h-6 w-6" />
            <span>Cường Tạ.</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="/#gioi-thieu" className="hover:text-blue-700 transition-colors">Giới thiệu</a>
            <a href="/#du-an" className="hover:text-blue-700 transition-colors">Dự án</a>
            <a href="/#tong-ket" className="hover:text-blue-700 transition-colors">Tổng kết</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="w-full bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
          <p className="font-medium text-slate-300 text-base">Portfolio - Tạ Hữu Cường</p>
          <p>Mã sinh viên: 25020053 | Ngành: Công nghệ thông tin</p>
          <p>Trường Đại học Công Nghệ, ĐHQGHN</p>
          <p className="text-slate-500 mt-8">© {new Date().getFullYear()} Ta Huu Cuong. Thiết kế cho môn học Nhập môn công nghệ số và trí tuệ nhân tạo.</p>
        </div>
      </footer>
    </div>
  );
}

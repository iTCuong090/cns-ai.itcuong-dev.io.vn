import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-200">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-bold text-xl tracking-tight text-blue-700 group-hover:text-blue-800 transition-colors">Tạ Hữu Cường</span>
            <span className="hidden lg:inline-block text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
              Nhập môn công nghệ số và Trí tuệ nhân tạo
            </span>
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
          <p className="font-medium text-slate-300 text-base">Dự án portfolio cá nhân - Tạ Hữu Cường</p>
          <p>Mã sinh viên: 25020053 | Chuyên ngành: Công nghệ thông tin</p>
          <p>Trường Đại học Công Nghệ, ĐHQGHN</p>
          <p className="text-slate-500 mt-8">© {new Date().getFullYear()} Ta Huu Cuong. Nhập môn công nghệ số và trí tuệ nhân tạo - Học kì II năm học 2025-2026.</p>
        </div>
      </footer>
    </div>
  );
}

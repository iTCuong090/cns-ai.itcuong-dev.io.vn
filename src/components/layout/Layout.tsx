import { Link, Outlet, useLocation } from "react-router-dom";
import { ParticlesBackground } from "./ParticlesBackground";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/#gioi-thieu", label: "Giới thiệu" },
    { href: "/#du-an", label: "Dự án" },
    { href: "/#tong-ket", label: "Tổng kết" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-200 relative">
      <ParticlesBackground />
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-blue-700 group-hover:text-blue-800 transition-colors whitespace-nowrap">itcuong-dev.io.vn</span>
            <span className="hidden lg:inline-block text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors truncate">
              Portfolio cá nhân - Nhập môn Công nghệ số và Trí tuệ nhân tạo
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-blue-700 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 -mr-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 max-w-[80vw] bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col pt-20 px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-400 leading-relaxed">
              Portfolio cá nhân — Nhập môn công nghệ số và Trí tuệ nhân tạo
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      <footer className="w-full bg-slate-900 text-slate-400 py-8 sm:py-12 text-center text-sm border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-3 sm:space-y-4">
          <p className="font-medium text-slate-300 text-sm sm:text-base">Dự án portfolio cá nhân - Tạ Hữu Cường</p>
          <p className="text-xs sm:text-sm">Mã sinh viên: 25020053 | Chuyên ngành: Công nghệ thông tin</p>
          <p className="text-xs sm:text-sm">Trường Đại học Công Nghệ, ĐHQGHN</p>
          <p className="text-slate-500 mt-6 sm:mt-8 text-xs sm:text-sm">© {new Date().getFullYear()} Ta Huu Cuong. Nhập môn công nghệ số và trí tuệ nhân tạo - Học kì II năm học 2025-2026.</p>
        </div>
      </footer>
    </div>
  );
}

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowRight, BookOpen, Lightbulb, Target } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* 1. Phần Giới Thiệu */}
      <section id="gioi-thieu" className="scroll-mt-14 sm:scroll-mt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          {/* Avatar - shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 w-full max-w-[200px] sm:max-w-xs mx-auto ring-1 ring-slate-900/5">
              <img
                src="/avatar.jpg"
                alt="Tạ Hữu Cường"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 order-last lg:order-first"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
                Xin chào, mình là <span className="text-blue-700 whitespace-nowrap">Tạ Hữu Cường</span>.
              </h1>
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-light">
                Chào mừng bạn đến với không gian lưu trữ và chia sẻ quá trình học tập của mình trong học phần
                <span className="font-medium text-slate-800"> Nhập môn công nghệ số và trí tuệ nhân tạo</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg mb-2">Thông tin cá nhân</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm text-slate-600">
                  <li><strong>MSV:</strong> 25020053</li>
                  <li><strong>Chuyên ngành:</strong> CNTT</li>
                  <li><strong>Trường:</strong> Đại học Công Nghệ - ĐHQGHN</li>
                  <li><strong>Sở thích:</strong> Lập trình, thiết kế web.</li>
                </ul>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100">
                <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg mb-2">Mục tiêu Portfolio</h3>
                <p className="text-sm text-slate-600">
                  Thể hiện kỹ năng số đã học, tổng hợp kiến thức một cách hệ thống, và tạo ra một hồ sơ năng lực
                  để lưu trữ và chia sẻ hành trình phát triển cá nhân.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Phần Dự Án (Bento Grid) */}
      <section id="du-an" className="scroll-mt-14 sm:scroll-mt-16 w-full bg-slate-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-slate-900">Các Dự Án & Bài Tập</h2>
            <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
              Tổng hợp những bài tập trọng tâm trong học phần "Nhập môn công nghệ số và trí tuệ nhân tạo".
              Mỗi bài tập là một trải nghiệm rèn luyện kỹ năng sinh tồn trong kỷ nguyên số.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[260px] sm:auto-rows-[320px]">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white flex flex-col justify-end p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer ${project.colSpan === 2 ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
              >
                {project.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-[0.15] group-hover:opacity-25 transition-opacity duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="mb-3 sm:mb-4 bg-blue-50 text-blue-600 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 active:text-blue-800 transition-colors py-1 after:absolute after:inset-0 after:z-10"
                  >
                    Xem chi tiết <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Phần Tổng Kết */}
      <section id="tong-ket" className="scroll-mt-14 sm:scroll-mt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-slate-900/90 backdrop-blur-md text-white rounded-3xl p-8 sm:p-12 border border-slate-800/80 shadow-xl shadow-slate-950/40 relative overflow-hidden group">
          {/* Soft glowing ambient light blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-3 backdrop-blur-xs">
                  Tổng kết & Tự đánh giá
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Trải nghiệm & Sự trưởng thành của bản thân
                </h2>
              </div>
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
                Hành trình xây dựng portfolio này không chỉ là việc hoàn thành bài tập, mà còn là một cơ hội nhìn lại và đúc kết những giá trị thực sự mình đã nhận được từ môn học. Mình đã học được cách kiểm chứng thông tin, tận dụng sức mạnh của AI một cách thông thái và an toàn, đồng thời rèn luyện tư duy lập trình giao diện hiện đại.
              </p>
              
              <div className="flex flex-wrap gap-2.5 pt-2">
                {['Tự Đánh Giá Năng Lực', 'Nhật Ký Hành Trình', 'Liêm Chính Học Thuật & AI', 'Kế Hoạch Tương Lai'].map(item => (
                  <span key={item} className="bg-slate-800/50 text-slate-300 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium border border-slate-750/50 backdrop-blur-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/tong-ket"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all text-sm sm:text-base cursor-pointer shrink-0"
              >
                Xem đánh giá chi tiết <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

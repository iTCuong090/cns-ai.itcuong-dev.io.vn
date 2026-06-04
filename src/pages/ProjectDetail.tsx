import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  FileText, 
  ExternalLink, 
  Eye, 
  X, 
  Wrench, 
  Award, 
  ClipboardList, 
  Check, 
  BookOpen, 
  Info 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PDFViewerElement = "pdfjs-viewer-element" as any;

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  // Load pdfjs-viewer-element custom element script dynamically
  useEffect(() => {
    const scriptId = "pdfjs-viewer-element-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src = "https://cdn.jsdelivr.net/npm/pdfjs-viewer-element/dist/pdfjs-viewer-element.js";
      document.head.appendChild(script);
    }
  }, []);

  // Prevent body scroll when the full-screen viewer is open
  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isViewerOpen]);

  if (!project) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-20 sm:py-32 text-center animate-fade-in">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">Không tìm thấy dự án</h2>
        <p className="mb-8 text-slate-500">Dự án bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
          <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
        </Link>
      </div>
    );
  }

  // Calculate progress for step list (Bài 1)
  const totalSteps = project.steps?.length || 0;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercentage = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  const toggleStep = (idx: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16 sm:pb-24">
      {/* Hero Section with glassmorphism header & visual depth */}
      <div className="relative h-[35vh] sm:h-[45vh] min-h-[260px] sm:min-h-[340px] w-full rounded-b-[2rem] sm:rounded-b-[4rem] overflow-hidden border-b border-slate-200 bg-slate-900 shadow-lg">
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 filter blur-[1px] transition-transform duration-1000"
          />
        )}
        {/* Soft color overlays for premium design aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-indigo-900/40"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-16 max-w-7xl mx-auto z-10">
          <Link 
            to="/#du-an" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-4 transition-all duration-200 font-medium text-sm sm:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-2">
              Học phần: Nhập môn Công nghệ số & AI
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-5xl drop-shadow-md">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout - Two Columns on large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Detailed content of the exercise */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            
            {/* General Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-5 flex items-center gap-3">
                <Info className="w-5.5 h-5.5 text-blue-600" />
                Tổng quan bài tập
              </h2>
              <p className="text-slate-700 leading-relaxed font-light text-base sm:text-lg">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Objectives Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50/50 p-6 sm:p-8 rounded-3xl border border-blue-100/80 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5 border-b border-blue-100/50 pb-4">
                <Target className="w-5.5 h-5.5 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Mục tiêu đạt được</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base bg-white p-4 rounded-2xl border border-blue-100/30 shadow-2xs hover:shadow-xs transition-shadow">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="font-light">{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Detailed Requirements Card */}
            {project.requirements && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6 flex items-center gap-3">
                  <ClipboardList className="w-5.5 h-5.5 text-blue-600" />
                  Yêu cầu chi tiết
                </h2>

                {/* Specific Layout for Bài 1: Interactive Stepper */}
                {project.steps && project.steps.length > 0 ? (
                  <div className="space-y-6">
                    <p className="text-slate-600 text-sm italic mb-4">
                      Bạn có thể tích chọn từng bước dưới đây để theo dõi tiến trình thực hành trực tiếp:
                    </p>

                    {/* Progress tracking bar */}
                    <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 sm:p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-slate-700">Tiến trình hoàn thành thao tác</span>
                        <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                          {completedCount}/{totalSteps} bước ({progressPercentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-blue-600 h-full transition-all duration-500 ease-out" 
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Stepper Steps List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.steps.map((step, idx) => {
                        const isCompleted = !!completedSteps[idx];
                        return (
                          <div 
                            key={idx}
                            onClick={() => toggleStep(idx)}
                            className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none group ${
                              isCompleted 
                                ? 'bg-emerald-50/50 border-emerald-200 shadow-2xs' 
                                : 'bg-slate-50/50 border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-xs'
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all duration-300 ${
                              isCompleted 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-white text-slate-500 border border-slate-300 group-hover:border-blue-400 group-hover:text-blue-600'
                            }`}>
                              {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`text-sm sm:text-base font-bold transition-all duration-300 ${
                                isCompleted ? 'text-emerald-800 line-through opacity-70' : 'text-slate-800'
                              }`}>
                                {step.title}
                              </h4>
                              <p className={`text-xs sm:text-sm mt-1 transition-all duration-300 leading-relaxed ${
                                isCompleted ? 'text-emerald-600/80 line-through opacity-70' : 'text-slate-500'
                              }`}>
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  // Generic template layout for other exercises
                  <ul className="space-y-4">
                    {project.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                        <div className="w-5.5 h-5.5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="font-light leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )}

            {/* Implementation Process Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-5 flex items-center gap-3">
                <BookOpen className="w-5.5 h-5.5 text-blue-600" />
                Quá trình thực hành & Đúc kết
              </h2>
              <p className="text-slate-700 leading-relaxed font-light text-sm sm:text-base whitespace-pre-line">
                {project.process}
              </p>
            </motion.div>

          </div>

          {/* Right Column - Sidebar (Report, PDF viewer, Metadata info) */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            
            {/* PDF Report Preview & Download Panel */}
            {project.pdfUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md relative overflow-hidden group"
              >
                {/* Decorative background glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/30">
                      <FileText className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        Bản báo cáo kết quả
                      </h3>
                      <p className="text-slate-400 text-xs mt-1">
                        Định dạng: PDF • Chi tiết
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-slate-800"></div>
                  
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setIsViewerOpen(true)}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 rounded-2xl font-semibold text-sm shadow-md shadow-blue-900/30 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Eye className="w-4.5 h-4.5" /> Xem trực tuyến
                    </button>
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all duration-200 rounded-2xl font-semibold text-sm hover:-translate-y-0.5"
                    >
                      <ExternalLink className="w-4.5 h-4.5" /> Tải báo cáo về
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Quick Stats & Metadata Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6"
            >
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-blue-600" />
                Thông tin bổ sung
              </h3>

              {/* Submission format */}
              {project.submissionFormat && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <ClipboardList className="w-3.5 h-3.5" />
                    Hình thức nộp bài
                  </div>
                  <p className="text-sm font-medium text-slate-700 bg-slate-50 border border-slate-100 rounded-xl p-3 leading-relaxed">
                    {project.submissionFormat}
                  </p>
                </div>
              )}

              {/* Product format */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  Sản phẩm nộp
                </div>
                <p className="text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-100 rounded-xl p-3">
                  {project.resultType}
                </p>
              </div>

              {/* Tools Used Section */}
              {project.tools && project.tools.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <Wrench className="w-3.5 h-3.5" />
                    Công cụ sử dụng
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tools.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100/50 hover:bg-blue-100/50 transition-colors duration-200 px-3 py-1.5 rounded-xl"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>

          </div>

        </div>
      </div>

      {/* Full-screen PDF Viewer Overlay */}
      {createPortal(
        <AnimatePresence>
          {project.pdfUrl && isViewerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 cursor-pointer"
              onClick={() => setIsViewerOpen(false)}
            >
              {/* Close button at top right */}
              <button
                onClick={() => setIsViewerOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 z-50 cursor-pointer shadow-lg border border-white/5"
                aria-label="Đóng trình xem"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Document Title Header */}
              <div className="absolute top-4 left-4 right-16 hidden sm:flex items-center gap-3 pointer-events-none">
                <div className="p-2.5 bg-red-500/20 text-red-400 rounded-xl border border-red-500/20">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-white font-semibold truncate max-w-xl text-base drop-shadow-md">
                  {project.title} - Báo cáo kết quả
                </span>
              </div>

              {/* PDF Viewer Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 30 }}
                className="w-full max-w-6xl h-[85vh] sm:h-[80vh] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative mt-8 sm:mt-12 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <PDFViewerElement
                  src={project.pdfUrl}
                  style={{ width: "100%", height: "100%", border: "0" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

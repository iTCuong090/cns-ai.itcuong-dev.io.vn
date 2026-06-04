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
  Info,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PDFViewerElement = "pdfjs-viewer-element" as any;

function renderFormattedContent(htmlContent: string): React.ReactNode {
  return (
    <div 
      className="project-process-html text-slate-650"
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
}

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);

  const isStepByStep = project?.id === "bai-1-may-tinh-va-cac-thiet-bi-ngoai-vi";

  // Prevent body scroll when the full-screen viewer or walkthrough is open
  useEffect(() => {
    if (isViewerOpen || isWalkthroughOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isViewerOpen, isWalkthroughOpen]);

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

  // Step list length (Bài 1)
  const totalSteps = project.steps?.length || 0;

  // Keyboard navigation for step-by-step walkthrough
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isWalkthroughOpen || totalSteps === 0) return;
      if (e.key === "ArrowLeft") {
        setActiveStepIdx(prev => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveStepIdx(prev => Math.min(totalSteps - 1, prev + 1));
      } else if (e.key === "Escape") {
        setIsWalkthroughOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isWalkthroughOpen, totalSteps]);

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
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-5">
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
              <div className="mb-5 border-b border-blue-100/50 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Mục tiêu đạt được</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base bg-white p-4 rounded-2xl border border-blue-100/30 shadow-2xs hover:shadow-xs transition-shadow">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
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
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">
                  Yêu cầu chi tiết
                </h2>

                {/* Specific Layout for Bài 1: Interactive Stepper & Other Exercises: Image Viewer */}
                {project.steps && project.steps.length > 0 ? (
                  <div className="space-y-6">
                    <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-lg font-bold text-slate-800">
                          {isStepByStep ? "Hướng dẫn thực hành chi tiết" : "Hình ảnh minh chứng thực tế"}
                        </h3>
                        <p className="text-slate-500 text-sm max-w-md leading-relaxed">
                          {isStepByStep 
                            ? `Bài thực hành gồm ${totalSteps} bước chi tiết kèm hình ảnh minh họa cho từng thao tác máy tính.`
                            : `Dự án chứa ${totalSteps} hình ảnh chụp minh chứng hoạt động và kết quả thực tế.`}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => {
                          setIsWalkthroughOpen(true);
                          setActiveStepIdx(0);
                        }}
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base shrink-0 animate-pulse hover:animate-none"
                      >
                        <Eye className="w-5 h-5" /> {isStepByStep ? "Bắt đầu xem từng bước" : "Xem ảnh minh chứng"}
                      </button>
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
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-5">
                Quá trình thực hành & Đúc kết
              </h2>
              <div className="text-slate-700 font-light space-y-4">
                {renderFormattedContent(project.process)}
              </div>
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
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
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

      {/* Full-screen Step-by-Step Walkthrough Modal */}
      {createPortal(
        <AnimatePresence>
          {isWalkthroughOpen && project.steps && project.steps[activeStepIdx] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="bg-slate-900/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0 z-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                    <ClipboardList className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
                      {isStepByStep ? "Hướng dẫn từng bước thực hành" : "Album ảnh minh chứng thực tế"}
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5 truncate max-w-[200px] sm:max-w-md">
                      {project.title}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsWalkthroughOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 cursor-pointer shadow-md"
                  aria-label="Đóng trình xem"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Main screenshot viewport in the center */}
              <div className="flex-1 flex items-center justify-between px-2 sm:px-6 md:px-12 relative overflow-hidden bg-slate-950">
                {/* Left navigation arrow */}
                <button
                  disabled={activeStepIdx === 0}
                  onClick={() => setActiveStepIdx(prev => prev - 1)}
                  className="p-3 sm:p-4 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-white disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 z-10 shadow-lg border border-slate-800 cursor-pointer"
                  title="Bước trước"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>

                {/* Screenshot Frame */}
                <div className="flex-1 h-full flex flex-col items-center justify-center p-4 max-w-5xl mx-auto">
                  <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh] sm:max-h-[65vh]">
                    {/* Window Title Bar Mock */}
                    <div className="bg-slate-850 px-4 py-2.5 flex items-center justify-between shrink-0 border-b border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                        <span className="text-slate-500 text-[10px] sm:text-xs font-mono ml-2 truncate max-w-[250px]">
                          {project.steps[activeStepIdx].image?.split('/').pop() || 'screenshot.jpg'}
                        </span>
                      </div>
                      <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-slate-800 px-2 py-0.5 rounded">
                        MINH CHỨNG THAO TÁC
                      </span>
                    </div>
                    
                    {/* Image Viewport */}
                    <div className="flex-1 bg-slate-950 p-4 flex items-center justify-center overflow-hidden relative">
                      <AnimatePresence mode="wait">
                        {project.steps[activeStepIdx].image ? (
                          <motion.img
                            key={activeStepIdx}
                            src={project.steps[activeStepIdx].image}
                            alt={project.steps[activeStepIdx].title}
                            initial={{ opacity: 0, scale: 0.98, x: 10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.98, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                          />
                        ) : (
                          <div className="text-slate-500 text-sm">Không có ảnh minh họa cho bước này</div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Right navigation arrow */}
                <button
                  disabled={activeStepIdx === totalSteps - 1}
                  onClick={() => setActiveStepIdx(prev => prev + 1)}
                  className="p-3 sm:p-4 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-white disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 z-10 shadow-lg border border-slate-800 cursor-pointer"
                  title="Bước tiếp theo"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>

              {/* Bottom footer and step details panel */}
              <div className="bg-slate-900 border-t border-slate-850 p-5 sm:p-6 shrink-0 z-50">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-5">
                  
                  {/* Step text description */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                        {isStepByStep ? "Bước" : "Ảnh"} {activeStepIdx + 1} / {totalSteps}
                      </span>
                    </div>
                    <h4 className="text-white font-extrabold text-base sm:text-lg leading-snug">
                      {project.steps[activeStepIdx].title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                      {project.steps[activeStepIdx].desc}
                    </p>
                  </div>

                  {/* Right side controls (Prev/Next) */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 shrink-0 border-t border-slate-800/60 md:border-t-0 pt-4 md:pt-0">
                    
                    {/* Step navigation shortcut */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsWalkthroughOpen(false)}
                        className="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-800/30 hover:bg-slate-800 hover:border-slate-700 text-xs sm:text-sm font-medium border border-transparent transition-all duration-200 cursor-pointer"
                      >
                        Thoát
                      </button>
                      
                      {activeStepIdx > 0 ? (
                        <button
                          onClick={() => setActiveStepIdx(prev => prev - 1)}
                          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs sm:text-sm font-semibold shadow-md border border-slate-700 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        >
                          {isStepByStep ? "Bước trước" : "Ảnh trước"}
                        </button>
                      ) : null}

                      {activeStepIdx < totalSteps - 1 ? (
                        <button
                          onClick={() => setActiveStepIdx(prev => prev + 1)}
                          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-900/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        >
                          {isStepByStep ? "Bước tiếp theo" : "Ảnh tiếp theo"}
                        </button>
                      ) : (
                        <button
                          onClick={() => setIsWalkthroughOpen(false)}
                          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-900/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                        >
                          {isStepByStep ? "Hoàn tất hướng dẫn" : "Hoàn tất xem ảnh"}
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

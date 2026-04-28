import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, CheckCircle2, Target, FileText } from "lucide-react";
import { motion } from "motion/react";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Không tìm thấy dự án</h2>
        <p className="mb-8 text-slate-500">Dự án bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link to="/" className="text-blue-600 hover:underline">Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-blue-50 rounded-b-[3rem] overflow-hidden border-b border-blue-100">
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-blue-50/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <Link to="/#du-an" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 max-w-4xl"
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-6">Mô tả chung</h2>
          <p className="text-lg text-slate-700 leading-relaxed font-light">
            {project.fullDescription}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Mục tiêu bài tập</h2>
          </div>
          <ul className="space-y-4">
            {project.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-6">Quá trình thực hiện</h2>
          <p className="text-slate-700 leading-relaxed">
            {project.process}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center"
        >
          <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Đính kèm sản phẩm</h3>
          <p className="text-slate-500 mb-6">{project.resultType}</p>
          <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors shadow-sm">
            Xem sản phẩm chi tiết
          </button>
          <p className="text-xs text-slate-400 mt-4">* Đây là nút giả lập để hoàn thiện giao diện landing page.</p>
        </motion.div>
      </div>
    </div>
  );
}

import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Brain, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Terminal, 
  BookOpen, 
  TrendingUp, 
  Sparkles, 
  Award,
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface SkillData {
  name: string;
  icon: React.ComponentType<any>;
  desc: string;
  before: number;
  after: number;
  gain: string;
}

export function Summary() {
  const [timeframe, setTimeframe] = useState<"before" | "after">("after");

  const skills: SkillData[] = [
    {
      name: "Sử dụng AI hỗ trợ học tập (AI Prompting)",
      icon: Brain,
      desc: "Kỹ năng thiết kế câu lệnh hiệu quả (System, User Prompts, Few-shot), khai thác mô hình ngôn ngữ lớn (LLM) để học tập và làm việc.",
      before: 30,
      after: 90,
      gain: "+60% - Làm chủ tư duy Prompting, biết cách kiểm chứng chéo thông tin và kết hợp AI như một trợ lý đồng hành."
    },
    {
      name: "Khai thác & Xử lý dữ liệu (Data Literacy)",
      icon: Database,
      desc: "Kỹ năng tìm kiếm nâng cao với cú pháp chuyên biệt, lọc thông tin số, khai thác và xử lý dữ liệu bảng tính khoa học.",
      before: 40,
      after: 85,
      gain: "+45% - Thành thạo các hàm xử lý dữ liệu phức tạp và nâng cao hiệu quả tìm kiếm thông tin học thuật."
    },
    {
      name: "Bảo mật số & An toàn tài khoản",
      icon: ShieldCheck,
      desc: "Nhận thức và thực hành bảo mật thông tin cá nhân: quản lý mật khẩu mạnh, 2FA, nhận diện nguy cơ mã độc và tấn công lừa đảo trực tuyến.",
      before: 50,
      after: 85,
      gain: "+35% - Thiết lập thói quen bảo mật chủ động, giảm thiểu rủi ro bị tấn công danh tính trên mạng xã hội."
    },
    {
      name: "Tư duy máy tính & Phần cứng (Computer Systems)",
      icon: Cpu,
      desc: "Hiểu biết cấu trúc phần cứng máy tính, các thiết bị ngoại vi, phương thức kết nối phần cứng và xử lý lỗi kết nối cơ bản.",
      before: 60,
      after: 85,
      gain: "+25% - Nắm rõ nguyên lý vận hành của linh kiện và tự tay kết nối, chẩn đoán các lỗi thiết bị ngoại vi đơn giản."
    },
    {
      name: "Lập trình & Thiết kế sản phẩm số",
      icon: Terminal,
      desc: "Sử dụng ngôn ngữ lập trình và các thư viện hiện đại để hiện thực hóa sản phẩm số, tư duy thiết kế giao diện UI/UX trực quan.",
      before: 45,
      after: 80,
      gain: "+35% - Tự tin thiết kế và code website portfolio cá nhân phản hồi mượt mà bằng React, Vite và Tailwind CSS."
    }
  ];

  const timelineSteps = [
    {
      step: "Bài 1",
      title: "Máy tính & Thiết bị ngoại vi",
      desc: "Thực hành tháo lắp, nhận diện phần cứng và kết nối các thiết bị ngoại vi vào hệ thống máy tính thực tế.",
      icon: Cpu,
      color: "bg-blue-500"
    },
    {
      step: "Bài 2",
      title: "Hệ điều hành & Phần mềm",
      desc: "Làm quen với việc cấu hình môi trường số cá nhân, cài đặt phần mềm và quản lý tài nguyên hệ thống tối ưu.",
      icon: Terminal,
      color: "bg-indigo-500"
    },
    {
      step: "Bài 3",
      title: "Khai thác thông tin & Dữ liệu",
      desc: "Học cách truy tìm thông tin uy tín, làm việc với Google Sheets nâng cao để lọc và biểu diễn số liệu trực quan.",
      icon: Database,
      color: "bg-purple-500"
    },
    {
      step: "Bài 4",
      title: "Bảo mật & Cộng tác số",
      desc: "Thực hành thiết lập bảo mật đa lớp (MFA), nâng cao ý thức về an toàn thông tin khi cộng tác trên môi trường đám mây.",
      icon: ShieldCheck,
      color: "bg-emerald-500"
    },
    {
      step: "Bài 5",
      title: "Trí tuệ nhân tạo (AI)",
      desc: "Tìm hiểu nguyên lý AI, thực hành kỹ thuật Prompt Engineering nâng cao để ứng dụng hiệu quả vào học tập.",
      icon: Brain,
      color: "bg-amber-500"
    },
    {
      step: "Bài 6",
      title: "Xây dựng Portfolio số",
      desc: "Tổng hợp và đóng gói toàn bộ quá trình học tập vào sản phẩm portfolio React hiện đại để lưu trữ lâu dài.",
      icon: Sparkles,
      color: "bg-rose-500"
    }
  ];

  return (
    <div className="w-full min-h-screen py-10 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-blue-50 text-blue-700 border border-blue-200/50 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase inline-block mb-4 shadow-2xs">
              Nhìn lại hành trình học tập
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Tổng kết & Đánh giá bản thân
            </h1>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              Phân tích sự trưởng thành trong tư duy công nghệ, đánh giá những thách thức đã vượt qua, 
              và định hướng áp dụng kỹ năng số vào chuyên ngành CNTT trong tương lai.
            </p>
          </motion.div>
        </div>

        {/* Section 1: Interactive Skills Tracker */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Glowing accent decor */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-slate-100 pb-8 mb-8">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
                  <TrendingUp className="w-6.5 h-6.5 text-blue-600" />
                  Sự phát triển năng lực số của bản thân
                </h2>
                <p className="text-slate-500 text-sm max-w-xl font-light">
                  So sánh mức độ thành thạo và tự tin trong các kỹ năng số cốt lõi trước và sau khi hoàn thành học phần. Nhấn chuyển nút dưới đây để thấy sự thay đổi.
                </p>
              </div>

              {/* Timeframe Toggle Buttons */}
              <div className="flex items-center self-start lg:self-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
                <button
                  onClick={() => setTimeframe("before")}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    timeframe === "before" 
                      ? "bg-white text-slate-800 shadow-sm" 
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Trước môn học
                </button>
                <button
                  onClick={() => setTimeframe("after")}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    timeframe === "after" 
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/10" 
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  Sau môn học
                </button>
              </div>
            </div>

            {/* Skills Progress List */}
            <div className="space-y-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                const currentValue = timeframe === "before" ? skill.before : skill.after;
                
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Skill Info */}
                    <div className="md:col-span-4 flex items-start gap-4">
                      <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl border border-blue-100/50 shrink-0">
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          {skill.name}
                        </h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-light hidden sm:block">
                          {skill.desc}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar Column */}
                    <div className="md:col-span-5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-400">Độ tự tin</span>
                        <span className={`font-bold ${timeframe === "before" ? "text-slate-600" : "text-blue-600"}`}>
                          {currentValue}%
                        </span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentValue}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full transition-colors duration-500 ${
                            timeframe === "before" 
                              ? "bg-slate-400" 
                              : "bg-gradient-to-r from-blue-500 to-blue-700"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Performance Gain Tag */}
                    <div className="md:col-span-3">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={timeframe}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`p-3 rounded-2xl text-xs leading-relaxed ${
                            timeframe === "before"
                              ? "bg-slate-50 border border-slate-200/40 text-slate-500 font-light"
                              : "bg-emerald-50 border border-emerald-100 text-emerald-800 font-medium"
                          }`}
                        >
                          {timeframe === "before" ? "Bắt đầu với kiến thức căn bản, chưa hệ thống hóa." : skill.gain}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: Learning Timeline */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Nhật ký hành trình số
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-light">
              Tóm tắt sự tích lũy qua từng bài thực hành cụ thể. Mỗi bước đi là một mảnh ghép quan trọng xây dựng năng lực số cá nhân.
            </p>
          </div>

          {/* Timeline Component */}
          <div className="max-w-4xl mx-auto relative">
            {/* Center line (hidden on mobile, shown on desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block" />

            <div className="space-y-8 sm:space-y-12">
              {timelineSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Left/Right content card */}
                    <div className="w-full md:w-[45%]">
                      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300">
                        <span className={`text-xs font-bold text-white px-2.5 py-1 rounded-lg ${step.color} inline-block mb-3`}>
                          {step.step}
                        </span>
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center shrink-0 z-10 bg-slate-900 text-white relative">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    {/* Empty block to balance grid on desktop */}
                    <div className="w-full md:w-[45%] hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Detailed Self-Reflection Essays */}
        <section className="space-y-8 sm:space-y-12 mb-16">
          <div className="border-b border-slate-200 pb-4 mb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
              <Award className="w-7 h-7 text-blue-600" />
              Đánh giá bản thân chuyên sâu
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Sự trưởng thành */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Sự trưởng thành về Kiến thức & Kỹ năng số
                  </h3>
                </div>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light">
                  Môn học đã mang lại sự chuyển biến lớn trong nhận thức của mình về thế giới công nghệ. Bắt đầu từ việc làm quen phần cứng, mình không còn e ngại các lỗi cắm thiết bị ngoại vi hay chẩn đoán hư hỏng vật lý cơ bản. Khi bước sang kỹ năng xử lý thông tin và lập trình, mình học được tư duy hệ thống hóa dữ liệu: biết cách truy xuất dữ liệu từ các nguồn chính thống, sắp xếp dữ liệu bảng tính bằng các hàm nâng cao để rút ra kết luận logic.
                </p>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light">
                  Sản phẩm portfolio điện tử viết bằng React chính là minh chứng lớn nhất cho việc tích lũy kỹ năng số. Nó giúp mình liên kết toàn bộ kiến thức lý thuyết thành một giải pháp thực tế, có tính tương tác cao và phản hồi giao diện tốt.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Thách thức */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Những thách thức & Cách mình vượt qua
                  </h3>
                </div>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light">
                  Thách thức lớn nhất đối với mình là việc học cách triển khai các công nghệ mới trong khoảng thời gian giới hạn. Ví dụ như khi cấu hình và tích hợp thư viện PDF trực tuyến hay xử lý chuyển động UI mượt mà bằng Framer Motion, mình liên tục đối mặt với các lỗi tương thích trình duyệt và quản lý vòng đời component của React 19.
                </p>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light">
                  Để vượt qua, mình đã xây dựng kỹ năng tự nghiên cứu (Self-research) và đọc tài liệu kỹ thuật gốc (Official Documentation). Thay vì chỉ copy-paste code từ diễn đàn, mình cố gắng viết thử nghiệm nhỏ (sandbox) để hiểu rõ cơ chế chạy trước khi đưa vào sản phẩm chính. Việc này giúp mình rèn luyện sự kiên trì và tư duy gỡ lỗi (debugging) khoa học.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Cộng tác AI */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between lg:col-span-2"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Cộng tác với AI hiệu quả gắn liền với Liêm chính học thuật
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-8 space-y-3">
                    <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light">
                      Học phần về AI (Bài 5) đã định hình lại hoàn toàn cách mình sử dụng AI trong học tập. Mình hiểu rằng AI là một trợ lý đắc lực hỗ trợ tăng hiệu suất chứ không phải là công cụ làm thay. Trong suốt quá trình thực hành, đặc biệt là khi viết code xây dựng Portfolio này, mình đã thực hành phương pháp **"Cộng tác có tư duy độc lập"**.
                    </p>
                    <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light">
                      Mình sử dụng AI để giải thích các khái niệm khó, gợi ý cấu trúc code hoặc tìm kiếm lỗi cú pháp (Syntax bugs). Tuy nhiên, mình luôn tự tay viết các đoạn logic nghiệp vụ chính, thiết kế bố cục, và chủ động kiểm chứng chéo câu trả lời của AI với tài liệu chính thống để tránh lỗi ảo giác (hallucination). Mình tuyệt đối không chép nguyên văn văn bản hay chạy code mà không hiểu rõ cơ chế. Việc này giúp mình vừa cải thiện tốc độ làm bài vừa bảo đảm sự trung thực tuyệt đối trong học thuật.
                    </p>
                  </div>

                  {/* Warning/Quote panel inside Card 3 */}
                  <div className="md:col-span-4 bg-amber-50/50 border border-amber-200/50 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
                      <ShieldAlert className="w-4.5 h-4.5 text-amber-600" />
                      Nguyên tắc làm việc
                    </div>
                    <p className="text-amber-900 text-xs sm:text-sm leading-relaxed font-light italic">
                      "Xem AI là người hướng dẫn và góp ý phản biện (Co-pilot), giữ vai trò phản tư độc lập và trực tiếp thực thi (Captain) để củng cố năng lực tư duy cốt lõi."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Định hướng tương lai */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between lg:col-span-2"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    Định hướng ứng dụng kỹ năng trong tương lai phát triển CNTT
                  </h3>
                </div>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-light">
                  Là một sinh viên chuyên ngành Công nghệ thông tin tại Trường Đại học Công nghệ (UET), những kỹ năng thu hoạch được từ học phần này là nền móng cực kỳ quan trọng cho các chặng đường sắp tới. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Thiết kế UI/UX & Web</h5>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      Áp dụng kỹ năng xây dựng giao diện tùy biến để thiết kế các phần mềm dễ sử dụng, đặt trải nghiệm người dùng làm trọng tâm.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Nghiên cứu & Tối ưu AI</h5>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      Tiếp tục tìm tòi các kỹ thuật Prompt Engineering nâng cao để ứng dụng AI giải các bài toán thực tế như tự động hóa quy trình.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Kỹ thuật & Bảo mật</h5>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      Tích hợp tư duy bảo mật mạng và kiểm thử mã độc ngay từ những dòng code đầu tiên khi viết phần mềm chuyên nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CTA Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900/90 backdrop-blur-md text-white rounded-3xl p-8 border border-slate-800/80 shadow-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 text-center sm:text-left space-y-1">
            <h4 className="font-bold text-base sm:text-lg">Bạn muốn xem lại các bài tập thực hành?</h4>
            <p className="text-slate-300 text-xs sm:text-sm font-light">Quay lại danh sách bento-grid trên trang chủ để xem báo cáo PDF và ảnh minh chứng.</p>
          </div>
          <Link 
            to="/#du-an"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-sm transition-all duration-200 hover:-translate-y-0.5 relative z-10 shadow-lg cursor-pointer"
          >
            Quay lại xem bài tập <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

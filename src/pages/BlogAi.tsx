import { Link } from "react-router-dom";
import { User, Calendar, Clock, ThumbsUp, Globe, Github, Linkedin, Twitter } from "lucide-react";

export function BlogAi() {
  const handleClick = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    alert("Bạn nghĩ chúng thực sự hoạt động đấy hả");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* The user requested to leave hero text and hero image blank for them to add images later, 
          with a temporary white background, but preserving the structure. */}
      <section
        className="w-full relative py-20 lg:py-32 border-b border-slate-800 bg-cover bg-center bg-no-repeat min-h-[calc(100vh-64px)] flex items-center"
        style={{ backgroundImage: "url('/ai-blog-hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text Structure */}
            <div className="flex flex-col items-start space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium text-white bg-white/10 backdrop-blur-sm">
                AI & DEVELOPMENT
              </div>

              {/* Main Title Placeholder */}
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
                {/* User will add text/image here */}
                AI trong phát triển phần mềm
              </h1>

              {/* Subtitle Placeholder */}
              <p className="text-lg text-slate-200 max-w-lg leading-relaxed drop-shadow">
                {/* User will add text/image here */}
                Ứng dụng trí tuệ nhân tạo để tăng tốc lập trình, nâng cao chất lượng và tối ưu quy trình phát triển phần mềm.
              </p>

              {/* Button Placeholder */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("blog-content")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-900/20"
              >
                Khám phá ngay <span className="ml-2">→</span>
              </button>
            </div>

            {/* Hero Image Structure */}
            <div className="relative w-full h-[400px] rounded-2xl flex items-center justify-center">
              {/* User will add their hero image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section id="blog-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Main Content */}
          <div className="lg:col-span-8">
            {/* Article Header */}
            <div className="mb-8">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3 block">
                AI & DEVELOPMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                AI trong phát triển phần mềm: Xu hướng tất yếu của tương lai
              </h2>

              <div className="flex flex-wrap items-center text-sm text-slate-500 gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Tạ Hữu Cường</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>5 Tháng 5, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 phút đọc</span>
                </div>
              </div>
            </div>

            {/* Main Article Image */}
            <div className="w-full aspect-[16/9] bg-slate-100 rounded-2xl mb-10 overflow-hidden border border-slate-200 shadow-sm">
              <img src="/blog-main-image.png" alt="AI in Software Development" className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <div className="max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Trí tuệ nhân tạo (AI) đang thay đổi cách các nhà phát triển viết code, kiểm thử, triển khai và bảo trì phần mềm. Từ các công cụ hỗ trợ viết code thông minh đến khả năng tự động hóa kiểm thử và phân tích dữ liệu, AI đang trở thành trợ thủ đắc lực giúp developer làm việc nhanh hơn, chính xác hơn và sáng tạo hơn.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                Năm 2026 đánh dấu một bước ngoặt lớn khi AI không chỉ còn là "người gợi ý" mà đã thực sự trở thành một "pair-programmer" đáng tin cậy. Hãy nhìn vào bức tranh toàn cảnh dưới đây để thấy AI đang tham gia vào mọi giai đoạn của vòng đời phát triển phần mềm (SDLC): từ lúc lên ý tưởng, viết code, kiểm thử cho đến khi triển khai lên server.
              </p>

              {/* Workflow Image Section */}
              <div className="my-12">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
                  {/* Nhớ lưu ảnh bạn vừa gửi vào thư mục public với tên ai-workflow.png nhé */}
                  <img src="/ai-workflow.png" alt="AI Software Development Workflow" className="w-full h-auto rounded-xl" />
                </div>
                <p className="text-center text-sm text-slate-500 mt-4 italic">
                  Quy trình phát triển phần mềm hiện đại với sự hỗ trợ của AI: Ý tưởng ➔ Code ➔ Kiểm thử ➔ Triển khai
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                1. Từ ý tưởng đến Code: AI hỗ trợ thông minh hơn
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Các công cụ như GitHub Copilot, Tabnine hay Amazon CodeWhisperer nay đã tiến hóa với các mô hình ngôn ngữ lớn (LLMs) được tối ưu riêng cho lập trình. Chúng không chỉ gợi ý từng dòng code mà có thể sinh ra toàn bộ các hàm chức năng, các component dựa trên prompt (mô tả) bằng ngôn ngữ tự nhiên.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 text-lg mb-8 marker:text-blue-500">
                <li><strong className="text-slate-900">Gợi ý theo ngữ cảnh:</strong> AI hiểu được toàn bộ project structure chứ không chỉ file hiện tại.</li>
                <li><strong className="text-slate-900">Chuyển đổi ngôn ngữ:</strong> Dễ dàng dịch một module từ Python sang TypeScript chỉ trong vài giây.</li>
                <li><strong className="text-slate-900">Giải thích code:</strong> Phân tích và tạo document tự động cho các legacy code (code cũ) phức tạp.</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                2. Tự động hóa kiểm thử và phát hiện lỗi
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Việc viết unit test thường bị coi là công việc nhàm chán đối với nhiều developer. Hiện nay, AI có thể tự động đọc luồng xử lý của hàm và sinh ra các kịch bản test (test cases) bao phủ các trường hợp ngoại lệ (edge cases) mà con người có thể bỏ sót.
              </p>
              <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                <p className="text-slate-700 italic text-lg m-0">
                  "Theo một khảo sát gần đây, các team áp dụng AI vào quy trình QA (Quality Assurance) đã giảm tới 45% thời gian fix bug trước khi release."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                3. Tối ưu hóa quy trình DevOps và CI/CD
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Trong vận hành hệ thống, AI Operations (AIOps) đang dần thay thế các cấu hình thủ công. AI liên tục giám sát log, số liệu hệ thống và dự đoán các sự cố (ví dụ: cạn kiệt bộ nhớ hoặc nghẽn băng thông) trước khi chúng ảnh hưởng đến người dùng, tự động scale hệ thống một cách thông minh.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                4. Thách thức và góc nhìn thực tế
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Tuy nhiên, AI không thay thế con người. Mã nguồn do AI sinh ra đôi khi gặp lỗi logic ngầm hoặc sử dụng các thư viện có lỗ hổng bảo mật. Vai trò của Developer đang dịch chuyển từ việc "gõ code" sang "kiến trúc sư và người kiểm duyệt" - định hướng cho AI và đánh giá chất lượng kết quả đầu ra.
              </p>

              {/* Lời kết */}
              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Lời kết</h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-10">
                Sự kết hợp giữa tư duy sáng tạo của con người và tốc độ xử lý của AI chính là tương lai của ngành phát triển phần mềm. Nếu bạn chưa áp dụng các công cụ này vào workflow hàng ngày, đây là thời điểm tuyệt vời nhất để bắt đầu.
              </p>

              {/* Simplified Call To Action */}
              <div className="mt-16 pt-10 border-t border-slate-200 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Bạn thấy bài viết này hữu ích?</h3>
                <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                  Đừng bỏ lỡ những bài viết chuyên sâu về AI và công nghệ số. Hãy đăng ký nhận bản tin hàng tuần của chúng tôi.
                </p>
                <button
                  onClick={handleClick}
                  className="px-10 py-3.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Đăng ký nhận bài viết mới
                </button>
              </div>
            </div>


          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Author Card */}
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">
                Tác giả
              </h3>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                    <img src="/avatar.jpg" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Tạ Hữu Cường</h4>
                    <p className="text-sm text-slate-500">Developer & AI Enthusiast</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-6">
                  Chia sẻ kiến thức về AI, lập trình và phát triển phần mềm.
                </p>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" onClick={handleClick} className="hover:text-slate-600 transition-colors"><Globe className="w-5 h-5" /></a>
                  <a href="#" onClick={handleClick} className="hover:text-slate-600 transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" onClick={handleClick} className="hover:text-slate-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" onClick={handleClick} className="hover:text-slate-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">
                Bài viết liên quan
              </h3>
              <div className="space-y-4">
                {/* Article 1 */}
                <Link to="#" onClick={handleClick} className="flex gap-4 group">
                  <div className="w-24 h-20 rounded-xl bg-slate-800 overflow-hidden flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-blue-900/40"></div>
                    <div className="w-full h-full flex items-center justify-center text-blue-400 font-mono text-xs border border-blue-500/30 rounded-xl">{"</>"}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2 mb-1.5">
                      10 công cụ AI giúp lập trình viên làm việc hiệu quả hơn
                    </h4>
                    <p className="text-xs text-slate-500">10 Tháng 5, 2024</p>
                  </div>
                </Link>

                {/* Article 2 */}
                <Link to="#" onClick={handleClick} className="flex gap-4 group">
                  <div className="w-24 h-20 rounded-xl bg-slate-800 overflow-hidden flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-indigo-900/40"></div>
                    <div className="w-full h-full flex items-center justify-center text-indigo-400 font-mono text-xs border border-indigo-500/30 rounded-xl">AI</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2 mb-1.5">
                      Hướng dẫn tích hợp ChatGPT vào ứng dụng của bạn
                    </h4>
                    <p className="text-xs text-slate-500">5 Tháng 5, 2024</p>
                  </div>
                </Link>

                {/* Article 3 */}
                <Link to="#" onClick={handleClick} className="flex gap-4 group">
                  <div className="w-24 h-20 rounded-xl bg-slate-800 overflow-hidden flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-sky-900/40"></div>
                    <div className="w-full h-full flex items-center justify-center text-sky-400 font-mono text-xs border border-sky-500/30 rounded-xl">☁</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2 mb-1.5">
                      DevOps và AI: Bộ đôi hoàn hảo cho tương lai
                    </h4>
                    <p className="text-xs text-slate-500">2 Tháng 5, 2024</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Nhận bài viết mới nhất
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Đăng ký để nhận những bài viết mới về AI và phát triển phần mềm.
              </p>
              <form className="space-y-3" onSubmit={handleClick}>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

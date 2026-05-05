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
                Khám phá cách AI thay đổi quy trình phát triển phần mềm hiện đại và các công cụ hàng đầu dành cho lập trình viên.
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
                AI trong phát triển phần mềm: Xu hướng và ứng dụng thực tiễn năm 2026
              </h2>

              <div className="flex flex-wrap items-center text-sm text-slate-500 gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Tạ Hữu Cường</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>6 Tháng 5, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 phút đọc</span>
                </div>
              </div>
            </div>

            {/* Minh họa 1 */}
            <div className="w-full aspect-[16/9] bg-slate-100 rounded-2xl mb-10 overflow-hidden border border-slate-200 shadow-sm">
              <img src="/blog-main-image.png" alt="AI in Software Development" className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <div className="max-w-none">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Chào các bạn, trí tuệ nhân tạo (AI) đang tiến những bước dài và thay đổi hoàn toàn bức tranh của ngành công nghiệp phần mềm. Nếu như cách đây vài năm, AI trong lập trình chỉ dừng lại ở mức "gợi ý vài từ khóa" (autocomplete) cơ bản, thì bước sang năm 2026, AI đã thực sự trở thành một "pair-programmer" đắc lực, đồng hành cùng chúng ta từ bước lên ý tưởng cho đến khi sản phẩm đến tay người dùng.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                Trong bài viết này, mình sẽ chia sẻ với các bạn những góc nhìn thực tế về cách AI đang thay đổi quy trình phát triển phần mềm, điểm qua những công cụ AI hàng đầu hiện nay, và đặc biệt là những kinh nghiệm "xương máu" của mình khi áp dụng AI vào các dự án thực tế.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                1. AI thay đổi quy trình phát triển phần mềm như thế nào?
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Trước đây, quy trình phát triển phần mềm (SDLC) thường là một chuỗi các công việc nối tiếp nhau, đòi hỏi nhiều nhân lực và thời gian. Hiện tại, sự can thiệp của AI đã tối ưu hóa mọi công đoạn. Theo một báo cáo từ Gartner đầu năm 2026, các tổ chức áp dụng AI toàn diện vào SDLC đã giảm trung bình 40% thời gian time-to-market.
              </p>

              {/* Minh họa 2: Workflow */}
              <div className="my-12">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <img src="/ai-workflow.png" alt="AI Software Development Workflow" className="w-full h-auto rounded-xl" />
                </div>
                <p className="text-center text-sm text-slate-500 mt-4 italic">
                  Hình 1: Quy trình phát triển phần mềm hiện đại với sự hỗ trợ của AI
                </p>
              </div>

              <ul className="list-disc pl-6 space-y-2 text-slate-700 text-lg mb-8 marker:text-blue-500">
                <li><strong className="text-slate-900">Khởi tạo và thiết kế:</strong> AI phân tích yêu cầu từ khách hàng và tự động tạo ra kiến trúc hệ thống sơ bộ (system architecture) hoặc đề xuất các mẫu thiết kế (design patterns) tối ưu.</li>
                <li><strong className="text-slate-900">Viết mã (Coding):</strong> Không chỉ sinh code, AI có thể tái cấu trúc (refactor) đoạn code rối rắm thành code sạch, viết document tự động, và thậm chí chuyển đổi nguyên một module từ ngôn ngữ này sang ngôn ngữ khác.</li>
                <li><strong className="text-slate-900">Kiểm thử (Testing):</strong> AI có khả năng tự động đọc hiểu luồng logic của hệ thống để sinh ra hàng ngàn unit tests, bao phủ các edge cases mà lập trình viên dễ bỏ sót.</li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                2. Các công cụ AI hàng đầu cho lập trình viên năm 2026
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Thị trường công cụ AI hỗ trợ lập trình đang bùng nổ. Dưới đây là những "trợ thủ" mà theo đánh giá của mình là đáng giá nhất ở thời điểm hiện tại:
              </p>

              {/* Minh họa 3: AI Tools Ecosystem */}
              <div className="my-10">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <img src="/ai-tools-ecosystem.png" alt="AI Tools for Developers" className="w-full h-auto rounded-xl" />
                </div>
                <p className="text-center text-sm text-slate-500 mt-4 italic">
                  Hình 2: Hệ sinh thái các công cụ AI dành cho lập trình viên
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">GitHub Copilot & Cursor IDE</h4>
                  <p className="text-slate-700">Đây vẫn là combo vô đối. Đặc biệt, Cursor IDE với tính năng tích hợp trực tiếp Claude 3.5 Sonnet và GPT-4o giúp việc hiểu toàn bộ codebase trở nên dễ dàng hơn bao giờ hết.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Google Gemini (AI Studio)</h4>
                  <p className="text-slate-700">Với context window khổng lồ lên tới hàng triệu token, Gemini là lựa chọn số một khi mình cần nạp toàn bộ log lỗi hoặc tài liệu API dài hàng trăm trang để phân tích nguyên nhân gốc rễ (root cause) của một bug phức tạp.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-blue-600 mb-2">Vercel v0 & Google Stitch</h4>
                  <p className="text-slate-700">Trong lĩnh vực Frontend, các công cụ sinh giao diện trực tiếp từ prompt đang thay đổi luật chơi. Nhập một mô tả text, và bạn có ngay một component React với CSS hoàn chỉnh.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                3. Kinh nghiệm cá nhân: Thực tế không chỉ có màu hồng
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Khi sử dụng AI trong các dự án cá nhân và công ty, mình nhận thấy năng suất thực sự tăng lên đáng kể. Mình tốn ít thời gian hơn cho các task boilerplate và có nhiều thời gian hơn để suy nghĩ về kiến trúc hệ thống.
              </p>
              <div className="bg-slate-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <p className="text-slate-700 italic text-lg m-0">
                  "Tuy nhiên, cạm bẫy lớn nhất khi làm việc với AI là hội chứng ảo giác (hallucination). Rất nhiều lần AI đã tự tin đề xuất cho mình một đoạn code dùng hàm của thư viện... không hề tồn tại!"
                </p>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Bài học rút ra là: <strong className="text-slate-900">Never trust, always verify</strong> (Không bao giờ tin tưởng tuyệt đối, luôn luôn kiểm chứng). AI giống như một cậu thực tập sinh siêu việt: viết code cực nhanh, làm việc 24/7 không biết mệt mỏi, nhưng lại thiếu kinh nghiệm và thường xuyên "chém gió". Bạn, với vai trò là một Senior/Lead, phải luôn là người review cuối cùng đoạn code đó có tối ưu, có an toàn bảo mật hay không.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                4. Tương lai của nghề lập trình và Đạo đức AI
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                AI sẽ không thay thế lập trình viên, nhưng lập trình viên biết sử dụng AI sẽ thay thế những người không biết. Tuy nhiên, việc lạm dụng AI cũng đặt ra những vấn đề đạo đức như tính minh bạch (đoạn code này do ai viết?), vấn đề bản quyền trí tuệ và nguy cơ xuất hiện bias từ dữ liệu huấn luyện của AI.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Kỹ năng cốt lõi của chúng ta trong những năm tới sẽ dần dịch chuyển. Thay vì chỉ tập trung vào cú pháp ngôn ngữ lập trình, chúng ta sẽ cần rèn luyện kỹ năng phân tích vấn đề, thiết kế hệ thống, và đặc biệt là <strong className="text-slate-900">Prompt Engineering</strong>.
              </p>

              {/* Lời kết */}
              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Lời kết</h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-10">
                AI tạo sinh đang mở ra một kỷ nguyên mới cho sáng tạo và phát triển phần mềm, nơi con người và máy móc cộng tác để tạo ra những sản phẩm vượt xa khả năng của từng bên riêng lẻ. Chìa khóa nằm ở việc sử dụng AI như một đối tác sáng tạo chứ không phải người thay thế, và luôn duy trì tư duy phản biện.
              </p>
              <p className="text-slate-500 text-sm italic mb-10 border-t border-slate-200 pt-4">
                *Lưu ý: Bài viết này được thực hiện với sự hỗ trợ của các công cụ AI tạo sinh (ChatGPT, Google Gemini, DALL-E, Google Stitch) trong quá trình lên ý tưởng, viết nội dung và thiết kế hình ảnh. Tuy nhiên, mọi quan điểm và trải nghiệm cá nhân đều là của tác giả.
              </p>

              {/* Call To Action theo phong cách cá nhân */}
              <div className="mt-16 pt-10 border-t border-slate-200 text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cùng thảo luận thêm nhé!</h3>
                <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                  Bạn đang sử dụng công cụ AI nào trong workflow hàng ngày của mình? Có gặp khó khăn gì khi áp dụng không? Hãy để lại bình luận phía dưới hoặc đăng ký email để chúng ta cùng chia sẻ thêm trong những bài viết tới nhé!
                </p>
                <button
                  onClick={handleClick}
                  className="px-8 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/20"
                >
                  Kết nối với mình
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
                    <p className="text-xs text-slate-500">10 Tháng 4, 2026</p>
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
                    <p className="text-xs text-slate-500">25 Tháng 4, 2026</p>
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
                    <p className="text-xs text-slate-500">15 Tháng 4, 2026</p>
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

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  requirements?: string[];
  submissionFormat?: string;
  process: string;
  resultType: string;
  imageUrl?: string;
  colSpan?: 1 | 2;
  pdfUrl?: string;
  tools?: string[];
  steps?: { title: string; desc: string; image?: string }[];
}

export const projects: Project[] = [
  {
    id: "bai-1-may-tinh-va-cac-thiet-bi-ngoai-vi",
    title: "Bài 1: Máy tính và các thiết bị ngoại vi",
    shortDescription: "Thành thạo kỹ năng thao tác File Explorer trên Windows: tạo lập, di chuyển, sao chép, xóa và khôi phục tệp tin/thư mục.",
    fullDescription: "Bài thực hành giúp rèn luyện và chuẩn hóa các kỹ năng cơ bản khi làm việc với hệ điều hành Windows, bao gồm quản lý cây thư mục, thao tác nhanh với tệp tin và khôi phục dữ liệu từ Thùng rác một cách khoa học.",
    objectives: [
      "Sử dụng thành thạo các tổ hợp phím tắt và File Explorer trên Windows.",
      "Làm chủ các thao tác quản lý tệp tin và thư mục: tạo mới, đổi tên, sao chép, di chuyển và xóa.",
      "Tổ chức và sắp xếp tài liệu cá nhân một cách logic, khoa học."
    ],
    requirements: [
      "Mở File Explorer bằng tổ hợp phím tắt Windows + E hoặc biểu tượng thư mục.",
      "Truy cập phân vùng ổ đĩa không phải hệ thống (ổ D:, E:) hoặc thư mục Documents.",
      "Tạo thư mục thực hành cá nhân theo định dạng: ThucHanh_TaHuuCuong.",
      "Tạo mới, đổi tên file văn bản từ GhiChu.txt thành GhiChuQuanTrong.txt.",
      "Tạo thư mục con TaiLieu và thực hiện sao chép (Copy & Paste) tệp tin vào thư mục con.",
      "Thực hiện di chuyển (Cut & Paste) tệp tin mới tạo DiChuyen.txt vào thư mục con.",
      "Thực hành xóa tệp tin tạm thời (vào Recycle Bin) và xóa vĩnh viễn (Shift + Delete).",
      "Khôi phục lại tệp tin đã xóa tạm thời từ Recycle Bin về vị trí ban đầu."
    ],
    submissionFormat: "Báo cáo thực hành chi tiết định dạng PDF ghi lại các bước kèm hình ảnh minh chứng thao tác thành công.",
    process: `<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Quá trình thực hành được triển khai trực tiếp trên Windows thông qua 3 giai đoạn cốt lõi:</p>
<div class="space-y-6 my-4">
  <div>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200/60 pb-2 uppercase tracking-wide">1. Khởi tạo & Tổ chức</h3>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-2 font-light">Định vị thư mục và thiết lập cây thư mục gốc ThucHanh_TaHuuCuong để quản lý tập trung tài nguyên.</p>
  </div>
  <div>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200/60 pb-2 uppercase tracking-wide">2. Quản trị Tệp tin</h3>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-2 font-light">Thực hành tạo lập, đổi tên tài liệu (GhiChu.txt thành GhiChuQuanTrong.txt), tạo phân mục con TaiLieu và thực thi cơ chế sao chép (Copy) - di chuyển (Cut) để tối ưu cấu trúc dữ liệu.</p>
  </div>
  <div>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 border-b border-slate-200/60 pb-2 uppercase tracking-wide">3. Quản lý Vòng đời & Phục hồi</h3>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-2 font-light">Thực hành xóa tạm thời (Recycle Bin), xóa vĩnh viễn tệp rác bằng Shift + Delete và thực nghiệm khôi phục dữ liệu gốc để kiểm thử tính toàn vẹn.</p>
  </div>
</div>
<p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Toàn bộ các thao tác được ghi nhận qua 19 ảnh chụp minh chứng chi tiết.</p>`,
    resultType: "Thư mục thực hành & Báo cáo PDF minh chứng",
    colSpan: 2,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    pdfUrl: "/files/tmpgxolew_thuchanh_tahuucuong_25020053.pdf",
    tools: ["Windows File Explorer", "Windows Recycle Bin", "Microsoft Word"],
    steps: [
      {
        title: "1. Mở File Explorer",
        desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0000.jpg"
      },
      {
        title: "2. Truy cập phân vùng ổ đĩa/thư mục",
        desc: "Ở cột bên trái File Explorer, nhấp chọn This PC và truy cập vào phân vùng ổ đĩa DATA (D:).",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0001.jpg"
      },
      {
        title: "3. Khởi tạo thư mục thực hành",
        desc: "Chuột phải vào khoảng trống, chọn New -> Folder và đặt tên thư mục gốc là ThucHanh_TaHuuCuong.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0002.jpg"
      },
      {
        title: "4. Truy cập thư mục thực hành",
        desc: "Nhấp đúp chuột vào thư mục ThucHanh_TaHuuCuong vừa tạo để bắt đầu thao tác quản lý dữ liệu.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0003.jpg"
      },
      {
        title: "5. Tạo tệp văn bản GhiChu.txt",
        desc: "Chuột phải chọn New -> Text Document để tạo tệp tin văn bản thô mặc định có tên là GhiChu.txt.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0004.jpg"
      },
      {
        title: "6. Chọn lệnh đổi tên tệp tin",
        desc: "Nhấp chuột phải vào tệp GhiChu.txt và nhấp chọn Rename (biểu tượng đổi tên hoặc nhấn F2).",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0005.jpg"
      },
      {
        title: "7. Xác nhận tên mới cho tệp tin",
        desc: "Nhập tên mới là GhiChuQuanTrong.txt rồi nhấn Enter để xác nhận đổi tên tệp tin.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0006.jpg"
      },
      {
        title: "8. Tạo thư mục con mới",
        desc: "Nhấp chuột phải vào khoảng trống bên trong thư mục thực hành, di chuột chọn New -> Folder.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0007.jpg"
      },
      {
        title: "9. Đặt tên thư mục con TaiLieu",
        desc: "Đặt tên thư mục con mới là TaiLieu rồi nhấn Enter để lưu lại phân mục chứa tài liệu học tập.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0008.jpg"
      },
      {
        title: "10. Sao chép tệp tin (Copy)",
        desc: "Chuột phải vào tệp GhiChuQuanTrong.txt và chọn Copy (hoặc nhấn tổ hợp phím Ctrl + C).",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0009.jpg"
      },
      {
        title: "11. Thực hiện dán tệp tin (Paste)",
        desc: "Truy cập vào thư mục con TaiLieu, chuột phải vào khoảng trống chọn Paste (hoặc nhấn Ctrl + V).",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0010.jpg"
      },
      {
        title: "12. Xác nhận sao chép thành công",
        desc: "Kiểm tra tệp tin GhiChuQuanTrong.txt đã được sao chép thành công và hiển thị trong thư mục TaiLieu.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0011.jpg"
      },
      {
        title: "13. Khởi tạo tệp tin di chuyển",
        desc: "Quay lại thư mục gốc ThucHanh_TaHuuCuong, chuột phải chọn New -> Text Document đặt tên DiChuyen.txt.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0012.jpg"
      },
      {
        title: "14. Chọn lệnh cắt tệp tin (Cut)",
        desc: "Nhấp chuột phải vào tệp DiChuyen.txt vừa tạo và chọn Cut (biểu tượng cây kéo hoặc nhấn Ctrl + X).",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0013.jpg"
      },
      {
        title: "15. Di chuyển tệp tin vào thư mục con",
        desc: "Vào lại thư mục TaiLieu, chuột phải chọn Paste (hoặc Ctrl + V) để thực hiện di chuyển tệp tin.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0014.jpg"
      },
      {
        title: "16. Xác nhận di chuyển thành công",
        desc: "Đảm bảo tệp DiChuyen.txt đã được chuyển vào thư mục TaiLieu an toàn (không còn ở thư mục gốc).",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0015.jpg"
      },
      {
        title: "17. Xóa tạm thời tệp tin",
        desc: "Chuột phải vào tệp GhiChuQuanTrong.txt trong thư mục TaiLieu, chọn Delete để chuyển vào Recycle Bin.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0016.jpg"
      },
      {
        title: "18. Thực hiện xóa vĩnh viễn tệp tin",
        desc: "Chọn tệp DiChuyen.txt trong thư mục TaiLieu, nhấn Shift + Delete và chọn Yes tại hộp thoại cảnh báo.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0017.jpg"
      },
      {
        title: "19. Khôi phục tệp từ Recycle Bin",
        desc: "Mở Recycle Bin ngoài Desktop, chuột phải vào tệp GhiChuQuanTrong.txt chọn Restore để khôi phục lại.",
        image: "/files/bai1/927e29e5-0957-45ae-8b06-e2b87ae49d41-0018.jpg"
      }
    ]
  },
  {
    id: "bai-2-khai-thac-du-lieu-va-thong-tin",
    title: "Bài 2: Khai thác dữ liệu và thông tin",
    shortDescription: "Phát triển kỹ năng tìm kiếm thông tin học thuật ngành CNTT và đánh giá độ tin cậy dựa trên các tiêu chí khoa học.",
    fullDescription: "Nghiên cứu phương pháp tiếp cận thông tin học thuật chính thống từ các cơ sở dữ liệu uy tín (Google Scholar, tạp chí khoa học, sách chuyên khảo), thiết lập tiêu chí đánh giá độ tin cậy dựa trên tác giả, cơ quan xuất bản, trích dẫn, tính cập nhật và trình bày danh mục theo định dạng chuẩn Harvard.",
    objectives: [
      "Phát triển kỹ năng tìm kiếm học thuật nâng cao từ Google Scholar, sách và các tạp chí chuyên ngành.",
      "Đánh giá độ tin cậy của thông tin dựa trên tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật.",
      "Trình bày danh mục tài liệu tham khảo chuyên nghiệp theo chuẩn Harvard."
    ],
    requirements: [
      "Chọn một chủ đề nghiên cứu cụ thể liên quan đến ngành học Công nghệ thông tin.",
      "Thực hiện tìm kiếm từ các nguồn: CSDL học thuật (Google Scholar), tạp chí khoa học, sách chuyên khảo và nguồn mở internet.",
      "Thu thập ít nhất 10 tài liệu tham khảo liên quan (bao gồm ít nhất 5 bài báo khoa học chất lượng).",
      "Đánh giá độ tin cậy của mỗi nguồn dựa trên 5 tiêu chí: tác giả, nhà xuất bản, phương pháp, trích dẫn, tính cập nhật.",
      "Lập bảng tổng hợp các nguồn thông tin kèm đánh giá và xếp hạng độ tin cậy chi tiết."
    ],
    submissionFormat: "Báo cáo nghiên cứu (3-4 trang) kèm bảng tổng hợp và danh mục tài liệu tham khảo theo định dạng Harvard.",
    process: `<p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Quá trình thực hành nghiên cứu được triển khai chặt chẽ qua 3 giai đoạn cốt lõi:</p><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">1. XÁC ĐỊNH CHỦ ĐỀ & PHẠM VI TÌM KIẾM:</h3><ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Chủ đề nghiên cứu:</strong> Ứng dụng Mô hình Ngôn ngữ Lớn (LLMs) trong Kỹ thuật Phần mềm (Software Engineering - SE).</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Lý do chọn đề tài:</strong> Bối cảnh bùng nổ của LLMs (GPT-4, Codex, Code Llama...) trong sinh mã, kiểm thử và sửa lỗi tự động. Khảo sát Stack Overflow 2025 chỉ ra &gt;80% lập trình viên đã sử dụng các công cụ AI, nhưng chỉ có 29% hoàn toàn tin tưởng vào kết quả đầu ra. Điều này đặt ra yêu cầu cấp thiết về việc đánh giá học thuật nghiêm túc.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Phạm vi tìm kiếm:</strong> Tập trung vào 5 khía cạnh: Kiến trúc Transformer, Sinh mã tự động (Code Generation), Kiểm thử/Sửa lỗi tự động (Automated Program Repair), Đánh giá hiệu năng thực tế (SWE-bench), và các khảo sát tổng quan hệ thống (SLR). Phạm vi thời gian: 2016 - 2025.</li></ul><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">2. CHIẾN LƯỢC TÌM KIẾM & THU THẬP TÀI LIỆU:</h3><ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Công cụ tìm kiếm:</strong> Google Scholar, Semantic Scholar, IEEE Xplore, ACM Digital Library, arXiv preprints, GitHub.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Chiến lược từ khóa & toán tử:</strong> Sử dụng từ khóa tiếng Anh ('Large Language Models', 'Software Engineering', 'Code Generation', 'Automated Program Repair', 'Transformer', 'Code LLM', 'Software Testing with LLM') kết hợp toán tử AND, OR, và site: (ví dụ: site:arxiv.org OR site:ieee.org).</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Phương pháp Snowballing:</strong> Từ các bài survey tổng quan đầu ngành để truy ngược lại các bài báo gốc có giá trị trích dẫn cao.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Kết quả thu thập:</strong> Thu thập tổng cộng 12 tài liệu chất lượng cao (7 bài báo khoa học hàng đầu đăng trên NeurIPS, ICLR, ICSE, ISSTA, ACM TOSEM, IEEE TSE; 1 benchmark SWE-bench; 1 preprint; 3 sách chuyên khảo từ MIT Press, Pearson, Stanford University Press).</li></ul><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">3. ĐÁNH GIÁ ĐỘ TIN CẬY & PHÂN TÍCH:</h3><p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Từng tài liệu được phản biện và đánh giá độc lập dựa trên 5 tiêu chí chuẩn hóa (thang điểm 1-5 mỗi tiêu chí, tối đa 25 điểm):</p><ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tác giả:</strong> uy tín khoa học</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Cơ quan xuất bản:</strong> nhà xuất bản danh tiếng, hội nghị/tạp chí hạng A*/Q1</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Phương pháp nghiên cứu:</strong> thực nghiệm chặt chẽ, số liệu rõ ràng</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Số lượng trích dẫn:</strong> độ ảnh hưởng trong cộng đồng khoa học</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tính cập nhật:</strong> mức độ bám sát tốc độ bùng nổ của AI</li></ul><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">BẢNG TỔNG HỢP ĐÁNH GIÁ ĐỘ TIN CẬY TÀI LIỆU:</h3><div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs"><table class="w-full text-left border-collapse bg-white"><thead><tr class="bg-slate-50/80 border-b border-slate-200"><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">STT</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Tài liệu tham khảo</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">T.Giả</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">CQXB</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">P.Pháp</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">T.Dẫn</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">C.Nhật</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Tổng</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Xếp hạng</th></tr></thead><tbody class="divide-y divide-slate-100"><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">1</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Vaswani et al. (2017) [10]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">3</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">23</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">2</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Chen et al. (2021) [1]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">23</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">3</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Hou et al. (2024) [4]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">24</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Fan et al. (2023) [2]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">23</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Wang et al. (2024) [11]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">24</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">6</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Jimenez et al. (2024) [5]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">24</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">7</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Xia &amp; Zhang (2024) [12]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">3</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">22</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">8</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Nijkamp et al. (2023) [7]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">21</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">9</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Peng et al. (2023) [8]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">20</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">10</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Goodfellow et al. (2016) [3]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">2</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">22</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">11</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Russell &amp; Norvig (2021) [9]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">3</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">23</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">12</td><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Jurafsky &amp; Martin (2025) [6]</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">5</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">24</td><td class="px-4 py-3 text-xs sm:text-sm text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Rất cao</span></td></tr></tbody></table></div><p class="text-xs sm:text-sm text-slate-500 italic my-2">Thang xếp hạng: Rất cao (23-25đ) | Cao (20-22đ) | Trung bình (15-19đ) | Thấp (&lt;15đ).</p><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">4. XU HƯỚNG NGHIÊN CỨU CHÍNH &amp; ĐÚC KẾT:</h3><ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Chuyển dịch sang Tác tử Tự động (Agentic AI):</strong> Thay vì xử lý sinh mã thụ động, các nghiên cứu mới đang xây dựng hệ thống AI chủ động lập kế hoạch, sử dụng linh hoạt các công cụ rà soát mã nguồn trong môi trường tương tác đa chiều.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Khoảng trống kỳ vọng và thực tế:</strong> Hệ thống benchmark SWE-bench chỉ ra rằng AI tiên tiến nhất hiện nay mới chỉ giải quyết thành công khoảng 26% các lỗi thực tế (GitHub Issues) trong các dự án nguồn mở lớn.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Kỷ luật sản xuất code:</strong> Tập trung mạnh mẽ vào tự động hóa sinh 'Test Cases' chất lượng cao theo ngữ cảnh để kiểm chứng mã do LLMs viết, giảm thiểu ruiu ro sinh mã lỗi.</li></ul><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">DANH MỤC TÀI LIỆU THAM KHẢO CHUẨN HARVARD:</h3><ol class="list-decimal pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light"><li class="leading-relaxed">Chen, M., et al. (2021) 'Evaluating Large Language Models Trained on Code', arXiv preprint, arXiv:2107.03374.</li><li class="leading-relaxed">Fan, A., et al. (2023) 'Large Language Models for Software Engineering: Survey and Open Problems', ICSE-FoSE 2023, pp. 31-53.</li><li class="leading-relaxed">Goodfellow, I., Bengio, Y. and Courville, A. (2016) Deep Learning. MIT Press.</li><li class="leading-relaxed">Hou, X., et al. (2024) 'Large Language Models for Software Engineering: A Systematic Literature Review', ACM Transactions on Software Engineering and Methodology, 33(8).</li><li class="leading-relaxed">Jimenez, C.E., et al. (2024) 'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?', ICLR 2024.</li><li class="leading-relaxed">Jurafsky, D. and Martin, J.H. (2025) Speech and Language Processing. Stanford University (Draft 2026).</li><li class="leading-relaxed">Nijkamp, E., et al. (2023) 'CodeGen: An Open Large Language Model for Code with Multi-Turn Program Synthesis', ICLR 2023.</li><li class="leading-relaxed">Peng, S., et al. (2023) 'The Impact of AI on Developer Productivity: Evidence from GitHub Copilot', arXiv preprint, arXiv:2302.06590.</li><li class="leading-relaxed">Russell, S.J. and Norvig, P. (2021) Artificial Intelligence: A Modern Approach. 4th edn. Pearson.</li><li class="leading-relaxed">Vaswani, A., et al. (2017) 'Attention Is All You Need', NeurIPS 2017, pp. 5998-6008.</li><li class="leading-relaxed">Wang, J., et al. (2024) 'Software Testing with Large Language Models: Survey, Landscape, and Vision', IEEE Transactions on Software Engineering, 50(4), pp. 911-936.</li><li class="leading-relaxed">Xia, C.S. and Zhang, L. (2024) 'Automated Program Repair via Conversation', ISSTA 2024.</li></ol>`,
    resultType: "Báo cáo học thuật & Bảng đánh giá tài liệu tham khảo",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfUrl: "/files/tmpy46uhw_ta_huu_cuong_25020053_tim_kiem_va_danh_gia_thong_tin_hoc_thuat.pdf",
    tools: ["Google Scholar", "Microsoft Academic", "Zotero / Mendeley", "Harvard Referencing Style"]
  },
  {
    id: "bai-3-tong-quan-ve-tri-tue-nhan-tao",
    title: "Bài 3: Tổng quan về trí tuệ nhân tạo",
    shortDescription: "Phát triển kỹ năng Prompt Engineering để tối ưu hóa khả năng của LLMs trong các tác vụ học tập thực tế.",
    fullDescription: "Bài tập nghiên cứu sâu sắc về cách viết câu lệnh (prompt) hiệu quả cho các mô hình ngôn ngữ lớn (LLMs). Thực hiện so sánh hiệu quả giữa Prompt cơ bản, Prompt cải tiến và Prompt nâng cao (Role Prompting, Chain-of-Thought, Few-Shot) đối với các nhiệm vụ học tập thực tế.",
    objectives: [
      "Thấu hiểu tầm quan trọng của ngữ cảnh và cấu trúc khi giao tiếp với mô hình AI tạo sinh.",
      "Áp dụng thành thạo các kỹ thuật prompt nâng cao: Role Prompting, Chain-of-Thought và Few-Shot.",
      "Phân tích, đánh giá phản hồi từ AI để rút ra nguyên lý viết prompt tối ưu phục vụ học tập."
    ],
    requirements: [
      "Chọn 3 tác vụ học tập: Tóm tắt tài liệu học thuật, Giải thích khái niệm phức tạp, Tạo bộ câu hỏi ôn tập.",
      "Xây dựng 3 phiên bản prompt cho mỗi tác vụ: Prompt cơ bản, Prompt cải tiến, Prompt nâng cao.",
      "Thử nghiệm các prompt trên công cụ AI (như ChatGPT/Gemini) và thu thập kết quả phản hồi.",
      "So sánh, đối chiếu và phân tích lý do tại sao một số prompt đem lại kết quả vượt trội.",
      "Tổng hợp các nguyên tắc cốt lõi và mẹo viết prompt hiệu quả từ kết quả thử nghiệm thực tế."
    ],
    submissionFormat: "Báo cáo phân tích (3-4 trang) kèm bảng so sánh trực quan các prompt, kết quả và ảnh chụp màn hình minh chứng.",
    process: `<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">I. PHÂN TÍCH TÁC VỤ HỌC TẬP</h3><h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">1.1 Ba tác vụ được lựa chọn và lý do</h4><p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Mỗi tác vụ được chọn đại diện cho một loại hình tư duy học tập khác nhau, từ tiếp nhận, xử lý đến kiểm tra kiến thức — tạo thành vòng lặp học tập hoàn chỉnh.</p><p class="text-sm sm:text-base text-slate-700 font-semibold mt-4 mb-1">Tác vụ 1 - Tóm tắt bài đọc/tài liệu học thuật</p><ul class="list-disc pl-5 space-y-2 my-2 text-slate-600 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Mục tiêu:</strong> Rút gọn thông tin dài thành ý chính, tiết kiệm thời gian đọc.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Thách thức:</strong> Nếu prompt không rõ, AI có thể tóm tắt quá chung chung, bỏ sót luận điểm cốt lõi, hoặc không phù hợp với mục đích sử dụng (ôn thi vs. thuyết trình).</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Yêu cầu cụ thể:</strong> Xác định đối tượng đọc, độ dài mong muốn, định dạng đầu ra (gạch đầu dòng hay đoạn văn).</li></ul><p class="text-sm sm:text-base text-slate-700 font-semibold mt-4 mb-1">Tác vụ 2 - Giải thích một khái niệm phức tạp</p><ul class="list-disc pl-5 space-y-2 my-2 text-slate-600 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Mục tiêu:</strong> Biến đổi kiến thức trừu tượng thành ngôn ngữ dễ hiểu, phù hợp với trình độ người học.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Thách thức:</strong> AI không biết nền tảng kiến thức của người học, dễ giải thích quá sâu hoặc quá nông, thiếu ví dụ thực tiễn.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Yêu cầu cụ thể:</strong> Xác định trình độ người học, yêu cầu ví dụ minh họa, sử dụng phép so sánh (analogy).</li></ul><p class="text-sm sm:text-base text-slate-700 font-semibold mt-4 mb-1">Tác vụ 3 - Tạo bộ câu hỏi ôn tập cho một chủ đề</p><ul class="list-disc pl-5 space-y-2 my-2 text-slate-600 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Mục tiêu:</strong> Kiểm tra mức độ hiểu bài, củng cố kiến thức qua tự vấn.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Thách thức:</strong> Nếu không có hướng dẫn, AI thường tạo câu hỏi quá dễ, thiếu đa dạng cấp độ tư duy (theo thang Bloom), hoặc không có đáp án.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Yêu cầu cụ thể:</strong> Phân bổ cấp độ (nhận biết, hiểu, vận dụng, phân tích), định dạng câu hỏi (trắc nghiệm, tự luận), yêu cầu đáp án.</li></ul><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">II. XÂY DỰNG CÁC PHIÊN BẢN PROMPT</h3><h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">2.1 Tác vụ 1: Tóm tắt tài liệu học thuật</h4><p class="text-xs sm:text-sm text-slate-500 italic my-1">(Chủ đề sử dụng để thử nghiệm: Bài báo về Biến đổi khí hậu và tác động đến Việt Nam)</p><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Cơ Bản (Basic):</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Tóm tắt bài viết sau: [Nội dung bài đọc]"</div><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Cải Tiến (Improved):</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Hãy tóm tắt bài viết học thuật dưới đây theo các yêu cầu:
- Độ dài: 150–200 từ
- Trình bày theo 3 phần: (1) Vấn đề chính, (2) Các luận điểm/bằng chứng quan trọng, (3) Kết luận
- Sử dụng ngôn ngữ học thuật, dễ hiểu cho sinh viên đại học

[Nội dung bài đọc]"</div><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Nâng Cao (Advanced) — Role Prompting + Chain-of-Thought:</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Bạn là một trợ lý học thuật chuyên hỗ trợ sinh viên đại học đọc hiểu tài liệu nghiên cứu.
Hãy thực hiện TỪNG BƯỚC sau khi đọc bài viết phía dưới:
Bước 1: Xác định luận điểm chính (thesis) của tác giả.
Bước 2: Liệt kê 3–4 bằng chứng/dữ liệu quan trọng hỗ trợ luận điểm.
Bước 3: Nêu hạn chế hoặc vấn đề còn bỏ ngỏ (nếu có).
Bước 4: Viết đoạn tóm tắt 150 từ tích hợp tất cả thông tin trên.

Định dạng đầu ra: Sử dụng tiêu đề in đậm cho mỗi bước. Đối tượng đọc: sinh viên năm 2 ngành Khoa học Môi trường.

[Nội dung bài đọc]"</div><h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2.2 Tác vụ 2: Giải thích khái niệm phức tạp</h4><p class="text-xs sm:text-sm text-slate-500 italic my-1">(Khái niệm sử dụng để thử nghiệm: Entropy trong nhiệt động lực học)</p><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Cơ Bản (Basic):</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Giải thích entropy là gì."</div><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Cải Tiến (Improved):</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Giải thích khái niệm 'entropy' trong nhiệt động lực học cho sinh viên năm nhất đại học (đã học Vật lý phổ thông nhưng chưa học nhiệt động lực học nâng cao). Yêu cầu:
- Định nghĩa rõ ràng và ngắn gọn
- Ít nhất 1 ví dụ thực tế trong cuộc sống
- Giải thích ý nghĩa của 'entropy tăng' nghĩa là gì"</div><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Nâng Cao (Advanced) — Role Prompting + Few-Shot + Chain-of-Thought:</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Bạn là giáo viên Vật lý giỏi nhất, nổi tiếng với khả năng giải thích các khái niệm trừu tượng bằng ngôn ngữ đời thường và ví dụ sáng tạo.
Dưới đây là ví dụ về cách bạn thường giải thích:
Ví dụ 1 – Giải thích \"quán tính\": \"Hãy tưởng tượng bạn đang ngồi xe buýt. Khi xe phanh đột ngột, người bạn lao về phía trước — đó chính là quán tính: vật muốn giữ nguyên trạng thái chuyển động của mình.\"
Ví dụ 2 – Giải thích \"điện trở\": \"Điện trở giống như đường ống nước bị thu hẹp — nước (điện) chảy qua khó hơn, áp lực (điện áp) cần lớn hơn.\"

Bây giờ hãy giải thích khái niệm \"entropy\" theo đúng phong cách trên, thực hiện từng bước:
Bước 1: Đưa ra định nghĩa kỹ thuật chính xác (1–2 câu)
Bước 2: Dùng 1 phép so sánh (analogy) đời thường để minh họa
Bước 3: Cho 2 ví dụ thực tế (1 trong cuộc sống, 1 trong khoa học)
Bước 4: Giải thích tại sao \"entropy của vũ trụ luôn tăng\" lại quan trọng

Đối tượng: Học sinh lớp 12 chuẩn bị thi đại học."</div><h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2.3 Tác vụ 3: Tạo bộ câu hỏi ôn tập</h4><p class="text-xs sm:text-sm text-slate-500 italic my-1">(Chủ đề sử dụng để thử nghiệm: Quang hợp - Sinh học lớp 11)</p><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Cơ Bản (Basic):</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Tạo câu hỏi ôn tập về quang hợp."</div><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Cải Tiến (Improved):</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Hãy tạo 10 câu hỏi ôn tập về chủ đề 'Quang hợp' trong chương trình Sinh học lớp 11. Yêu cầu:
- 5 câu hỏi trắc nghiệm (4 đáp án A/B/C/D)
- 3 câu hỏi tự luận ngắn
- 2 câu hỏi vận dụng thực tế
- Kèm đáp án gợi ý cho mỗi câu"</div><p class="text-sm sm:text-base text-slate-700 font-medium mt-3 mb-1">Prompt Nâng Cao (Advanced) — Role Prompting + Thang Bloom + Few-Shot:</p><div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Bạn là một giáo viên Sinh học THPT với 15 năm kinh nghiệm ra đề thi học sinh giỏi và đề ôn thi tốt nghiệp.
Nhiệm vụ: Tạo bộ 12 câu hỏi ôn tập toàn diện về chủ đề 'Quang hợp' (Sinh học 11), phân bổ theo thang Bloom như sau:
- Nhận biết (Remember): 2 câu trắc nghiệm — Ví dụ mẫu: 'Sắc tố nào hấp thụ ánh sáng chủ yếu trong pha sáng?'
- Hiểu (Understand): 2 câu trắc nghiệm + 1 câu tự luận ngắn — Ví dụ mẫu: 'Tại sao cây cần CO₂ trong quá trình quang hợp?'
- Vận dụng (Apply): 2 câu tình huống thực tế — Ví dụ mẫu: 'Nếu trồng cây trong nhà kính thiếu ánh sáng đỏ, điều gì xảy ra?'
- Phân tích (Analyze): 2 câu so sánh/phân tích
- Đánh giá (Evaluate): 1 câu luận điểm mở

Định dạng mỗi câu: [Số thứ tự] [Cấp độ Bloom] [Nội dung câu hỏi] -> [Đáp án + Giải thích ngắn]
Đảm bảo câu hỏi bao phủ: pha sáng, pha tối (chu trình Calvin), các yếu tố ảnh hưởng, và ứng dụng thực tiễn."</div><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">III. KẾT QUẢ THỬ NGHIỆM CÁC PROMPT VÀ MINH CHỨNG</h3><p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Kết quả ghi nhận sau khi thử nghiệm thực tế trên Google Gemini, phiên bản nằm trong gói trả phí Google AI Pro, bật chế độ Suy luận nâng cao (CoT) để có kết quả tốt nhất.</p><h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-4 mb-2">3.1. Tác vụ số 1: Tóm tắt tài liệu học thuật</h4><div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs"><table class="w-full text-left border-collapse bg-white"><thead><tr class="bg-slate-50/80 border-b border-slate-200"><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Tiêu chí đánh giá</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Cơ Bản</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Cải Tiến</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Nâng Cao</th></tr></thead><tbody class="divide-y divide-slate-100"><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Độ chính xác nội dung</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Trung bình — đúng nhưng thiếu chiều sâu</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Tốt — đúng trọng tâm</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Rất tốt — toàn diện</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Cấu trúc đầu ra</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Không có cấu trúc rõ ràng</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Có cấu trúc theo yêu cầu</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Cấu trúc rõ ràng, phân cấp logic</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Phù hợp đối tượng</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Không xác định</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Phù hợp một phần</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Phù hợp chính xác trình độ yêu cầu</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Tính sử dụng được ngay</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Thấp — cần chỉnh sửa nhiều</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Trung bình — cần chỉnh nhỏ</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Cao — dùng được gần như trực tiếp</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Tính sáng tạo/phong phú</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Thấp</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Trung bình</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Cao — có ví dụ, phân cấp, giải thích</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Thời gian chỉnh sửa</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">~10 phút</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">~3–5 phút</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">&lt; 1 phút</td></tr></tbody></table></div><h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-5 mb-2">3.2. Tác vụ số 2: Giải thích khái niệm phức tạp</h4><div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs"><table class="w-full text-left border-collapse bg-white"><thead><tr class="bg-slate-50/80 border-b border-slate-200"><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Tiêu chí đánh giá</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Cơ Bản</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Cải Tiến</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Nâng Cao</th></tr></thead><tbody class="divide-y divide-slate-100"><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Độ đơn giản hóa / Dễ hiểu</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Giải thích lý thuyết, khô khan, còn giữ nhiều thuật ngữ chuyên ngành.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Đơn giản hóa tốt, ngôn ngữ thân thiện, dễ tiếp cận hơn.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Cực kỳ dễ hiểu, biến khái niệm trừu tượng thành hữu hình nhờ văn phong chuyên gia.</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Sử dụng phép so sánh / Ví dụ</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Không có hoặc giải thích rất chung chung.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Có 1 ví dụ minh họa cơ bản trong đời sống.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Sử dụng phép so sánh (analogy) sáng tạo, độc đáo theo ví dụ mẫu (Few-shot).</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Cấu trúc đầu ra</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Khối văn bản dài, không phân chia thông tin rõ ràng.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Có cấu trúc các ý chính (Định nghĩa, ví dụ, ý nghĩa).</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Phân cấp logic chặt chẽ theo từng bước (CoT), dẫn dắt từ dễ đến khó.</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Mức độ phù hợp đối tượng</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Không xác định (mặc định AI trả lời ở mức độ học thuật chung).</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Phù hợp đúng yêu cầu (sinh viên năm nhất chưa học chuyên sâu).</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Tùy chỉnh hoàn hảo, đúng tâm lý và trình độ học sinh lớp 12.</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Tính ứng dụng và sử dụng ngay</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Thấp — người đọc cần tự tra cứu thêm thuật ngữ để hiểu.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Trung bình — nắm được bản chất nhưng thiếu tính liên hệ.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Rất cao — liên hệ sâu sắc khoa học với thực tế, người đọc hiểu ngay lập tức.</td></tr></tbody></table></div><h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-5 mb-2">3.3. Tác vụ số 3: Tạo bộ câu hỏi ôn tập</h4><div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs"><table class="w-full text-left border-collapse bg-white"><thead><tr class="bg-slate-50/80 border-b border-slate-200"><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Tiêu chí đánh giá</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Cơ Bản</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Cải Tiến</th><th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Prompt Nâng Cao</th></tr></thead><tbody class="divide-y divide-slate-100"><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Đa dạng cấp độ tư duy</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Chủ yếu ở mức độ Nhận biết, hỏi các định nghĩa máy móc.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Có phân hóa cơ bản (Trắc nghiệm, tự luận ngắn, vận dụng).</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Phân bổ chính xác và đa dạng theo Thang đo Bloom (từ Nhận biết đến Đánh giá).</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Độ bao phủ kiến thức</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Ngẫu nhiên, dễ bị thiếu sót các nội dung cốt lõi.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Khá đầy đủ theo số lượng yêu cầu nhưng thiếu định hướng trọng tâm.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Toàn diện, bám sát các ý chính theo yêu cầu (pha sáng, pha tối, chu trình Calvin).</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Cấu trúc và Định dạng</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Lộn xộn, không thống nhất giữa các câu hỏi.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Trình bày rõ ràng theo từng loại câu hỏi được chỉ định.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Chuyên nghiệp, có gắn nhãn cấp độ Bloom và phân loại cho từng câu.</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Chất lượng đáp án / Giải thích</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Không có đáp án hoặc chỉ cung cấp đáp án đúng trần trụi.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Có kèm đáp án gợi ý cơ bản cho người học.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Cung cấp đáp án chi tiết kèm giải thích cặn kẽ tại sao đúng (rất tốt cho tự học).</td></tr><tr class="hover:bg-slate-50/30 transition-colors"><td class="px-4 py-3 text-xs sm:text-sm font-medium text-slate-800 text-left">Khả năng sử dụng ngay</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Thấp — cần biên tập lại nội dung và tự soạn thêm đáp án.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Trung bình — dùng được cho các bài tập về nhà hoặc kiểm tra nhanh.</td><td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">Rất cao — chất lượng tương đương đề thi chính thức, dùng được trực tiếp.</td></tr></tbody></table></div><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">IV. PHÂN TÍCH HIỆU QUẢ PROMPT</h3><h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-4 mb-2">4.1 Vì sao Prompt Cơ Bản cho kết quả kém hơn:</h4><p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Prompt cơ bản thiếu ngữ cảnh (context), định dạng đầu ra và đối tượng mục tiêu — ba yếu tố cốt lõi khiến LLM phải đưa ra kết quả "an toàn" nhất có thể, tức là trả lời theo cách phổ quát nhất. Vì AI không biết bạn là ai, mục đích là gì, nó sẽ tối ưu cho "trung bình cộng" thay vì nhu cầu cụ thể của bạn.</p><h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-4 mb-2">4.2 Vì sao Prompt Cải Tiến hiệu quả hơn:</h4><p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Prompt cải tiến áp dụng nguyên tắc TASK + CONTEXT + FORMAT: xác định rõ nhiệm vụ, cung cấp ngữ cảnh (trình độ người học, chủ đề), và quy định định dạng đầu ra. Điều này thu hẹp không gian tìm kiếm của mô hình, giúp nó tập trung vào đúng hướng cần thiết thay vì đoán mò.</p><h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-4 mb-2">4.3 Vì sao Prompt Nâng Cao vượt trội:</h4><p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Prompt nâng cao kết hợp ba kỹ thuật mạnh mẽ:</p><ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Role Prompting:</strong> Giao vai trò chuyên gia cho AI (giáo viên, trợ lý học thuật) kích hoạt "chế độ" phù hợp trong mô hình, tạo ra văn phong, cách lập luận và mức độ chi tiết tương xứng với vai trò đó.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Chain-of-Thought (CoT):</strong> Yêu cầu AI thực hiện từng bước rõ ràng ("Bước 1… Bước 2…") buộc mô hình phải lý luận có cấu trúc thay vì trả lời tức thì. Nghiên cứu của Wei et al. (2022) chứng minh CoT cải thiện đáng kể chất lượng đầu ra cho các tác vụ phức tạp.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Few-Shot Examples:</strong> Cung cấp 2–3 ví dụ mẫu giúp mô hình "học ngay trong ngữ cảnh" (in-context learning) — nắm được phong cách, định dạng và mức độ chi tiết mong muốn mà không cần huấn luyện lại.</li></ul><h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">V. TỔNG HỢP NGUYÊN TẮC VIẾT PROMPT HIỆU QUẢ</h3><p class="text-sm sm:text-base text-slate-600 leading-relaxed my-3 font-light">Dựa trên kết quả thực nghiệm trên 9 prompt với 3 tác vụ học tập, có thể rút ra 6 nguyên tắc cốt lõi:</p><ol class="list-decimal pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light"><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Xác định rõ nhiệm vụ (Task Clarity):</strong> Nói chính xác bạn muốn AI làm gì, không phải hỏi gì. "Tóm tắt bài này" ≠ "Tóm tắt bài này thành 5 gạch đầu dòng cho sinh viên năm nhất". Sự khác biệt về độ cụ thể tạo ra chênh lệch lớn trong kết quả.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Cung cấp ngữ cảnh đầy đủ (Context):</strong> Luôn khai báo: đối tượng sử dụng, mục đích, và bối cảnh. LLM tối ưu hóa câu trả lời dựa trên ngữ cảnh được cung cấp — càng nhiều thông tin liên quan, càng ít "đoán mò".</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Quy định định dạng đầu ra (Output Format):</strong> Chỉ định rõ: độ dài, cấu trúc (đoạn văn/gạch đầu dòng/bảng), ngôn ngữ, và tiêu đề. Điều này loại bỏ sự mơ hồ về hình thức, giúp kết quả sử dụng được ngay.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Giao vai trò chuyên gia (Role Prompting):</strong> Bắt đầu prompt bằng "Bạn là [vai trò]" thiết lập "chế độ tư duy" cho AI. Một giáo viên, một nhà khoa học, hay một chuyên gia tư vấn sẽ trả lời với phong cách và chiều sâu khác nhau.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Yêu cầu lý luận từng bước (Chain-of-Thought):</strong> Với các tác vụ phức tạp, luôn yêu cầu "thực hiện từng bước" hoặc "giải thích lý do". Điều này không chỉ cải thiện chất lượng mà còn giúp bạn dễ kiểm tra và sửa sai.</li><li class="leading-relaxed"><strong class="text-slate-800 font-medium">Cho ví dụ mẫu (Few-Shot):</strong> Khi muốn một phong cách hoặc định dạng cụ thể, đừng chỉ mô tả — hãy cho xem. 2–3 ví dụ mẫu hiệu quả hơn 2–3 đoạn mô tả dài.</li></ol><p class="text-sm sm:text-base text-slate-700 font-semibold my-4">Công thức tổng hợp: Prompt hiệu quả = Vai trò (Role) + Nhiệm vụ rõ (Task) + Ngữ cảnh đủ (Context) + Bước thực hiện (CoT) + Ví dụ mẫu (Few-Shot) + Định dạng đầu ra (Format)</p>`,
    resultType: "Báo cáo phân tích Prompt & Bộ câu lệnh mẫu",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfUrl: "/files/tmpudcfmq_bao-cao-luyen-tap-prompt-ai_25020053_ta-huu-cuong.pdf",
    tools: ["ChatGPT", "Google Gemini", "Claude AI", "Prompt Engineering"],
    steps: [
      {
        title: "Tác vụ 1 - Prompt cơ bản",
        desc: "Thử nghiệm tóm tắt tài liệu học thuật với câu lệnh cơ bản: chỉ đưa ra yêu cầu tóm tắt chung chung mà không thiết lập ngữ cảnh hay cấu trúc.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0000.jpg"
      },
      {
        title: "Tác vụ 1 - Prompt cải tiến",
        desc: "Thực hiện tóm tắt với câu lệnh cải tiến: bổ sung yêu cầu về độ dài (150-200 từ), phân bổ cấu trúc 3 phần rõ ràng và định hình đối tượng người học.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0001.jpg"
      },
      {
        title: "Tác vụ 1 - Prompt nâng cao",
        desc: "Áp dụng kỹ thuật nâng cao Role Prompting (Trợ lý học thuật) kết hợp với Chain-of-Thought từng bước lập luận rõ ràng để đạt được bản tóm tắt học thuật hoàn hảo.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0002.jpg"
      },
      {
        title: "Tác vụ 2 - Prompt cơ bản",
        desc: "Yêu cầu giải thích khái niệm Entropy bằng câu lệnh cơ bản đơn giản, kết quả trả về khô khan, lý thuyết và chứa nhiều thuật ngữ chuyên ngành khó hiểu.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0003.jpg"
      },
      {
        title: "Tác vụ 2 - Prompt cải tiến",
        desc: "Cải tiến câu lệnh giải thích Entropy bằng cách quy định rõ đối tượng (sinh viên năm nhất), yêu cầu ví dụ đời sống thực tế và giải thích ý nghĩa hiện tượng.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0004.jpg"
      },
      {
        title: "Tác vụ 2 - Prompt nâng cao",
        desc: "Sử dụng Role Prompting (Giáo viên Vật lý xuất sắc), Few-Shot Examples (cung cấp 2 ví dụ mẫu) và Chain-of-Thought để giải thích Entropy một cách sinh động, trực quan.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0005.jpg"
      },
      {
        title: "Tác vụ 3 - Prompt cơ bản",
        desc: "Yêu cầu tạo bộ câu hỏi ôn tập Sinh học lớp 11 bằng câu lệnh cơ bản, nhận lại danh sách câu hỏi đơn giản, đơn điệu và không kèm đáp án.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0006.jpg"
      },
      {
        title: "Tác vụ 3 - Prompt cải tiến",
        desc: "Yêu cầu tạo bộ câu hỏi có định lượng cụ thể (5 câu trắc nghiệm, 3 tự luận, 2 vận dụng) kèm đáp án gợi ý cơ bản.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0007.jpg"
      },
      {
        title: "Tác vụ 3 - Prompt nâng cao",
        desc: "Thiết lập vai trò giáo viên 15 năm kinh nghiệm, phân bổ câu hỏi chính xác theo các cấp độ nhận thức của thang đo Bloom và đính kèm lời giải thích cặn kẽ.",
        image: "/files/bai3/46e45f73-0143-4e0e-b972-b3e7a85de458-0008.jpg"
      }
    ]
  },
  {
    id: "bai-4-giao-tiep-va-hop-tac-trong-moi-truong-so",
    title: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
    shortDescription: "Thành thạo việc sử dụng các công cụ cộng tác trực tuyến và thể hiện năng lực điều phối, quản lý cá nhân trong dự án nhóm.",
    fullDescription: "Bài tập tập trung vào việc thiết lập và vận hành các công cụ cộng tác trực tuyến phục vụ cho dự án nhóm, trong đó cá nhân tự quản lý công việc của mình một cách khoa học trên Trello, đóng góp nội dung trên Docs, tương tác trên Discord và ghi lại nhật ký minh chứng chứa thông tin tài khoản cá nhân.",
    objectives: [
      "Sử dụng thành thạo ít nhất 3 công cụ cộng tác trực tuyến trong quản lý, soạn thảo, lưu trữ và giao tiếp.",
      "Nâng cao kỹ năng tự lập kế hoạch, quản lý danh sách nhiệm vụ và theo dõi tiến độ cá nhân.",
      "Rèn luyện kỹ năng làm việc nhóm trực tuyến và ghi nhận lịch sử đóng góp dữ liệu minh bạch."
    ],
    requirements: [
      "Tham gia thiết lập/sử dụng ít nhất 3 công cụ từ các nhóm: Quản lý dự án (Trello/Asana), Soạn thảo (Google Docs), Lưu trữ (Google Drive/OneDrive), Giao tiếp (Slack/Discord/Teams).",
      "Cá nhân tự quản lý danh sách nhiệm vụ được giao trên công cụ quản lý dự án.",
      "Đóng góp nội dung trực tiếp trên tài liệu soạn thảo chung với lịch sử chỉnh sửa rõ ràng.",
      "Tương tác, thảo luận chủ động với các thành viên khác trên công cụ giao tiếp.",
      "Tổ chức, phân loại và lưu trữ các tệp tin cá nhân phụ trách một cách khoa học.",
      "Ghi lại nhật ký minh chứng (ảnh chụp màn hình) thể hiện rõ tên tài khoản và phần đóng góp cá nhân."
    ],
    submissionFormat: "Báo cáo cá nhân (4-5 trang) mô tả chi tiết tác vụ, phân tích hiệu quả công cụ, đính kèm ảnh minh chứng chứa thông tin tài khoản cá nhân.",
    process: `<div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Họ và tên</p>
      <p class="text-sm sm:text-base text-slate-800 font-medium">Tạ Hữu Cường (25020053)</p>
    </div>
    <div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Lớp & Đơn vị</p>
      <p class="text-sm sm:text-base text-slate-800 font-medium">K70I-IT1 • Khoa CNTT, Trường Đại học Công nghệ (UET)</p>
    </div>
    <div class="md:col-span-2 mt-2 pt-2 border-t border-slate-100">
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dự án nhóm</p>
      <p class="text-sm sm:text-base text-slate-800 font-bold text-blue-600">Hệ thống quản lý vi phạm học đường thông minh (VioGuard)</p>
    </div>
  </div>
</div>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">I. MỤC TIÊU BÁO CÁO</h3>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Báo cáo này mô tả chi tiết quá trình cá nhân em vận dụng các công cụ công nghệ để quản lý công việc và phối hợp nhóm trong dự án VioGuard. Mục tiêu cụ thể bao gồm:</p>
<ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Minh chứng năng lực công nghệ:</strong> Khả năng thiết lập, làm chủ và điều hành các công cụ quản lý dự án, soạn thảo đồng bộ và giao tiếp nhóm trực tuyến.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Quản lý hiệu quả cá nhân:</strong> Thể hiện kỹ năng quản lý thời gian, bám sát các mốc deadline chặt chẽ và đóng góp nội dung backend chuyên môn một cách xuyên suốt.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Giải quyết bài toán cộng tác:</strong> Phân tích sâu các rào cản và thách thức thực tế trong môi trường làm việc số và đề xuất các giải pháp kỹ thuật, quy trình để tối ưu hóa hiệu năng cộng tác của cả nhóm.</li>
</ul>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">II. THIẾT LẬP HỆ THỐNG CÔNG CỤ CỘNG TÁC</h3>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Trong vai trò là thành viên phụ trách Backend và quản lý tài nguyên, em đã trực tiếp tham gia thiết lập "không gian làm việc số" cho nhóm với 3 nhóm công cụ chính:</p>
<ol class="list-decimal pl-5 space-y-3 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Quản lý dự án (Trello):</strong> Xây dựng bảng công việc theo mô hình Kanban với các luồng trạng thái chuẩn hóa (To Do, In Progress, Review, Done). Giúp theo dõi toàn diện tiến độ của từng nhiệm vụ Backend và Frontend theo thời gian thực.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Giao tiếp và Điều phối (Discord):</strong> Thiết lập máy chủ Discord riêng cho dự án VioGuard, phân chia các kênh (channel) chat theo chức năng chuyên biệt: <code class="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded font-mono text-xs">#tech-stack</code> (trao đổi kỹ thuật), <code class="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded font-mono text-xs">#meeting</code> (lịch họp nhóm), <code class="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded font-mono text-xs">#random</code> (trao đổi tự do) nhằm tối ưu hóa và phân luồng thông tin liên lạc rõ ràng.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Lưu trữ và Soạn thảo (Google Workspace):</strong> Khởi tạo thư mục dùng chung (Shared Drive) trên Google Drive để quản lý tập trung mã nguồn, tài liệu thiết kế. Đồng thời, tận dụng Google Docs để đồng soạn thảo các tài liệu kỹ thuật, SRS và kiến trúc hệ thống.</li>
</ol>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">III. NHẬT KÝ MINH CHỨNG VÀ QUẢN LÝ TÁC VỤ CÁ NHÂN</h3>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">1. Quản lý tiến độ trên Trello</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Em thực hiện quản lý 100% nhiệm vụ backend được giao thông qua các thẻ (cards) trên Trello. Mỗi thẻ đều chứa thông tin mô tả chi tiết, nhãn phân loại mức độ ưu tiên, danh sách công việc con (checklist) và thời hạn hoàn thành rõ ràng.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">trello_board_overview.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 1</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0000.jpg" alt="Toàn cảnh Trello Board" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 1: Ảnh chụp toàn cảnh Trello Board phân chia Kanban của nhóm.</div>
</div>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">trello_card_detail.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 2</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0001.jpg" alt="Chi tiết thẻ Trello" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 2: Chi tiết thẻ tác vụ cá nhân Backend đã hoàn tất.</div>
</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Để đáp ứng tiêu chí cập nhật tiến độ thường xuyên (tần suất &ge; 3 lần/tuần), em liên tục ghi lại lịch sử cập nhật trong mục Activity của thẻ nhiệm vụ, giúp nhóm nắm bắt nhanh trạng thái công việc mà không cần hỏi lại.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">trello_activity_log.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 3</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0002.jpg" alt="Activity Log Trello" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 3: Nhật ký hoạt động chi tiết cập nhật tiến độ công việc Backend trên Trello.</div>
</div>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2. Đóng góp nội dung và tương tác trên tài liệu cộng tác</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Trên Google Docs, em chịu trách nhiệm chính biên soạn chương "Kiến trúc hệ thống và Quy trình xử lý dữ liệu backend". Đồng thời, em thường xuyên sử dụng tính năng bình luận (Comments) và đề xuất (Suggestions) để trực tiếp trao đổi ý kiến chuyên môn với các thành viên khác.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">docs_version_history.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 4</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0003.jpg" alt="Version History Google Docs" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 4: Lịch sử phiên bản (Version History) ghi nhận đóng góp soạn thảo của cá nhân.</div>
</div>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">docs_comments_suggestions.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 5</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0004.jpg" alt="Comments & Suggestions Google Docs" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 5: Các bình luận và đóng góp sửa lỗi trực tiếp trên Google Docs.</div>
</div>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">3. Tương tác nhóm trên Discord</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Để việc hỗ trợ Frontend tích hợp các API diễn ra tức thời, em duy trì hoạt động liên tục trên Discord, cung cấp tài liệu API, log lỗi và phản hồi kỹ thuật nhanh gọn (&ge; 5 lượt tương tác chất lượng trong tuần).</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">discord_tech_channel.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 6</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0005.jpg" alt="Discord Chat Minh Chứng" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 6: Kênh chat kỹ thuật chuyên môn trên Discord ghi nhận tương tác hỗ trợ nhóm.</div>
</div>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">IV. QUẢN LÝ TÀI NGUYÊN VÀ TỆP TIN</h3>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Để toàn bộ thành viên nhóm có thể truy cập tài liệu kỹ thuật Backend một cách có hệ thống, em đã xây dựng cấu trúc cây thư mục phân cấp logic trên Google Drive với 4 cấp rõ ràng:</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">drive_folders_hierarchy.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 7</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0006.jpg" alt="Cấu trúc thư mục Drive" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 7: Cấu trúc thư mục phân cấp 4 cấp khoa học trên Google Drive (VioGuard > 02_Technical_Docs > Backend_API > V1.0).</div>
</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Mọi tệp tài liệu backend do cá nhân em thiết lập đều tuân thủ nghiêm ngặt quy tắc đặt tên: <code class="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded font-mono text-xs">[STT]_[Hạng_mục]_[Tên_người_phụ_trách]_[Ngày]</code>. Đồng thời, em phân bổ quyền chia sẻ chính xác (Chỉ xem đối với Frontend/Design và Quyền chỉnh sửa đối với Trưởng nhóm/Backend Member).</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">drive_share_permissions.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Ảnh 8</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0007.jpg" alt="Quyền chia sẻ tệp tin Google Drive" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Ảnh 8: Giao diện phân quyền chia sẻ tệp tin đảm bảo tính bảo mật và an toàn.</div>
</div>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">V. PHÂN TÍCH HIỆU QUẢ VÀ CÁC THÁCH THỨC</h3>

<h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-4 mb-2">1. Phân tích hiệu quả</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Việc phối hợp nhịp nhàng bộ ba công cụ (Trello - Discord - Google Workspace) đã thiết lập nên một quy trình làm việc khép kín, tối ưu. Trello là "bản đồ" giúp em bám sát deadline công việc. Discord giúp giảm tải hơn 70% các cuộc họp offline không cần thiết thông qua các kênh trao đổi tức thời. Drive và Docs đảm bảo tài nguyên kỹ thuật luôn toàn vẹn, dễ tìm kiếm và có lịch sử đóng góp minh bạch.</p>

<h4 class="text-sm sm:text-base font-semibold text-slate-700 mt-5 mb-2">2. Thách thức và Giải pháp đề xuất</h4>
<ul class="list-disc pl-5 space-y-3 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Thách thức 1: Quá tải thông báo (Information Overload)</strong> - Việc thông báo từ các kênh Discord và hoạt động Trello nhóm liên tục gửi về khiến em dễ bị phân tâm khi đang triển khai lập trình API Backend.
    <br/><span class="text-slate-700 font-medium">&rarr; Giải pháp:</span> Thiết lập chế độ "Do Not Disturb" và cấu hình tắt thông báo không quan trọng. Đồng thời, chỉ định 3 khun giờ cố định trong ngày để kiểm tra và cập nhật tiến độ công việc thay vì kiểm tra liên tục.
  </li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Thách thức 2: Sự lệch pha trong thói quen sử dụng công cụ</strong> - Một số thành viên trong nhóm thiết kế hoặc frontend chưa có thói quen cập nhật trạng thái thẻ Trello thường xuyên.
    <br/><span class="text-slate-700 font-medium">&rarr; Giải pháp:</span> Em đã biên soạn một tài liệu hướng dẫn cộng tác nhanh (mô tả cách ghi hoạt động, kéo thẻ) dài 1 trang và ghim trực tiếp lên Discord chung của nhóm để mọi người cùng tuân thủ.
  </li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Thách thức 3: Xung đột nội dung tài liệu đồng soạn thảo</strong> - Khi có nhiều người cùng chỉnh sửa tệp Google Docs một lúc, các ý tưởng dễ bị trùng lặp hoặc chồng chéo thông tin.
    <br/><span class="text-slate-700 font-medium">&rarr; Giải pháp:</span> Sử dụng tính năng Suggestions thay vì viết đè trực tiếp, kết hợp tra cứu Version History để khôi phục nhanh các bản thảo trước đó. Nhóm cũng quy định mỗi người sử dụng một mã màu chữ riêng biệt khi viết nháp để dễ phân biệt.
  </li>
</ul>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">VI. TỰ ĐÁNH GIÁ</h3>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Đối chiếu với thang đánh giá (Rubric) của bài học, cá nhân em tự đánh giá hoàn thành xuất sắc nhiệm vụ và xứng đáng đạt <strong class="text-blue-600 font-bold">Mức 4 (Xuất sắc)</strong> vì các lý do sau:</p>
<ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tối ưu công cụ:</strong> Sử dụng thành thạo và tối ưu hóa &ge; 3 công cụ cộng tác trực tuyến thiết yếu (Trello, Google Workspace, Discord) phục vụ dự án nhóm.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tính kỷ luật:</strong> Có minh chứng cụ thể về việc tự theo sát deadline và cập nhật tiến độ liên tục (&ge; 3 lần/tuần) cũng như tương tác hỗ trợ đồng đội tích cực (&ge; 10 lượt tương tác hỗ trợ/tuần).</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Quản lý tài nguyên chuẩn hóa:</strong> Cấu trúc thư mục trên Google Drive được phân chia 4 cấp logic, rõ ràng, đặt tên đúng quy chuẩn 100% kèm phân quyền truy cập an toàn.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tư duy phân tích sâu sắc:</strong> Báo cáo phản ánh chân thực các khó khăn cá nhân và đề xuất các giải pháp mang tính thực nghiệm cao.</li>
</ul>`,
    resultType: "Báo cáo cá nhân & Nhật ký minh chứng cộng tác",
    colSpan: 2,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    pdfUrl: "/files/tmpietqku_bao-cao-ca-nhan-hop-tac-nhom-tuan-4---25020053---ta-huu-cuong.pdf",
    tools: ["Trello", "Google Docs", "Google Drive", "Discord"],
    steps: [
      {
        title: "1. Toàn cảnh Trello Board",
        desc: "Ảnh chụp toàn cảnh bảng Trello của nhóm, hiển thị cơ chế phân luồng Kanban (To Do, In Progress, Review, Done).",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0000.jpg"
      },
      {
        title: "2. Chi tiết nhiệm vụ cá nhân",
        desc: "Ảnh chụp chi tiết một thẻ công việc Backend đã hoàn thành, có gán nhãn, phân bổ thời gian và mô tả rõ ràng.",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0001.jpg"
      },
      {
        title: "3. Lịch sử hoạt động (Activity Log)",
        desc: "Ảnh ghi nhận nhật ký cập nhật và báo cáo tiến độ hoạt động (Activity) ít nhất 3 lần/tuần trên Trello.",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0002.jpg"
      },
      {
        title: "4. Lịch sử phiên bản Google Docs",
        desc: "Ảnh chụp Version History minh chứng cho phần đóng góp xây dựng tài liệu kỹ thuật Backend & Quy trình xử lý.",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0003.jpg"
      },
      {
        title: "5. Thảo luận & phản hồi tài liệu",
        desc: "Ảnh chụp các đoạn Comments và Đề xuất trực tiếp trên tài liệu Google Docs trao đổi cùng các thành viên nhóm.",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0004.jpg"
      },
      {
        title: "6. Trao đổi chuyên môn trên Discord",
        desc: "Màn hình kênh chat Discord, minh chứng cho các tương tác điều phối kỹ thuật và tích hợp API hệ thống.",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0005.jpg"
      },
      {
        title: "7. Cấu trúc thư mục Google Drive",
        desc: "Ảnh chụp cấu trúc phân mục 3 cấp khoa học và mạch lạc trên Drive: VioGuard > 02_Technical_Docs > Backend_API > V1.0.",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0006.jpg"
      },
      {
        title: "8. Thiết lập quyền chia sẻ tệp tin",
        desc: "Ảnh chụp cấu hình Share quyền truy cập linh hoạt cho từng đối tượng đối với tài nguyên Backend API.",
        image: "/files/bai4/03cee3ef-99bc-4e81-9e93-709dec33181d-0007.jpg"
      }
    ]
  },
  {
    id: "bai-5-sang-tao-noi-dung-so",
    title: "Bài 5: Sáng tạo nội dung số",
    shortDescription: "Ứng dụng tích hợp các công cụ AI tạo sinh khác nhau để hỗ trợ quá trình sản xuất nội dung số và các ấn phẩm sáng tạo.",
    fullDescription: "Thực hành kết hợp các mô hình Generative AI (văn bản, hình ảnh, thiết kế) để xây dựng một sản phẩm nội dung số hoàn chỉnh. Phân tích vai trò, tiềm năng, giới hạn và các vấn đề đạo đức khi đưa AI vào quy trình sáng tạo.",
    objectives: [
      "Làm chủ tối thiểu 3 công cụ AI tạo sinh hỗ trợ viết nội dung, vẽ tranh và thiết kế đồ họa.",
      "Phát triển kỹ năng biên tập, tích hợp đầu ra của AI với tư duy sáng gia của bản thân.",
      "Nhận thức sâu sắc về vai trò, hạn chế và khía cạnh đạo đức (bản quyền, bias) của AI tạo sinh."
    ],
    requirements: [
      "Chọn một dự án sáng tạo nội dung: Bài thuyết trình, bài viết chuyên sâu, infographic hoặc video ngắn.",
      "Sử dụng ít nhất 3 công cụ AI: Tạo văn bản (ChatGPT/Gemini/Claude), Tạo ảnh (DALL-E/Midjourney/SD), Thiết kế (Canva AI/Adobe Firefly).",
      "Ghi lại chi tiết quá trình sử dụng AI: prompt đã dùng, phản hồi, cách chỉnh sửa và so sánh các công cụ.",
      "Hoàn thiện sản phẩm bằng cách kết hợp đầu ra của AI với đóng góp sáng tạo của riêng bạn.",
      "Viết phân tích về vai trò AI: Điểm mạnh, điểm yếu, thay đổi trong quy trình sáng tạo và vấn đề đạo đức."
    ],
    submissionFormat: "Báo cáo phân tích (4-5 trang) kèm sản phẩm hoàn thiện, ảnh minh chứng quá trình prompt và các phiên bản trung gian.",
    process: `<div class="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Họ và tên</p>
      <p class="text-sm sm:text-base text-slate-800 font-medium">Tạ Hữu Cường (25020053)</p>
    </div>
    <div>
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Lớp học phần</p>
      <p class="text-sm sm:text-base text-slate-800 font-medium">VNU1001_E252014</p>
    </div>
    <div class="md:col-span-2 mt-2 pt-2 border-t border-slate-100">
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dự án</p>
      <p class="text-sm sm:text-base text-slate-800 font-bold text-blue-600">Viết bài blog về chủ đề “AI trong phát triển phần mềm: Xu hướng và ứng dụng thực tiễn” trên trang cá nhân cns-ai.itcuong-dev.io.vn/blog-ai</p>
    </div>
  </div>
</div>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">1. Giới thiệu dự án</h3>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">1.1 Mô tả dự án</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Trong bài tập này, em thực hiện dự án sáng tạo một bài viết (blog post) về chủ đề <strong>“AI trong phát triển phần mềm: Xu hướng và ứng dụng thực tiễn năm 2026”</strong> để đăng trên trang cá nhân <a href="http://cns-ai.itcuong-dev.io.vn/blog-ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">cns-ai.itcuong-dev.io.vn/blog-ai</a>. Bài viết hướng đến đối tượng là các lập trình viên, sinh viên IT và những người quan tâm đến công nghệ AI, nhằm cung cấp góc nhìn tổng quan về cách AI đang thay đổi quy trình phát triển phần mềm hiện đại.</p>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">1.2 Mục tiêu</h4>
<ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed">Tạo ra một bài viết chất lượng cao, có hình ảnh minh họa chuyên nghiệp, sẵn sàng xuất bản trên trang cá nhân.</li>
  <li class="leading-relaxed">Sử dụng kết hợp 4 công cụ AI tạo sinh khác nhau trong toàn bộ quy trình sáng tạo: từ lên ý tưởng, viết nội dung, tạo hình ảnh đến thiết kế bố cục tổng thể.</li>
  <li class="leading-relaxed">Ghi lại chi tiết quá trình sử dụng AI, bao gồm các câu lệnh prompt, kết quả nhận được, và phương pháp tích hợp đầu ra của AI với đóng góp sáng tạo cá nhân.</li>
</ul>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">1.3 Các công cụ AI tạo sinh được sử dụng</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Bảng 1 tóm tắt 4 công cụ AI tạo sinh được sử dụng trong dự án và vai trò cụ thể của từng công cụ:</p>

<div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs">
  <table class="w-full text-left border-collapse bg-white">
    <thead>
      <tr class="bg-slate-50/80 border-b border-slate-200">
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">STT</th>
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Công cụ</th>
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Loại</th>
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Vai trò trong dự án</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100">
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">1</td>
        <td class="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 text-left">ChatGPT</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-650 text-left">Tạo văn bản</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-left">Lên ý tưởng, brainstorm chủ đề, nghiên cứu xu hướng, xây dựng dàn ý bài viết</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">2</td>
        <td class="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 text-left">Google Gemini</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-650 text-left">Tạo văn bản</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-left">Viết và chỉnh sửa nội dung bài viết, review và tối ưu hóa bài viết (Google AI Studio)</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">3</td>
        <td class="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 text-left">DALL-E</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-650 text-left">Tạo hình ảnh</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-left">Tạo hình ảnh thumbnail, minh họa cho bài viết</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-center">4</td>
        <td class="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 text-left">Google Stitch</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-650 text-left">Hỗ trợ thiết kế</td>
        <td class="px-4 py-3 text-xs sm:text-sm text-slate-600 text-left">Thiết kế bố cục tổng thể, banner và các thành phần đồ họa cho bài viết</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs sm:text-sm text-slate-500 italic my-2">Bảng 1: Tổng hợp các công cụ AI tạo sinh sử dụng trong dự án</p>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">2. Quá trình sử dụng các công cụ AI tạo sinh</h3>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">2.1 ChatGPT – Lên ý tưởng và nghiên cứu</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">ChatGPT được sử dụng trong giai đoạn đầu tiên của dự án với vai trò brainstorm ý tưởng và nghiên cứu chủ đề. Đây là công cụ phù hợp nhờ khả năng đối thoại tự nhiên, cho phép khám phá chủ đề từ nhiều góc độ khác nhau.</p>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Prompt 1: Brainstorm chủ đề</p>
<div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Tôi muốn viết một bài blog về AI trong phát triển phần mềm cho trang web cá nhân. Hãy gợi ý cho em 5 góc tiếp cận thú vị, mỗi góc kèm theo 3 ý chính để phát triển. Đối tượng đọc là lập trình viên và sinh viên IT Việt Nam."</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light"><strong>Kết quả nhận được:</strong> ChatGPT đề xuất 5 góc tiếp cận bao gồm: (1) AI thay đổi quy trình phát triển phần mềm, (2) Các công cụ AI hàng đầu cho lập trình viên, (3) Thách thức đạo đức khi sử dụng AI trong coding, (4) AI và tương lai nghề lập trình, (5) Case study ứng dụng AI trong dự án thực tế. Em chọn kết hợp góc (1) và (2) làm hướng chính cho bài viết.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">chatgpt_brainstorm.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 1</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0000.jpg" alt="ChatGPT Brainstorm" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 1: Giao diện ChatGPT khi brainstorm ý tưởng chủ đề bài viết.</div>
</div>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Prompt 2: Xây dựng dàn ý chi tiết</p>
<div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Dựa trên góc tiếp cận “AI thay đổi quy trình phát triển phần mềm” và “Các công cụ AI hàng đầu cho lập trình viên”, hãy xây dựng dàn ý chi tiết cho bài viết khoảng 1500–2000 từ. Mỗi phần cần có tiêu đề hấp dẫn và các bullet points nội dung chính."</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light"><strong>Kết quả và chỉnh sửa:</strong> Dàn ý ChatGPT đưa ra khá toàn diện nhưng em đã chỉnh sửa lại thứ tự các phần cho logic hơn, bổ sung thêm phần “Kinh nghiệm cá nhân” mà ChatGPT không đề cập, và lược bỏ một số ý trùng lặp. Tỷ lệ giữ lại khoảng 60% dàn ý gốc, 40% là chỉnh sửa và bổ sung của em.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">chatgpt_outline.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 2</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0001.jpg" alt="ChatGPT Outline" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 2: ChatGPT xây dựng dàn ý chi tiết cho bài viết.</div>
</div>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2.2 Google Gemini (Google AI Studio) – Viết và chỉnh sửa nội dung</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Sau khi có dàn ý, em sử dụng Google Gemini thông qua Google AI Studio để viết nội dung bài viết và review, tối ưu hóa chất lượng bài viết. Google Gemini được chọn vì khả năng viết tiếng Việt tự nhiên và hỗ trợ ngữ cảnh dài.</p>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Prompt 3: Viết nội dung từ dàn ý</p>
<div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Dựa trên dàn ý sau [dàn ý đã chỉnh sửa], hãy viết bài blog bằng tiếng Việt, phong cách thân thiện nhưng chuyên nghiệp, phù hợp với đối tượng lập trình viên trẻ. Mỗi phần khoảng 200–300 từ. Sử dụng ví dụ thực tế và số liệu cụ thể khi có thể."</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light"><strong>Kết quả và chỉnh sửa:</strong> Nội dung Gemini tạo ra có chất lượng tốt về mặt ngữ pháp và cấu trúc. Tuy nhiên, em nhận thấy:</p>
<ul class="list-disc pl-5 space-y-1.5 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed">Một số đoạn văn quá “an toàn” và thiếu quan điểm cá nhân &rarr; Em viết lại hoàn toàn phần nhận xét cá nhân.</li>
  <li class="leading-relaxed">Số liệu cần được kiểm chứng lại &rarr; Em tra cứu và cập nhật số liệu chính xác từ các nguồn uy tín.</li>
  <li class="leading-relaxed">Giọng văn đôi chỗ quá formal &rarr; Em chỉnh lại cho phù hợp với phong cách blog cá nhân.</li>
</ul>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">gemini_writing.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 3</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0002.jpg" alt="Gemini Writing" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 3: Google Gemini (AI Studio) viết nội dung bài blog từ dàn ý.</div>
</div>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Prompt 4: Review và tối ưu bài viết</p>
<div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Hãy review bài viết sau và đề xuất cải thiện về: (1) Tính mạch lạc và logic, (2) SEO – đề xuất từ khóa phù hợp, (3) Tiêu đề và mở đầu có hấp dẫn không, (4) Kết luận có call-to-action rõ ràng không. [Nội dung bài viết đã chỉnh sửa]"</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light"><strong>Kết quả:</strong> Gemini đưa ra nhiều gợi ý hữu ích, đặc biệt về SEO và cách viết tiêu đề thu hút hơn. Em áp dụng khoảng 70% các đề xuất và tự viết lại phần call-to-action theo phong cách riêng.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">gemini_review.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 4</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0003.jpg" alt="Gemini Review" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 4: Gemini review và đề xuất cải thiện bài viết.</div>
</div>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2.3 DALL-E – Tạo hình ảnh minh họa</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">DALL-E được sử dụng để tạo hình ảnh thumbnail và hình ảnh minh họa cho bài viết. Hình ảnh đóng vai trò quan trọng trong việc thu hút người đọc và minh họa trực quan các khái niệm trừu tượng.</p>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Prompt 5: Tạo thumbnail cho bài viết</p>
<div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Create a modern, professional blog thumbnail image about “AI in Software Development”. The image should feature a futuristic coding workspace with holographic AI interfaces, code snippets floating in the air, and a developer silhouette. Use a color palette of deep blue, electric purple, and neon cyan. Style: digital art, clean and minimalist, 16:9 aspect ratio."</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light"><strong>Kết quả và chỉnh sửa:</strong> Hình ảnh đầu tiên DALL-E tạo ra khá ấn tượng về mặt thẩm mỹ nhưng chứa text gibberish (chữ vô nghĩa) trên các giao diện code. Em đã yêu cầu tạo lại với prompt bổ sung <em>"no text on the image"</em> và chỉnh sửa màu sắc cho phù hợp với bảng màu của trang web cá nhân.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">dalle_thumbnail.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 5</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0004.jpg" alt="DALL-E Thumbnail" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 5: DALL-E tạo hình ảnh thumbnail cho bài viết.</div>
</div>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Prompt 6: Tạo hình minh họa bổ sung</p>
<div class="bg-slate-50/60 border-l-4 border-blue-500/80 px-5 py-4 font-mono text-xs sm:text-sm text-slate-650 my-3 rounded-r-xl border-y border-r border-slate-200/50 shadow-xs whitespace-pre-wrap leading-relaxed text-left">"Create an illustration showing the workflow of AI-assisted software development: from idea (lightbulb) -> AI code generation -> testing -> deployment. Isometric style, pastel colors, no text. Clean vector-like illustration."</div>

<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light"><strong>Kết quả:</strong> Hình minh họa quy trình rất phù hợp với nội dung bài viết. Em sử dụng nguyên bản với chỉ một chút điều chỉnh về kích thước cho phù hợp bố cục.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">dalle_workflow.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 6</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0005.jpg" alt="DALL-E Workflow" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 6: Hình minh họa quy trình phát triển phần mềm với AI do DALL-E tạo.</div>
</div>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2.4 Google Stitch – Thiết kế bố cục và đồ họa</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Google Stitch là công cụ AI hỗ trợ thiết kế mới của Google, được em sử dụng để thiết kế bố cục tổng thể cho bài viết và tạo các thành phần đồ họa bổ sung như banner, divider, và info card.</p>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Sử dụng Stitch để thiết kế banner</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Em mô tả yêu cầu thiết kế cho Stitch: tạo banner header cho bài blog với phong cách hiện đại, tích hợp được với giao diện trang web cá nhân. Stitch đề xuất nhiều mẫu thiết kế và em đã chọn, tùy chỉnh mẫu phù hợp nhất.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">stitch_banner_design.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 7</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0006.jpg" alt="Google Stitch Banner" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 7: Giao diện Google Stitch khi thiết kế bố cục banner cho bài viết.</div>
</div>

<p class="text-sm sm:text-base text-slate-700 font-medium mt-4 mb-1">Tích hợp thiết kế vào trang web</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Sau khi có các thành phần đồ họa từ Stitch, em xuất file và tích hợp vào trang blog. Quá trình này đòi hỏi chỉnh sửa thêm về CSS và responsive design để đảm bảo hiển thị tốt trên mọi thiết bị.</p>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">stitch_layout_result.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 8</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0007.jpg" alt="Google Stitch Layout" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 8: Kết quả thiết kế layout từ Google Stitch sau khi tùy chỉnh.</div>
</div>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">3. Quá trình sáng tạo và tích hợp</h3>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">3.1 Quy trình làm việc tổng thể</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Quy trình sáng tạo bài viết được chia thành 4 giai đoạn chính, mỗi giai đoạn sử dụng các công cụ AI khác nhau kết hợp với đóng góp cá nhân:</p>
<ol class="list-decimal pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Giai đoạn 1 – Lên ý tưởng (ChatGPT):</strong> Brainstorm chủ đề, nghiên cứu xu hướng, xây dựng dàn ý. Đóng góp AI: 60%, Cá nhân: 40%.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Giai đoạn 2 – Viết nội dung (Google Gemini):</strong> Viết bản thảo đầu tiên, review và chỉnh sửa. Đóng góp AI: 45%, Cá nhân: 55%.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Giai đoạn 3 – Tạo hình ảnh (DALL-E):</strong> Thiết kế thumbnail, hình minh họa. Đóng góp AI: 70%, Cá nhân: 30%.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Giai đoạn 4 – Thiết kế tổng thể (Google Stitch):</strong> Bố cục, banner, tích hợp lên web. Đóng góp AI: 40%, Cá nhân: 60%.</li>
</ol>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">3.2 Chi tiết cách chỉnh sửa và tích hợp đầu ra của AI</h4>
<p class="text-sm sm:text-base text-slate-700 font-semibold mt-3 mb-1">Chỉnh sửa nội dung văn bản</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Đối với đầu ra từ ChatGPT và Google Gemini, em áp dụng quy trình chỉnh sửa 3 bước:</p>
<ul class="list-disc pl-5 space-y-2 my-2 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Bước 1 – Kiểm tra tính chính xác:</strong> Xác minh lại toàn bộ số liệu, thông tin kỹ thuật, và tên các công cụ/framework. AI có xu hướng đưa ra số liệu không chính xác hoặc lỗi thời, đặc biệt với các thông tin mới sau năm 2024. Em đã phải sửa lại 3 thông tin sai trong bản thảo đầu tiên.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Bước 2 – Thêm góc nhìn cá nhân:</strong> Bổ sung kinh nghiệm thực tế từ các dự án cá nhân, ý kiến chủ quan và nhận xét dựa trên trải nghiệm sử dụng AI trong lập trình hàng ngày. Phần này chiếm khoảng 35% nội dung cuối cùng.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Bước 3 – Điều chỉnh giọng văn:</strong> Thống nhất phong cách viết xuyên suốt bài, đảm bảo giọng văn thân thiện, dễ tiếp cận nhưng vẫn chuyên nghiệp – phù hợp với đối tượng blog cá nhân.</li>
</ul>

<p class="text-sm sm:text-base text-slate-700 font-semibold mt-4 mb-1">Tích hợp hình ảnh và thiết kế</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Việc tích hợp đầu ra từ DALL-E và Google Stitch đòi hỏi:</p>
<ul class="list-disc pl-5 space-y-2 my-2 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed">Chỉnh sửa kích thước và tỷ lệ hình ảnh phù hợp với layout trang web.</li>
  <li class="leading-relaxed">Điều chỉnh bảng màu để đồng nhất với theme của trang cá nhân.</li>
  <li class="leading-relaxed">Tối ưu dung lượng file ảnh để đảm bảo tốc độ tải trang.</li>
  <li class="leading-relaxed">Bổ sung alt text và caption cho từng hình ảnh (phần này hoàn toàn do em viết).</li>
</ul>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">3.3 Sản phẩm cuối cùng</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Bài viết hoàn chỉnh đã được xuất bản trên trang <a href="http://cns-ai.itcuong-dev.io.vn/blog-ai" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">cns-ai.itcuong-dev.io.vn/blog-ai</a> với các thông số:</p>
<ul class="list-disc pl-5 space-y-1.5 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Độ dài:</strong> khoảng 800 từ.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Số hình ảnh:</strong> 4 (1 thumbnail + 3 minh họa).</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tỷ lệ đóng góp tổng thể:</strong> AI khoảng 45%, sáng tạo cá nhân khoảng 55%.</li>
</ul>

<div class="my-6 border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-950 shadow-xs max-w-2xl mx-auto">
  <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
    <span class="text-xs text-slate-400 font-mono">published_blog_page.jpg</span>
    <span class="text-[10px] text-slate-300 font-semibold uppercase bg-slate-800 px-2 py-0.5 rounded">Hình 9</span>
  </div>
  <div class="p-2 flex justify-center bg-slate-950">
    <img src="/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0008.jpg" alt="Sản phẩm cuối cùng" class="max-h-72 object-contain rounded-md" />
  </div>
  <div class="bg-slate-900/40 px-4 py-2 text-center text-xs text-slate-400 italic border-t border-slate-800/40">Hình 9: Sản phẩm cuối cùng – Bài viết đã xuất bản trên trang cá nhân.</div>
</div>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">4. So sánh và phân tích các công cụ AI</h3>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">4.1 Bảng so sánh tổng hợp</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Bảng 2 trình bày so sánh chi tiết giữa 4 công cụ AI đã sử dụng trong dự án dựa trên các tiêu chí: chất lượng đầu ra, độ dễ sử dụng, khả năng tiếng Việt, và mức độ cần chỉnh sửa sau khi sử dụng.</p>

<div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs">
  <table class="w-full text-left border-collapse bg-white">
    <thead>
      <tr class="bg-slate-50/80 border-b border-slate-200">
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Tiêu chí</th>
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">ChatGPT</th>
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Google Gemini</th>
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">DALL-E</th>
        <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Google Stitch</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 text-xs sm:text-sm text-slate-650">
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 font-semibold text-slate-800">Chất lượng đầu ra</td>
        <td class="px-4 py-3">Tốt, ý tưởng phong phú</td>
        <td class="px-4 py-3">Rất tốt, văn phong tự nhiên</td>
        <td class="px-4 py-3">Khá, đẹp nhưng hay lỗi text</td>
        <td class="px-4 py-3">Tốt, thiết kế hiện đại</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 font-semibold text-slate-800">Tiếng Việt</td>
        <td class="px-4 py-3">Khá tốt, đôi khi lặp</td>
        <td class="px-4 py-3 text-blue-600 font-medium bg-blue-50/30">Rất tốt, tự nhiên nhất</td>
        <td class="px-4 py-3 text-red-500 font-medium bg-red-50/20">Không hỗ trợ text VN</td>
        <td class="px-4 py-3">Hỗ trợ cơ bản</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 font-semibold text-slate-800">Dễ sử dụng</td>
        <td class="px-4 py-3 font-medium text-emerald-600">9/10</td>
        <td class="px-4 py-3 font-medium">8/10</td>
        <td class="px-4 py-3 font-medium">8/10</td>
        <td class="px-4 py-3 font-medium text-slate-400">7/10</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 font-semibold text-slate-800">Cần chỉnh sửa</td>
        <td class="px-4 py-3">40%</td>
        <td class="px-4 py-3 text-emerald-600 font-medium">30%</td>
        <td class="px-4 py-3 text-emerald-600 font-medium">20%</td>
        <td class="px-4 py-3">35%</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 font-semibold text-slate-800">Điểm mạnh nhất</td>
        <td class="px-4 py-3">Brainstorm, sáng tạo</td>
        <td class="px-4 py-3">Viết dài, review</td>
        <td class="px-4 py-3">Hình ảnh sáng tạo</td>
        <td class="px-4 py-3">Layout, design system</td>
      </tr>
      <tr class="hover:bg-slate-50/30 transition-colors">
        <td class="px-4 py-3 font-semibold text-slate-800">Hạn chế lớn nhất</td>
        <td class="px-4 py-3">Số liệu thiếu chính xác</td>
        <td class="px-4 py-3">Giao diện phức tạp hơn</td>
        <td class="px-4 py-3">Text gibberish</td>
        <td class="px-4 py-3">Tùy chỉnh chi tiết hạn chế</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs sm:text-sm text-slate-500 italic my-2">Bảng 2: So sánh chi tiết các công cụ AI tạo sinh</p>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">4.2 Phân tích chi tiết điểm mạnh và hạn chế</h4>
<p class="text-sm sm:text-base text-slate-700 font-semibold mt-3 mb-1">ChatGPT – Vua brainstorm, yếu ở chi tiết</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">ChatGPT thể hiện xuất sắc trong vai trò khởi tạo ý tưởng. Khi được yêu cầu brainstorm, công cụ này tạo ra danh sách đa dạng, sáng tạo và có tính ứng dụng cao. Khả năng đối thoại nhiều lượt (multi-turn conversation) giúp em dễ dàng đào sâu từng ý tưởng. Tuy nhiên, khi chuyển sang viết nội dung dài, ChatGPT có xu hướng lặp lại cấu trúc câu và sử dụng những cụm từ “sáo rỗng” (clichés). Đặc biệt, các số liệu thống kê mà ChatGPT đưa ra cần được kiểm chứng kỹ lưỡng – trong dự án này, em phát hiện 3/5 số liệu không chính xác hoặc đã lỗi thời.</p>

<p class="text-sm sm:text-base text-slate-700 font-semibold mt-4 mb-1">Google Gemini – Nhà văn AI đáng tin cậy</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Google Gemini qua giao diện AI Studio cho thấy khả năng viết tiếng Việt vượt trội so với các đối thủ. Văn phong tự nhiên, ít “máy móc”, và khả năng xử lý ngữ cảnh dài giúp bài viết mạch lạc hơn. Đặc biệt, tính năng review bài viết của Gemini rất hữu ích: nó phát hiện được lỗi logic, đề xuất cải thiện SEO, và gợi ý cách viết tiêu đề hấp dẫn hơn. Hạn chế chính là giao diện AI Studio phức tạp hơn ChatGPT, đòi hỏi thời gian làm quen, và đôi khi phản hồi chậm hơn khi xử lý prompt dài.</p>

<p class="text-sm sm:text-base text-slate-700 font-semibold mt-4 mb-1">DALL-E – Sáng tạo hình ảnh ấn tượng nhưng thiếu kiểm soát</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">DALL-E tạo ra hình ảnh có tính thẩm mỹ cao, phong cách đa dạng, phù hợp làm thumbnail và minh họa cho blog. Tuy nhiên, hạn chế lớn nhất là text rendering: mọi chữ viết trong hình đều bị biến dạng hoặc vô nghĩa. Điều này khiến em phải thiết kế prompt cẩn thận để tránh yêu cầu text trong hình, hoặc phải hậu kỳ bằng công cụ chỉnh sửa ảnh khác. Ngoài ra, khả năng kiểm soát chi tiết cụ thể trong hình ảnh còn hạn chế – đôi khi cần 3–4 lần thử mới được kết quả ưng ý.</p>

<p class="text-sm sm:text-base text-slate-700 font-semibold mt-4 mb-1">Google Stitch – Tiềm năng lớn, cần hoàn thiện</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Google Stitch là công cụ mới nhất trong danh sách và cho thấy tiềm năng lớn trong thiết kế UI/UX. Khả năng tạo layout và design system nhanh chóng, phù hợp với xu hướng thiết kế hiện đại. Tuy nhiên, do là công cụ mới, khả năng tùy chỉnh chi tiết còn hạn chế so với các công cụ thiết kế truyền thống như Figma. Xuất file đôi khi không giữ nguyên chất lượng, cần chỉnh sửa thêm bằng CSS khi tích hợp vào web.</p>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">5. Phân tích vai trò của AI trong quá trình sáng tạo</h3>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">5.1 Những phần AI làm tốt</h4>
<ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tăng tốc giai đoạn khởi tạo:</strong> Thay vì mất hàng giờ để brainstorm và nghiên cứu, AI giúp em có bản nháp ý tưởng trong vài phút. ChatGPT đặc biệt hiệu quả khi em cần khám phá một chủ đề từ nhiều góc độ mà bản thân chưa nghĩ đến.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Vượt qua “writer’s block”:</strong> Khi gặp bế tắc trong việc viết một đoạn văn, AI cung cấp “bản nháp zero” (zero draft) để em có điểm khởi đầu và chỉnh sửa, thay vì phải đối mặt với trang giấy trắng.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tạo nội dung đa phương tiện nhanh chóng:</strong> DALL-E giúp tạo hình ảnh minh họa chuyên nghiệp mà nếu thuê designer sẽ tốn chi phí và thời gian đáng kể.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Review và phản biện:</strong> Google Gemini đóng vai “người đọc đầu tiên” hiệu quả, giúp phát hiện lỗi logic và đề xuất cải thiện mà em có thể bỏ sót.</li>
</ul>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">5.2 Những phần AI còn hạn chế</h4>
<ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Thiếu “tiếng nói” cá nhân:</strong> Nội dung AI tạo ra thường chính xác nhưng “nhạt”, thiếu cá tính và trải nghiệm thực tế – yếu tố quan trọng nhất của một bài blog. Phần kinh nghiệm thực tế và quan điểm cá nhân buộc phải do em tự viết hoàn toàn.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Độ chính xác thông tin:</strong> AI có xu hướng “hallucinate” – tạo ra thông tin nghe hợp lý nhưng không chính xác. Mọi số liệu và thông tin kỹ thuật đều cần kiểm chứng thủ công.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tính đồng nhất phong cách:</strong> Khi sử dụng nhiều công cụ AI, đầu ra có phong cách khác nhau, đòi hỏi công sức chỉnh sửa để thống nhất giọng văn toàn bài.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Hạn chế sáng tạo đột phá:</strong> AI giỏi tổng hợp và tái sử dụng kiến thức hiện có, nhưng hiếm khi tạo ra góc nhìn thực sự mới lạ hay đột phá.</li>
</ul>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">5.3 Cách AI thay đổi quy trình sáng tạo</h4>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">AI đã thay đổi quy trình sáng tạo nội dung của em theo những cách sau:</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Thứ nhất, vai trò của người sáng tạo chuyển từ “người viết” sang <strong>“người biên tập và định hướng”</strong>. Thay vì viết từ đầu, em dành nhiều thời gian hơn cho việc crafting prompt hiệu quả, đánh giá chất lượng đầu ra, và chỉnh sửa để phù hợp với vision cá nhân. Kỹ năng “prompt engineering” trở thành một competency quan trọng không kém kỹ năng viết.</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Thứ hai, quy trình trở nên nhanh hơn nhưng phức tạp hơn. Tổng thời gian giảm khoảng 40% so với viết hoàn toàn thủ công, nhưng số bước trong quy trình tăng lên: prompt &rarr; đánh giá &rarr; chỉnh sửa &rarr; tích hợp &rarr; kiểm tra lại. Mỗi bước đòi hỏi một kỹ năng khác nhau.</p>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Thứ ba, AI cho phép thử nghiệm nhiều hướng tiếp cận với chi phí thấp. Em có thể yêu cầu ChatGPT brainstorm 5 góc tiếp cận, Gemini viết 2 bản nháp mở đầu khác nhau, DALL-E tạo 4 phiên bản thumbnail – và chọn cái tốt nhất. Trước đây, mỗi phiên bản đều đòi hỏi đầu tư thời gian đáng kể.</p>

<h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">5.4 Các vấn đề đạo đức cần cân nhắc</h4>
<ol class="list-decimal pl-5 space-y-3 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Tính minh bạch (Transparency):</strong> Khi xuất bản bài viết có sử dụng AI, người viết có nghĩa vụ phải công khai mức độ AI đã hỗ trợ hay không? Trong dự án này, em chọn cách minh bạch: ghi chú ở cuối bài viết rằng “Bài viết được hỗ trợ bởi các công cụ AI tạo sinh trong quá trình sáng tạo.”</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Bản quyền và sở hữu trí tuệ:</strong> Ai là “tác giả” thực sự của nội dung do AI tạo ra? Hiện tại, các quy định pháp lý vẫn chưa rõ ràng. Với tỷ lệ đóng góp cá nhân trên 50%, em cho rằng bài viết vẫn mang tính sáng tạo cá nhân, nhưng ranh giới này ngày càng mờ nhạt khi AI phát triển.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Ảnh hưởng đến kỹ năng cá nhân:</strong> Việc phụ thuộc vào AI có thể làm suy giảm kỹ năng viết và tư duy sáng tạo. Em nhận thấy cần duy trì thói quen viết không dùng AI song song để giữ và phát triển kỹ năng cá nhân.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Đa dạng nội dung:</strong> Nếu nhiều người cùng sử dụng AI để viết, nội dung trên internet có nguy cơ trở nên đồng nhất và thiếu cá tính. Đóng góp sáng tạo cá nhân trở nên quan trọng hơn bao giờ hết để tạo sự khác biệt.</li>
  <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Bias trong AI:</strong> Các mô hình AI có thể chứa bias từ dữ liệu huấn luyện, dẫn đến nội dung thiên lệch mà người dùng không nhận ra. Cần có tư duy phản biện khi sử dụng đầu ra của AI.</li>
</ol>

<h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">6. Kết luận</h3>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Qua quá trình thực hiện dự án sáng tạo bài viết blog với sự hỗ trợ của 4 công cụ AI tạo sinh (ChatGPT, Google Gemini, DALL-E, Google Stitch), em rút ra một số bài học quan trọng:</p>
<ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
  <li class="leading-relaxed">AI tạo sinh là công cụ hỗ trợ mạnh mẽ, giúp tăng năng suất sáng tạo lên đáng kể, nhưng không thể thay thế hoàn toàn vai trò của con người trong quá trình sáng tạo nội dung chất lượng.</li>
  <li class="leading-relaxed">Kỹ năng sử dụng AI hiệu quả (prompt engineering, đánh giá đầu ra, tích hợp sáng tạo) đang trở thành một năng lực thiết yếu trong thời đại số.</li>
  <li class="leading-relaxed">Việc kết hợp nhiều công cụ AI chuyên biệt cho từng giai đoạn sáng tạo cho kết quả tốt hơn nhiều so với phụ thuộc vào một công cụ duy nhất.</li>
  <li class="leading-relaxed">Đóng góp sáng tạo cá nhân – bao gồm góc nhìn riêng, kinh nghiệm thực tế, và phong cách viết – vẫn là yếu tố tạo nên giá trị và sự khác biệt cho sản phẩm cuối cùng.</li>
  <li class="leading-relaxed">Các vấn đề đạo đức liên quan đến minh bạch, bản quyền, và tác động đến kỹ năng cá nhân cần được cân nhắc nghiêm túc trong mỗi dự án sử dụng AI.</li>
</ul>
<p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">Nhìn chung, AI tạo sinh đang mở ra một kỷ nguyên mới cho sáng tạo nội dung số, nơi con người và máy móc cộng tác để tạo ra những sản phẩm vượt xa khả năng của từng bên riêng lẻ. Chìa khóa nằm ở việc sử dụng AI như một đối tác sáng tạo chứ không phải người thay thế, và luôn duy trì tư duy phản biện trong mọi giai đoạn của quy trình.</p>`,
    resultType: "Ấn phẩm truyền thông & Báo cáo quy trình sáng tạo",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfUrl: "/files/tmpjosviz_ta-huu-cuong_25020053_tuan-5_cnsai.pdf",
    tools: ["ChatGPT", "Google Gemini", "DALL-E", "Google Stitch"],
    steps: [
      {
        title: "Hình 1 - ChatGPT brainstorm chủ đề",
        desc: "Giao diện ChatGPT khi thực hiện brainstorm các góc tiếp cận chủ đề AI trong phát triển phần mềm cho đối tượng sinh viên IT.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0000.jpg"
      },
      {
        title: "Hình 2 - ChatGPT xây dựng dàn ý",
        desc: "ChatGPT lên khung sườn dàn ý chi tiết cho bài viết blog từ 1500-2000 từ dựa trên các góc tiếp cận được lựa chọn.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0001.jpg"
      },
      {
        title: "Hình 3 - Gemini viết nội dung bản thảo",
        desc: "Sử dụng Google Gemini trong giao diện Google AI Studio để thực hiện viết chi tiết các mục nội dung của bài blog từ dàn ý.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0002.jpg"
      },
      {
        title: "Hình 4 - Gemini review tối ưu hóa SEO",
        desc: "Sử dụng Google Gemini để rà soát lỗi logic, cải thiện tiêu đề mở đầu bài viết và đề xuất hệ thống từ khóa SEO.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0003.jpg"
      },
      {
        title: "Hình 5 - DALL-E tạo ảnh thumbnail bài viết",
        desc: "Hình ảnh thumbnail chất lượng cao dạng workspace công nghệ viễn tưởng do DALL-E thiết kế theo các yêu cầu màu sắc, bố cục.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0004.jpg"
      },
      {
        title: "Hình 6 - DALL-E tạo sơ đồ quy trình",
        desc: "Hình ảnh vector isometric mô phỏng quy trình phát triển phần mềm tích hợp trợ lý trí tuệ nhân tạo do DALL-E thiết kế.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0005.jpg"
      },
      {
        title: "Hình 7 - Google Stitch thiết kế bố cục banner",
        desc: "Giao diện sử dụng AI thiết kế Google Stitch để thiết lập bố cục tổng thể và banner trang trí tương thích theme của blog.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0006.jpg"
      },
      {
        title: "Hình 8 - Layout thành phẩm từ Google Stitch",
        desc: "Bản vẽ bố cục bài viết sau khi được tinh chỉnh và đóng gói thiết kế trực tiếp từ Google Stitch sẵn sàng tích hợp HTML.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0007.jpg"
      },
      {
        title: "Hình 9 - Bài viết hoàn chỉnh xuất bản",
        desc: "Ảnh chụp màn hình thực tế bài blog hoàn chỉnh đã xuất bản trên trang cá nhân cns-ai.itcuong-dev.io.vn/blog-ai.",
        image: "/files/bai5/fd1a4808-fb63-424b-89fd-dafde4e3c848-0008.jpg"
      }
    ]
  },
  {
    id: "bai-6-an-toan-va-liem-chinh-hoc-thuat-trong-moi-truong-so",
    title: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
    shortDescription: "Nghiên cứu chính sách học đường về AI, phân tích khía cạnh liêm chính học thuật và xây dựng bộ nguyên tắc cá nhân.",
    fullDescription: "Nghiên cứu các quy định sử dụng AI trong trường đại học, phân tích ranh giới giữa hỗ trợ học tập và gian lận học thuật, đồng thời thiết lập bộ quy tắc ứng xử trách nhiệm và thiết kế infographic truyền tải thông điệp sử dụng AI an toàn, minh bạch.",
    objectives: [
      "Hiểu rõ chính sách đạo đức của các cơ sở giáo dục về việc ứng dụng AI trong học tập.",
      "Xây dựng quy trình sử dụng AI minh bạch: từ viết prompt, đánh giá, biên tập đến trích dẫn nguồn AI.",
      "Thiết lập bộ nguyên tắc liêm chính học thuật cá nhân (5-7 nguyên tắc) và truyền thông hóa bằng Infographic."
    ],
    requirements: [
      "Nghiên cứu chính sách về AI của trường đại học đang theo học hoặc một trường lớn ở Việt Nam.",
      "Thực hiện một nhiệm vụ học tập có sự hỗ trợ của AI (lưu lại prompt, phản hồi, cách đánh giá/chỉnh sửa và thực hiện trích dẫn minh bạch).",
      "Phân tích các vấn đề đạo đức liên quan: ranh giới hỗ trợ vs gian lận, quyền sở hữu trí tuệ, tác động sự phát triển kỹ năng.",
      "Xây dựng bộ nguyên tắc cá nhân (5-7 nguyên tắc) về cách sử dụng AI có trách nhiệm trong học tập.",
      "Thiết kế một infographic trực quan với chủ đề: Sử dụng AI có trách nhiệm trong học thuật."
    ],
    submissionFormat: "Báo cáo phân tích (4-5 trang) bao gồm phân tích chính sách, mô tả quá trình sử dụng AI, phân tích đạo đức, bộ nguyên tắc cá nhân và infographic.",
    process: `<div class="space-y-8 text-slate-750">
  <!-- Header metadata -->
  <div class="bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-slate-50/50 p-6 rounded-2xl border border-slate-100/80 mb-6">
    <h3 class="text-lg sm:text-xl font-bold text-slate-800 mb-2">BÁO CÁO BÀI TẬP SỐ 6</h3>
    <p class="text-sm sm:text-base text-slate-700 font-semibold mb-4">Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-650">
      <div><span class="font-semibold text-slate-800">Nhiệm vụ:</span> Tổng hợp tài liệu nghiên cứu về “Ứng dụng AI trong phát triển phần mềm hiện đại” với sự hỗ trợ của công cụ AI tạo sinh</div>
      <div><span class="font-semibold text-slate-800">Họ và tên:</span> Tạ Hữu Cường (MSSV: 25020053)</div>
      <div><span class="font-semibold text-slate-800">Lớp học phần:</span> VNU1001_E252014</div>
      <div><span class="font-semibold text-slate-800">Đơn vị:</span> Trường Đại học Công nghệ (UET) - ĐHQGHN</div>
    </div>
  </div>

  <!-- 1. Nghiên cứu chính sách -->
  <section>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">1 Nghiên cứu chính sách của trường đại học về sử dụng AI</h3>
    
    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">1.1 Bối cảnh chung tại Việt Nam</h4>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Trong bối cảnh các công cụ AI tạo sinh (Generative AI) như ChatGPT, Google Gemini, Claude ngày càng phổ biến, các trường đại học tại Việt Nam đang phải đối mặt với bài toán cân bằng giữa việc khuyến khích đổi mới sáng tạo và đảm bảo liêm chính học thuật. Bộ Giáo dục và Đào tạo đã ban hành các định hướng về ứng dụng công nghệ số và AI trong giáo dục đại học, xác lập các nguyên tắc cốt lõi:
    </p>
    <ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
      <li class="leading-relaxed"><strong class="text-slate-800 font-medium">AI là công cụ hỗ trợ:</strong> không thay thế vai trò giảng dạy, tư vấn và đánh giá của giảng viên.</li>
      <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Liêm chính học thuật:</strong> Mọi hoạt động ứng dụng AI phải đảm bảo tính minh bạch, khách quan, không làm sai lệch kết quả học tập và nghiên cứu.</li>
      <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Trách nhiệm giải trình:</strong> Các cơ sở giáo dục phải có cơ chế kiểm soát, giám sát và xử lý vi phạm liên quan đến AI.</li>
      <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Bảo vệ dữ liệu:</strong> Tuân thủ quy định về bảo vệ dữ liệu cá nhân và an toàn thông tin khi sử dụng các nền tảng AI.</li>
    </ul>

    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">1.2 Chính sách của Đại học Quốc gia Hà Nội (ĐHQGHN)</h4>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      ĐHQGHN — nơi em đang theo học — đã có những bước đi chủ động và cụ thể trong việc tích hợp AI vào môi trường giáo dục học thuật. Các điểm chính trong chính sách của trường được tóm tắt trong Bảng 1.
    </p>

    <!-- Table 1 -->
    <div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs">
      <table class="w-full text-left border-collapse bg-white">
        <thead>
          <tr class="bg-slate-50/80 border-b border-slate-200">
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left w-1/4">Khía cạnh</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Nội dung chính sách</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-xs sm:text-sm text-slate-650">
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Đào tạo bắt buộc</td>
            <td class="px-4 py-3">Từ năm học 2025–2026, học phần “Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo” (mã VNU1001) trở thành môn bắt buộc cho toàn bộ sinh viên chính quy, với mục tiêu trang bị kiến thức nền tảng về tư duy số và kỹ năng sử dụng AI.</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-855">Nguyên tắc sử dụng</td>
            <td class="px-4 py-3">
              <ul class="list-disc pl-4 space-y-1">
                <li>Không lệ thuộc vào AI — phát huy tư duy độc lập, sáng tạo và phản biện.</li>
                <li>AI là công cụ hỗ trợ, không phải công cụ thay thế quá trình tư duy.</li>
                <li>Đảm bảo liêm chính học thuật: minh bạch, có trách nhiệm.</li>
              </ul>
            </td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Quy định theo môn</td>
            <td class="px-4 py-3">Mức độ cho phép sử dụng AI phụ thuộc vào quyết định của giảng viên phụ trách từng môn học. Sinh viên cần kiểm tra đề cương (Syllabus) và hỏi giảng viên nếu không chắc chắn.</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Đạo đức AI</td>
            <td class="px-4 py-3">Chương trình đạo tạo bao gồm nội dung về đạo đức ứng dụng AI, an toàn số, và trách nhiệm của người sử dụng trong môi trường học thuật và xã hội.</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Xử lý vi phạm</td>
            <td class="px-4 py-3">Lạm dụng AI để thay thế hoàn toàn công việc tự học, tự nghiên cứu hoặc thực hiện hành vi gian lận (đạo văn AI) được xử lý theo quy chế liêm chính học thuật của trường.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs sm:text-sm text-slate-500 italic my-2">Bảng 1: Tóm tắt chính sách sử dụng AI tại ĐHQGHN</p>

    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">1.3 So sánh với chính sách của các trường đại học khác</h4>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Để có cái nhìn đa chiều hơn, em tiến hành so sánh chính sách của ĐHQGHN với hai trường đại học tiên phong khác tại Việt Nam: VinUni và Đại học FPT (xem Bảng 2).
    </p>

    <!-- Table 2 -->
    <div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs">
      <table class="w-full text-left border-collapse bg-white">
        <thead>
          <tr class="bg-slate-50/80 border-b border-slate-200">
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Tiêu chí</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">ĐHQGHN</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">VinUni</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">ĐHFPT</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-xs sm:text-sm text-slate-650">
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Văn bản chính thức</td>
            <td class="px-4 py-3">Tích hợp trong chương trình VNU1001</td>
            <td class="px-4 py-3 font-medium text-indigo-600 bg-indigo-50/10">Ban hành “Guidelines on Student Use of Generative AI” riêng</td>
            <td class="px-4 py-3">Tích hợp trong quy chế đào tạo, hướng dẫn theo từng môn</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Mức độ chi tiết</td>
            <td class="px-4 py-3 text-amber-600 bg-amber-50/10">Định hướng chung, linh hoạt theo giảng viên</td>
            <td class="px-4 py-3 font-medium text-emerald-600 bg-emerald-50/30">Chi tiết, có AI Assessment Scale đánh giá mức độ sử dụng</td>
            <td class="px-4 py-3 text-sky-600">Khuyến khích mạnh mẽ, hướng dẫn cụ thể từng công cụ</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Yêu cầu trích dẫn</td>
            <td class="px-4 py-3">Yêu cầu minh bạch khi sử dụng</td>
            <td class="px-4 py-3 text-rose-600 bg-rose-50/20">Bắt buộc trích dẫn, không công khai = vi phạm</td>
            <td class="px-4 py-3">Yêu cầu trích dẫn, nhấn mạnh tư duy phản biện</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-850">Tiếp cận chung</td>
            <td class="px-4 py-3">Cân bằng: khuyến khích nhưng thận trọng</td>
            <td class="px-4 py-3">Cởi mở nhưng kiểm soát chặt qua quy trình</td>
            <td class="px-4 py-3 text-sky-650 bg-sky-50/30 font-medium">Khuyến khích tối đa, coi AI là “trợ thủ đắc lực”</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs sm:text-sm text-slate-500 italic my-2">Bảng 2: So sánh chính sách sử dụng AI giữa các trường đại học</p>

    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">1.4 Nhận định cá nhân</h4>
    <ol class="list-decimal pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
      <li class="leading-relaxed">Xu hướng chung của các trường đại học Việt Nam là khuyến khích sử dụng AI có trách nhiệm thay vì cấm đoán hoàn toàn — phù hợp với khuyến nghị của UNESCO (2021) về tiếp cận AI lấy con người làm trung tâm.</li>
      <li class="leading-relaxed">VinUni có chính sách chi tiết và bài bản nhất với hệ thống AI Assessment Scale, giúp giảng viên và sinh viên có cùng một “ngôn ngữ chung” về mức độ sử dụng AI trong từng bài tập.</li>
      <li class="leading-relaxed">ĐHQGHN có lợi thế là quy mô lớn và đã tích hợp AI vào chương trình đào tạo bắt buộc, tuy nhiên cần bổ sung thêm các hướng dẫn chi tiết và thống nhất hơn về việc trích dẫn AI trong các sản phẩm học thuật.</li>
      <li class="leading-relaxed">Thách thức chung: Tốc độ phát triển của AI vượt xa tốc độ cập nhật chính sách, đòi hỏi các trường phải có cơ chế linh hoạt và thường xuyên rà soát, cập nhật quy định.</li>
    </ol>
  </section>

  <!-- 2. Thực hiện nhiệm vụ học tập -->
  <section>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">2 Thực hiện nhiệm vụ học tập với sự hỗ trợ của AI</h3>
    
    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">2.1 Mô tả nhiệm vụ</h4>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Em chọn nhiệm vụ tổng hợp tài liệu nghiên cứu (literature review) về chủ đề “Ứng dụng AI trong phát triển phần mềm hiện đại” nhằm phục vụ việc viết bài tổng quan cho môn học. Công cụ AI được sử dụng bao gồm:
    </p>
    <ul class="list-disc pl-5 space-y-1 my-3 text-slate-650 text-sm sm:text-base font-light">
      <li><strong>Google Gemini 2.5 Pro</strong> — hỗ trợ tổng hợp tài liệu, phân tích xu hướng</li>
      <li><strong>ChatGPT (GPT-4o)</strong> — hỗ trợ cấu trúc bài viết, kiểm tra logic lập luận</li>
    </ul>

    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2.2 Quy trình thực hiện</h4>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Quá trình thực hiện được chia thành 3 giai đoạn chính, mỗi giai đoạn đều ghi lại đầy đủ prompt, đầu ra AI, và cách em đánh giá, chỉnh sửa.
    </p>

    <!-- 2.2.1 -->
    <div class="ml-4 border-l-2 border-slate-200 pl-4 my-4 space-y-3">
      <h5 class="text-sm sm:text-base font-semibold text-slate-800">2.2.1 Giai đoạn 1: Thu thập và sàng lọc tài liệu</h5>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <p class="text-xs font-semibold uppercase text-slate-500 mb-1">Prompt đã sử dụng</p>
        <p class="text-xs sm:text-sm text-slate-700 italic">“Tôi đang viết bài tổng quan về ứng dụng AI trong phát triển phần mềm. Hãy liệt kê 10 xu hướng chính của AI trong software engineering từ năm 2023–2025, kèm theo tên các nghiên cứu/báo cáo uy tín (IEEE, ACM, Gartner, McKinsey) làm nguồn tham khảo. Với mỗi xu hướng, cho biết: (1) tên xu hướng, (2) mô tả ngắn 2–3 câu, (3) nguồn tham khảo cụ thể.”</p>
      </div>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <p class="text-xs font-semibold uppercase text-slate-500 mb-1">Đầu ra của AI</p>
        <ol class="list-decimal pl-4 text-xs sm:text-sm text-slate-650 space-y-1 font-light">
          <li><strong>AI-Assisted Code Generation</strong> — Sử dụng LLM để tự động sinh mã nguồn (GitHub Copilot, Amazon CodeWhisperer). Nguồn: GitHub (2024), “Octoverse Report”.</li>
          <li><strong>AI-Powered Code Review</strong> — Tự động phát hiện lỗi, đề xuất cải thiện chất lượng code. Nguồn: IEEE Software, Vol. 41 (2024).</li>
          <li><strong>Automated Testing with AI</strong> — Tạo test case tự động, phát hiện edge case. Nguồn: ACM Computing Surveys (2024).</li>
          <li><strong>AI trong DevOps (AIOps)</strong> — Giám sát, dự đoán sự cố và tối ưu hóa pipeline. Nguồn: Gartner (2024), “Market Guide for AIOps”.</li>
          <li><strong>Natural Language to Code</strong> — Chuyển đổi mô tả tự nhiên thành mã nguồn thực thi. Nguồn: OpenAI Research (2024).</li>
          <li>... (danh sách đầy đủ gồm 10 xu hướng)</li>
        </ol>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase text-slate-500 mb-1">Đánh giá & Chỉnh sửa</p>
        <ul class="list-disc pl-4 text-xs sm:text-sm text-slate-650 space-y-1 font-light">
          <li><span class="text-emerald-600 font-semibold">✓</span> Danh sách xu hướng khá toàn diện và phù hợp với kiến thức em đã tìm hiểu trước đó.</li>
          <li><span class="text-rose-500 font-semibold">× Phát hiện vấn đề:</span> 3/10 nguồn tham khảo AI đưa ra không thể xác minh được (hallucination). Cụ thể: tên bài báo IEEE và số volume không khớp khi tra cứu trên IEEE Xplore.</li>
          <li><span class="text-blue-600 font-semibold">&rarr; Chỉnh sửa:</span> Em đã tự tra cứu lại trên Google Scholar, IEEE Xplore và ACM Digital Library để thay thế bằng nguồn chính xác. Loại bỏ 2 xu hướng trùng lặp, bổ sung thêm xu hướng “AI for Accessibility in SE”.</li>
        </ul>
      </div>
    </div>

    <!-- 2.2.2 -->
    <div class="ml-4 border-l-2 border-slate-200 pl-4 my-4 space-y-3">
      <h5 class="text-sm sm:text-base font-semibold text-slate-800">2.2.2 Giai đoạn 2: Phân tích và tổng hợp nội dung</h5>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <p class="text-xs font-semibold uppercase text-slate-500 mb-1">Prompt đã sử dụng</p>
        <p class="text-xs sm:text-sm text-slate-700 italic">“Dựa trên danh sách xu hướng đã sàng lọc, hãy giúp tôi viết phần tổng hợp (synthesis) khoảng 500 từ, so sánh và phân tích mối liên hệ giữa các xu hướng AI trong phát triển phần mềm. Lưu ý: (1) Sử dụng giọng văn học thuật, khách quan; (2) Chỉ ra các xu hướng nào bổ trợ cho nhau; (3) Nhận định về tương lai 3–5 năm tới.”</p>
      </div>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <p class="text-xs font-semibold uppercase text-slate-500 mb-1">Đầu ra của AI</p>
        <p class="text-xs sm:text-sm text-slate-650 font-light font-light">AI (ChatGPT GPT-4o) tạo ra bài tổng hợp 520 từ với cấu trúc 4 đoạn: (1) Giới thiệu sự dịch chuyển từ “AI hỗ trợ” sang “AI đồng hành” trong SDLC; (2) Phân tích chuỗi giá trị AI — từ code gen &rarr; code review &rarr; automated testing &rarr; AIOps; (3) Mối liên hệ giữa NL-to-Code và Low-Code/No-Code; (4) Dự báo về “Autonomous Software Engineering” và vai trò mới của developer.</p>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase text-slate-500 mb-1">Đánh giá & Chỉnh sửa</p>
        <ul class="list-disc pl-4 text-xs sm:text-sm text-slate-650 space-y-1 font-light">
          <li><span class="text-emerald-600 font-semibold">✓</span> Cấu trúc logic, mạch lạc, ngôn ngữ học thuật phù hợp. Phân tích chuỗi giá trị AI trong SDLC là ý tưởng hay mà em chưa nghĩ tới.</li>
          <li><span class="text-rose-500 font-semibold">× Phát hiện vấn đề:</span> Đoạn dự báo quá lạc quan, thiếu cân nhắc các rào cản (bảo mật, chi phí, kỹ năng nhân lực).</li>
          <li><span class="text-blue-600 font-semibold">&rarr; Chỉnh sửa:</span> Em giữ lại khoảng 60% nội dung, bổ sung thêm phân tích về rào cản và thách thức dựa trên kinh nghiệm làm dự án thực tế (AuctionUET). Thêm ví dụ cụ thể từ trải nghiệm sử dụng GitHub Copilot trong môn học.</li>
        </ul>
      </div>
    </div>

    <!-- 2.2.3 -->
    <div class="ml-4 border-l-2 border-slate-200 pl-4 my-4 space-y-3">
      <h5 class="text-sm sm:text-base font-semibold text-slate-800">2.2.3 Giai đoạn 3: Hoàn thiện cấu trúc và rà soát</h5>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <p class="text-xs font-semibold uppercase text-slate-550 mb-1">Prompt đã sử dụng</p>
        <p class="text-xs sm:text-sm text-slate-700 italic">“Hãy review bài viết tổng hợp sau đây và chỉ ra: (1) Các lỗi logic hoặc thiếu sót trong lập luận; (2) Các điểm cần bổ sung nguồn trích dẫn; (3) Đề xuất cải thiện cấu trúc nếu cần.” [Đính kèm bản nháp bài viết]</p>
      </div>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <p class="text-xs font-semibold uppercase text-slate-550 mb-1">Đầu ra của AI</p>
        <p class="text-xs sm:text-sm text-slate-650 font-light font-light font-light">AI đề xuất 5 điểm cải thiện chính: (1) Thêm số liệu thống kê cụ thể cho claim “AI tăng 40% năng suất developer”; (2) Bổ sung phân tích về bias và công bằng trong AI-generated code; (3) Chuyển đổi một số câu bị động thành chủ động để tăng tính thuyết phục; (4) Thêm transition phrases giữa các đoạn; (5) Bổ sung phần limitations của bài tổng quan.</p>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase text-slate-550 mb-1">Đánh giá & Chỉnh sửa</p>
        <ul class="list-disc pl-4 text-xs sm:text-sm text-slate-650 space-y-1 font-light">
          <li><span class="text-emerald-600 font-semibold">✓</span> Các đề xuất 1, 2, 4, 5 đều hợp lý và em đã áp dụng.</li>
          <li><span class="text-rose-500 font-semibold">× Điểm không phù hợp:</span> Đề xuất 3 không hoàn toàn phù hợp vì giọng văn học thuật tiếng Việt thường sử dụng câu bị động nhiều hơn tiếng Anh.</li>
          <li><span class="text-blue-600 font-semibold">&rarr; Kết quả:</span> Bài viết cuối cùng là sản phẩm kết hợp giữa nội dung AI gợi ý (≈ 40%) và nội dung em tự nghiên cứu, phân tích, chỉnh sửa (≈ 60%).</li>
        </ul>
      </div>
    </div>

    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">2.3 Trích dẫn việc sử dụng AI</h4>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light font-light font-light">
      Theo hướng dẫn trích dẫn APA 7th Edition cho các công cụ AI tạo sinh, em trích dẫn như sau:
    </p>

    <!-- Declaration Block -->
    <div class="bg-indigo-50/25 border-l-4 border-indigo-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm">
      <p class="font-bold text-slate-800 mb-1">Khai báo sử dụng AI trong bài viết:</p>
      <p class="text-slate-650 italic leading-relaxed font-light">
        “Bài tổng hợp này được thực hiện với sự hỗ trợ của các công cụ AI tạo sinh. Cụ thể: Google Gemini 2.5 Pro (phiên bản tháng 4/2026) được sử dụng để hỗ trợ thu thập và sàng lọc danh sách xu hướng ban đầu. ChatGPT GPT-4o (phiên bản tháng 4/2026) được sử dụng để hỗ trợ tổng hợp và review cấu trúc bài viết. Tất cả nội dung do AI tạo ra đều đã được tác giả kiểm chứng, đánh giá và chỉnh sửa đáng kể. Các nguồn trích dẫn đã được xác minh độc lập thông qua Google Scholar, IEEE Xplore và ACM Digital Library.”
      </p>
    </div>

    <!-- Citation Block -->
    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
      <p class="text-slate-750 font-bold mb-2">Trích dẫn theo APA:</p>
      <p class="text-slate-600">OpenAI. (2026). ChatGPT (Apr 2026 version) [Large language model]. https://chatgpt.com</p>
      <p class="text-slate-600">Google. (2026). Gemini (2.5 Pro version) [Large language model]. https://gemini.google.com</p>
    </div>
  </section>

  <!-- 3. Phân tích đạo đức -->
  <section>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">3 Phân tích các vấn đề đạo đức liên quan đến việc sử dụng AI trong học thuật</h3>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light font-light font-light font-light">
      Việc tích hợp AI tạo sinh vào môi trường học thuật đặt ra nhiều vấn đề đạo đức phức tạp, đòi hỏi sự cân nhắc kỹ lưỡng từ cả người học lẫn người dạy. Trong phần này, em phân tích ba vấn đề cốt lõi với các ví dụ minh họa cụ thể.
    </p>

    <!-- 3.1 -->
    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-4 mb-2">3.1 Ranh giới giữa hỗ trợ hợp lý và gian lận học thuật</h4>
    <div class="bg-amber-50/30 border-l-4 border-amber-500 p-4 rounded-r-xl my-3 text-xs sm:text-sm">
      <p class="font-bold text-amber-800 mb-1">Vấn đề đạo đức 1: Ranh giới mong manh</p>
      <p class="text-slate-650 italic">Ranh giới giữa việc sử dụng AI như công cụ hỗ trợ hợp lý và gian lận học thuật không phải lúc nào cũng rõ ràng. Sự mơ hồ này tạo ra một “vùng xám” khiến cả sinh viên lẫn giảng viên gặp khó khăn trong việc xác định hành vi nào là chấp nhận được.</p>
    </div>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Có thể hình dung việc sử dụng AI trong học thuật trên một phổ liên tục (spectrum) từ hỗ trợ đến gian lận, được minh họa trong Bảng 3.
    </p>

    <!-- Table 3 -->
    <div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs">
      <table class="w-full text-left border-collapse bg-white">
        <thead>
          <tr class="bg-slate-50/80 border-b border-slate-200">
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left w-20">Mức độ</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Mô tả hành vi</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left w-32">Đánh giá</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-xs sm:text-sm text-slate-650">
          <tr class="hover:bg-slate-50/30 transition-colors bg-emerald-50/10">
            <td class="px-4 py-3 font-bold text-emerald-700">1</td>
            <td class="px-4 py-3 font-light">Sử dụng AI để kiểm tra chính tả, ngữ pháp (Grammarly, LanguageTool)</td>
            <td class="px-4 py-3 text-emerald-600 font-semibold">Hợp lý</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors bg-emerald-50/10">
            <td class="px-4 py-3 font-bold text-emerald-700">2</td>
            <td class="px-4 py-3 font-light">Sử dụng AI để brainstorm ý tưởng, sau đó tự phát triển nội dung</td>
            <td class="px-4 py-3 text-emerald-600 font-semibold">Hợp lý</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors bg-emerald-50/10">
            <td class="px-4 py-3 font-bold text-emerald-700">3</td>
            <td class="px-4 py-3 font-light">Yêu cầu AI giải thích một khái niệm khó để hiểu rõ hơn</td>
            <td class="px-4 py-3 text-emerald-600 font-semibold">Hợp lý</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors bg-amber-50/10">
            <td class="px-4 py-3 font-bold text-amber-700">4</td>
            <td class="px-4 py-3 font-light">Sử dụng AI tạo dàn ý, sau đó tự viết nội dung chi tiết</td>
            <td class="px-4 py-3 text-amber-600 font-semibold">Vùng xám</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors bg-amber-50/10">
            <td class="px-4 py-3 font-bold text-amber-700">5</td>
            <td class="px-4 py-3 font-light">Yêu cầu AI viết một đoạn văn, sau đó chỉnh sửa đáng kể</td>
            <td class="px-4 py-3 text-amber-600 font-semibold">Vùng xám</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors bg-rose-50/10">
            <td class="px-4 py-3 font-bold text-rose-700">6</td>
            <td class="px-4 py-3 font-light">Sao chép nguyên bản đầu ra AI, chỉ chỉnh sửa nhỏ</td>
            <td class="px-4 py-3 text-rose-600 font-semibold">Nguy hiểm</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors bg-red-50/20">
            <td class="px-4 py-3 font-bold text-red-700">7</td>
            <td class="px-4 py-3 font-light">Nộp bài hoàn toàn do AI tạo mà không khai báo</td>
            <td class="px-4 py-3 text-red-650 font-bold">Gian lận</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs sm:text-sm text-slate-500 italic my-2">Bảng 3: Phổ sử dụng AI: từ hỗ trợ hợp lý đến gian lận học thuật</p>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      <span class="font-semibold text-slate-800">Ví dụ minh họa:</span> Trong quá trình thực hiện nhiệm vụ ở Phần 2, em đã ở mức 4–5 trên phổ này — sử dụng AI để tổng hợp thông tin ban đầu, sau đó tự đánh giá, chỉnh sửa và bổ sung đáng kể (60% nội dung cuối cùng là do em tự nghiên cứu). Điều quan trọng là em đã công khai và minh bạch về việc sử dụng AI.
    </p>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      <span class="font-semibold text-slate-800">Mối liên hệ với giáo dục:</span> Theo khuyến nghị của UNESCO (2021), ranh giới này cần được xác định bởi mục tiêu học tập (learning objectives) của từng bài tập. Nếu mục tiêu là đánh giá khả năng tư duy phản biện, thì việc sử dụng AI để tạo nội dung — dù có khai báo — vẫn có thể không phù hợp.
    </p>

    <!-- 3.2 -->
    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">3.2 Vấn đề về quyền sở hữu trí tuệ và trích dẫn</h4>
    <div class="bg-red-50/15 border-l-4 border-red-500 p-4 rounded-r-xl my-3 text-xs sm:text-sm">
      <p class="font-bold text-red-800 mb-1">Vấn đề đạo đức 2: Ai là tác giả?</p>
      <p class="text-slate-650 italic">Khi AI tạo ra nội dung, câu hỏi “Ai là tác giả thực sự?” trở nên phức tạp chưa từng có. Các khung pháp lý hiện tại — được thiết kế cho sáng tạo của con người — chưa đủ để giải quyết vấn đề này.</p>
    </div>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Vấn đề sở hữu trí tuệ liên quan đến AI trong học thuật có ba chiều:
    </p>
    <ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
      <li class="leading-relaxed"><strong class="text-slate-800 font-medium">AI không thể là tác giả:</strong> Đồng thuận quốc tế từ các nhà xuất bản lớn (Elsevier, Springer Nature, Wiley, APA) khẳng định AI không thể được liệt kê là tác giả hoặc đồng tác giả. Lý do: tác quyền đòi hỏi trách nhiệm pháp lý, khả năng đồng ý, và tính giải trình — những điều AI không có.</li>
      <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Rủi ro “Source Confabulation” (bịa nguồn):</strong> Một vấn đề nghiêm trọng là AI có thể bịa ra các trích dẫn, tên bài báo, dữ liệu hoàn toàn không tồn tại (hallucination). Trong quá trình thực hiện ở Phần 2, em đã phát hiện 3/10 nguồn AI đưa ra là không chính xác — minh chứng rõ ràng cho rủi ro này.</li>
      <li class="leading-relaxed"><strong class="text-slate-800 font-medium">Bảo mật dữ liệu:</strong> Việc upload dữ liệu nghiên cứu chưa công bố lên các nền tảng AI công cộng có thể vi phạm cam kết bảo mật, đặc biệt trong nghiên cứu liên ngành hoặc nghiên cứu có tính nhạy cảm cao.</li>
    </ul>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      <strong class="text-slate-800 font-medium">Giải pháp đề xuất:</strong> Áp dụng chuẩn trích dẫn APA 7th Edition cho AI (như đã minh họa ở Phần 2), đồng thời luôn xác minh độc lập tất cả các nguồn do AI cung cấp trước khi đưa vào bài viết.
    </p>

    <!-- 3.3 -->
    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">3.3 Tác động đến quá trình học tập và phát triển kỹ năng</h4>
    <div class="bg-indigo-50/20 border-l-4 border-indigo-500 p-4 rounded-r-xl my-3 text-xs sm:text-sm">
      <p class="font-bold text-indigo-800 mb-1">Vấn đề đạo đức 3: AI làm chúng ta thông minh hơn hay lười hơn?</p>
      <p class="text-slate-650 italic">Sử dụng AI quá mức có thể tạo ra “sự lệ thuộc nhận thức” (cognitive dependency), khiến người học mất dần khả năng tư duy độc lập, giải quyết vấn đề và chịu đựng sự không chắc chắn (tolerance for ambiguity).</p>
    </div>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Tác động của AI đến quá trình học tập có hai mặt đối lập:
    </p>

    <!-- Table 4 -->
    <div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs">
      <table class="w-full text-left border-collapse bg-white">
        <thead>
          <tr class="bg-slate-50/80 border-b border-slate-200">
            <th class="px-4 py-3 text-xs font-bold text-emerald-800 bg-emerald-50/20 uppercase tracking-wider text-left">Tác động tích cực</th>
            <th class="px-4 py-3 text-xs font-bold text-rose-800 bg-rose-50/20 uppercase tracking-wider text-left">Tác động tiêu cực</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-xs sm:text-sm text-slate-650">
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-light">Giúp tiếp cận kiến thức nhanh hơn, vượt qua rào cản ngôn ngữ</td>
            <td class="px-4 py-3 font-light">Giảm động lực tự nghiên cứu, dễ “đi đường tắt”</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-light">Tạo cơ hội học tập cá nhân hóa (adaptive learning)</td>
            <td class="px-4 py-3 font-light">Suy giảm kỹ năng viết, tư duy phản biện nếu phụ thuộc quá mức</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-light">Hỗ trợ sinh viên yếu rút ngắn khoảng cách với sinh viên giỏi</td>
            <td class="px-4 py-3 font-light">Gia tăng khoảng cách kỹ thuật số (digital divide)</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-light">Tăng năng suất, cho phép tập trung vào tư duy bậc cao</td>
            <td class="px-4 py-3 font-light">Khó đánh giá năng lực thực sự của sinh viên</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs sm:text-sm text-slate-500 italic my-2">Bảng 4: Tác động hai mặt của AI đến quá trình học tập</p>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      <strong class="text-slate-800 font-medium">Ví dụ minh họa từ trải nghiệm cá nhân:</strong> Trong quá trình làm dự án AuctionUET (hệ thống đấu giá trực tuyến), em nhận thấy:
    </p>
    <ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
      <li class="leading-relaxed"><strong class="text-slate-850 font-medium">Tác động tích cực:</strong> AI giúp em nhanh chóng hiểu các design pattern phức tạp (Observer, Strategy) và viết boilerplate code, tiết kiệm thời gian để tập trung vào logic nghiệp vụ.</li>
      <li class="leading-relaxed"><strong class="text-slate-850 font-medium">Tác động tiêu cực:</strong> Có lúc em nhận thấy mình “lười suy nghĩ” hơn — thay vì tự debug, em có xu hướng copy lỗi vào AI để tìm giải pháp ngay. Điều này khiến em mất đi cơ hội rèn luyện kỹ năng debugging.</li>
    </ul>

    <!-- 3.4 -->
    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2">3.4 Mối liên hệ giữa ba vấn đề đạo đức</h4>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Ba vấn đề trên không tồn tại độc lập mà có mối liên hệ chặt chẽ với nhau (xem Hình 1):
    </p>
    <ul class="list-disc pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
      <li class="leading-relaxed">Khi ranh giới hỗ trợ/gian lận không rõ ràng &rarr; sinh viên dễ lạm dụng AI &rarr; suy giảm kỹ năng học tập.</li>
      <li class="leading-relaxed">Khi suy giảm kỹ năng &rarr; mất khả năng kiểm chứng đầu ra AI &rarr; rủi ro vi phạm sở hữu trí tuệ (sử dụng nguồn bịa, đạo văn vô ý).</li>
      <li class="leading-relaxed">Khi vi phạm sở hữu trí tuệ &rarr; mất niềm tin trong cộng đồng học thuật &rarr; buộc phải siết chặt ranh giới sử dụng AI.</li>
    </ul>

    <!-- Beautiful CSS Diagram Flow -->
    <div class="my-6 p-6 bg-slate-50/50 rounded-2xl border border-slate-200/60 shadow-xs flex flex-col items-center">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-3xl">
        <!-- Circle 1 -->
        <div class="flex-1 bg-white p-4 rounded-xl border border-amber-200 shadow-xs text-center relative">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">1. Ranh giới</div>
          <p class="text-xs sm:text-sm text-slate-800 font-semibold mt-2">Mơ hồ về hỗ trợ/gian lận</p>
          <p class="text-xs text-slate-500 mt-1">Dẫn đến lạm dụng AI và suy giảm kỹ năng học tập tự thân.</p>
        </div>

        <!-- Arrow (desktop horizontal, mobile vertical) -->
        <div class="text-slate-400 font-bold text-xl md:rotate-0 rotate-90">&rarr;</div>

        <!-- Circle 2 -->
        <div class="flex-1 bg-white p-4 rounded-xl border border-rose-200 shadow-xs text-center relative">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">2. Lệ thuộc</div>
          <p class="text-xs sm:text-sm text-slate-800 font-semibold mt-2">Suy giảm kỹ năng & nhận thức</p>
          <p class="text-xs text-slate-500 mt-1">Mất đi năng lực đánh giá và kiểm chứng; rủi ro vi phạm SHTT.</p>
        </div>

        <!-- Arrow -->
        <div class="text-slate-400 font-bold text-xl md:rotate-0 rotate-90">&rarr;</div>

        <!-- Circle 3 -->
        <div class="flex-1 bg-white p-4 rounded-xl border border-indigo-200 shadow-xs text-center relative">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3. Hậu quả</div>
          <p class="text-xs sm:text-sm text-slate-800 font-semibold mt-2">Vi phạm SHTT & Đạo văn</p>
          <p class="text-xs text-slate-500 mt-1">Làm mất niềm tin học thuật, buộc siết chặt quy chế.</p>
        </div>
      </div>
      
      <!-- Connective Line Back -->
      <div class="mt-4 text-xs text-slate-500 italic flex items-center gap-1">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-slate-400"></span> 
        Tạo nên một vòng lặp tiêu cực ảnh hưởng trực tiếp đến liêm chính và sự phát triển năng lực của sinh viên.
      </div>
    </div>
    <p class="text-xs sm:text-sm text-slate-500 italic my-2 text-center">Hình 1: Mối liên hệ giữa ba vấn đề đạo đức trong sử dụng AI học thuật</p>
  </section>

  <!-- 4. Bộ nguyên tắc cá nhân -->
  <section>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">4 Bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm</h3>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Dựa trên quá trình nghiên cứu chính sách (Phần 1), trải nghiệm thực tế (Phần 2), và phân tích đạo đức (Phần 3), em xây dựng bộ 7 nguyên tắc cá nhân về việc sử dụng AI có trách nhiệm trong học tập. Mỗi nguyên tắc đều được liên kết trực tiếp với các vấn đề đạo đức đã phân tích.
    </p>

    <!-- The 7 principles formatted visually -->
    <div class="space-y-4 my-6">
      <div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
        <p class="text-sm sm:text-base font-bold text-slate-800"><span class="text-indigo-650">Nguyên tắc 1:</span> Minh bạch tuyệt đối (Radical Transparency)</p>
        <p class="text-xs sm:text-sm text-slate-650 mt-1"><strong class="text-slate-800 font-medium">Nội dung:</strong> Luôn khai báo rõ ràng, đầy đủ việc sử dụng AI trong mọi sản phẩm học thuật — bao gồm tên công cụ, phiên bản, mục đích sử dụng, và mức độ đóng góp của AI.</p>
        <p class="text-xs sm:text-sm text-slate-650"><strong class="text-slate-800 font-medium">Cách áp dụng:</strong> Thêm phần “Khai báo sử dụng AI” ở cuối mỗi bài tập, báo cáo, sử dụng chuẩn trích dẫn APA 7th Edition.</p>
        <p class="text-xs text-indigo-700 mt-1 italic"><strong class="font-semibold">Liên kết đạo đức:</strong> Giải quyết trực tiếp vấn đề ranh giới hỗ trợ/gian lận — khi công khai, hành vi sử dụng AI chuyển từ “vùng xám” sang “hợp lệ”.</p>
      </div>

      <div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
        <p class="text-sm sm:text-base font-bold text-slate-800"><span class="text-indigo-650">Nguyên tắc 2:</span> AI là trợ lý, không phải tác giả (AI as Assistant, Not Author)</p>
        <p class="text-xs sm:text-sm text-slate-650 mt-1"><strong class="text-slate-800 font-medium">Nội dung:</strong> Chỉ sử dụng AI để hỗ trợ các bước trong quy trình (brainstorm, tóm tắt, kiểm tra), không để AI thay thế toàn bộ quá trình tư duy và sáng tạo.</p>
        <p class="text-xs sm:text-sm text-slate-650"><strong class="text-slate-800 font-medium">Cách áp dụng:</strong> Áp dụng quy tắc “60/40” — ít nhất 60% nội dung cuối cùng phải là kết quả của tư duy và nghiên cứu cá nhân, tối đa 40% là nội dung được AI gợi ý (đã qua chỉnh sửa).</p>
        <p class="text-xs text-indigo-700 mt-1 italic"><strong class="font-semibold">Liên kết đạo đức:</strong> Giải quyết vấn đề tác động đến kỹ năng — duy trì vai trò chủ động của người học trong quá trình tạo ra tri thức.</p>
      </div>

      <div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
        <p class="text-sm sm:text-base font-bold text-slate-800"><span class="text-indigo-650">Nguyên tắc 3:</span> Kiểm chứng mọi thông tin (Verify Everything)</p>
        <p class="text-xs sm:text-sm text-slate-650 mt-1"><strong class="text-slate-800 font-medium">Nội dung:</strong> Không bao giờ tin tưởng mù quáng vào đầu ra của AI. Luôn xác minh độc lập mọi dữ kiện, số liệu, trích dẫn, và nguồn tham khảo mà AI cung cấp.</p>
        <p class="text-xs sm:text-sm text-slate-650"><strong class="text-slate-800 font-medium">Cách áp dụng:</strong> Với mỗi nguồn AI đưa ra, tra cứu trực tiếp trên cơ sở dữ liệu gốc (Google Scholar, IEEE Xplore, ACM DL). Đánh dấu các thông tin đã xác minh (✓) và chưa xác minh (?).</p>
        <p class="text-xs text-indigo-700 mt-1 italic"><strong class="font-semibold">Liên kết đạo đức:</strong> Giải quyết trực tiếp vấn đề sở hữu trí tuệ và rủi ro “Source Confabulation” — tránh sử dụng nguồn bịa, đạo văn vô ý.</p>
      </div>

      <div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
        <p class="text-sm sm:text-base font-bold text-slate-800"><span class="text-indigo-650">Nguyên tắc 4:</span> Tôn trọng mục tiêu học tập (Respect Learning Objectives)</p>
        <p class="text-xs sm:text-sm text-slate-650 mt-1"><strong class="text-slate-800 font-medium">Nội dung:</strong> Trước khi sử dụng AI cho bất kỳ bài tập nào, tự hỏi: “Mục tiêu học tập của bài tập này là gì? Việc sử dụng AI có cản trở việc đạt được mục tiêu đó không?”</p>
        <p class="text-xs sm:text-sm text-slate-650"><strong class="text-slate-800 font-medium">Cách áp dụng:</strong> Nếu bài tập nhằm đánh giá kỹ năng viết luận &rarr; không dùng AI viết nội dung. Nếu bài tập nhằm đánh giá kỹ năng nghiên cứu &rarr; có thể dùng AI hỗ trợ tìm kiếm nhưng tự phân tích.</p>
        <p class="text-xs text-indigo-700 mt-1 italic"><strong class="font-semibold">Liên kết đạo đức:</strong> Giải quyết vấn đề ranh giới hỗ trợ/gian lận và tác động đến kỹ năng — đảm bảo AI phục vụ mục tiêu giáo dục thay vì phá vỡ nó.</p>
      </div>

      <div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
        <p class="text-sm sm:text-base font-bold text-slate-800"><span class="text-indigo-650">Nguyên tắc 5:</span> Bảo vệ dữ liệu và quyền riêng tư (Data Protection)</p>
        <p class="text-xs sm:text-sm text-slate-650 mt-1"><strong class="text-slate-800 font-medium">Nội dung:</strong> Không upload dữ liệu nhạy cảm, nghiên cứu chưa công bố, thông tin cá nhân của người khác, hoặc mã nguồn có bản quyền lên các nền tảng AI công cộng.</p>
        <p class="text-xs sm:text-sm text-slate-650"><strong class="text-slate-800 font-medium">Cách áp dụng:</strong> Sử dụng chế độ “không lưu lịch sử” khi có sẵn. Đọc kỹ điều khoản dịch vụ (ToS) của từng nền tảng AI. Với dữ liệu nhạy cảm, ưu tiên các giải pháp AI on-premise hoặc API có cam kết bảo mật.</p>
        <p class="text-xs text-indigo-700 mt-1 italic"><strong class="font-semibold">Liên kết đạo đức:</strong> Giải quyết vấn đề sở hữu trí tuệ — bảo vệ quyền lợi của bản thân và người khác khi tương tác với AI.</p>
      </div>

      <div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
        <p class="text-sm sm:text-base font-bold text-slate-800"><span class="text-indigo-650">Nguyên tắc 6:</span> Rèn luyện tư duy phản biện song song (Parallel Critical Thinking)</p>
        <p class="text-xs sm:text-sm text-slate-650 mt-1"><strong class="text-slate-800 font-medium">Nội dung:</strong> Thường xuyên thực hành “làm trước, so sánh sau” — tự giải quyết vấn đề trước, sau đó mới dùng AI để đối chiếu, bổ sung. Duy trì nhật ký học tập (learning log) để theo dõi sự phát triển kỹ năng.</p>
        <p class="text-xs sm:text-sm text-slate-650"><strong class="text-slate-800 font-medium">Cách áp dụng:</strong> Mỗi tuần dành ít nhất 2–3 bài tập làm hoàn toàn không có AI để tự đánh giá năng lực thực sự. So sánh kết quả “có AI” và “không AI” để nhận biết điểm mạnh/yếu.</p>
        <p class="text-xs text-indigo-700 mt-1 italic"><strong class="font-semibold">Liên kết đạo đức:</strong> Giải quyết trực tiếp vấn đề tác động đến kỹ năng — chống lại “sự lệ thuộc nhận thức” (cognitive dependency).</p>
      </div>

      <div class="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
        <p class="text-sm sm:text-base font-bold text-slate-800"><span class="text-indigo-650">Nguyên tắc 7:</span> Tuân thủ quy định và cập nhật liên tục (Comply & Evolve)</p>
        <p class="text-xs sm:text-sm text-slate-650 mt-1"><strong class="text-slate-800 font-medium">Nội dung:</strong> Luôn tuân thủ chính sách cụ thể của trường, khoa, và giảng viên về việc sử dụng AI. Chủ động cập nhật kiến thức khi chính sách thay đổi.</p>
        <p class="text-xs sm:text-sm text-slate-650"><strong class="text-slate-800 font-medium">Cách áp dụng:</strong> Đầu mỗi học kỳ, đọc lại đề cương (Syllabus) của tất cả các môn. Nếu không chắc chắn, hỏi giảng viên trước khi sử dụng. Theo dõi các hướng dẫn mới từ UNESCO, Bộ GD&ĐT, và nhà trường.</p>
        <p class="text-xs text-indigo-700 mt-1 italic"><strong class="font-semibold">Liên kết đạo đức:</strong> Tổng hợp cả ba vấn đề — đảm bảo hành vi sử dụng AI luôn nằm trong khuôn khổ quy định và tiêu chuẩn đạo đức hiện hành.</p>
      </div>
    </div>

    <!-- Table 5 Matrix -->
    <h4 class="text-sm sm:text-base font-semibold text-slate-750 mt-5 mb-2 font-semibold">Bảng 5: Ma trận liên kết: Nguyên tắc cá nhân — Vấn đề đạo đức</h4>
    <div class="overflow-x-auto my-6 border border-slate-200/60 rounded-2xl shadow-xs">
      <table class="w-full text-left border-collapse bg-white">
        <thead>
          <tr class="bg-slate-50/80 border-b border-slate-200">
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">Nguyên tắc</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center w-28 bg-amber-50/20 text-amber-800">Ranh giới</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center w-28 bg-rose-50/20 text-rose-800">Sở hữu TT</th>
            <th class="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-center w-28 bg-indigo-50/20 text-indigo-800">Kỹ năng</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-xs sm:text-sm text-slate-650">
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-800">1. Minh bạch tuyệt đối</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-800">2. AI là trợ lý</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-800">3. Kiểm chứng mọi thứ</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-800">4. Tôn trọng mục tiêu HT</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-800">5. Bảo vệ dữ liệu</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-800">6. Tư duy phản biện</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-slate-300">&mdash;</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
          </tr>
          <tr class="hover:bg-slate-50/30 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-800">7. Tuân thủ & cập nhật</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
            <td class="px-4 py-3 text-center text-emerald-600 font-bold text-lg">&bull;</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- 5. Infographic -->
  <section>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">5 Infographic: Sử dụng AI có trách nhiệm trong học thuật</h3>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Infographic dưới đây (Hình 2) được thiết kế nhằm truyền tải thông điệp cô đọng về việc sử dụng AI có trách nhiệm trong môi trường học thuật, tổng hợp từ các phân tích trong báo cáo này.
    </p>
    
    <div class="my-6 flex flex-col items-center">
      <div class="border border-slate-200/80 rounded-2xl overflow-hidden shadow-md max-w-2xl bg-white p-2">
        <img src="/files/bai6/tmpluifne_ta-huu-cuong_25020053_tuan6.jpg" alt="Infographic: 7 nguyên tắc vàng về sử dụng AI có trách nhiệm trong học thuật" class="w-full h-auto rounded-xl" />
      </div>
      <p class="text-xs sm:text-sm text-slate-500 italic mt-3 text-center">Hình 2: Infographic: 7 nguyên tắc vàng về sử dụng AI có trách nhiệm trong học thuật</p>
    </div>
  </section>

  <!-- 6. Kết luận -->
  <section>
    <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-6 mb-3 border-b border-slate-200/60 pb-2 uppercase tracking-wide">6 Kết luận</h3>
    <p class="text-sm sm:text-base text-slate-650 leading-relaxed my-3 font-light">
      Qua quá trình thực hiện bài tập này, em đã có cơ hội nghiên cứu, trải nghiệm và phản tư sâu sắc về việc sử dụng AI có trách nhiệm trong học thuật. Một số bài học rút ra:
    </p>
    <ol class="list-decimal pl-5 space-y-2 my-3 text-slate-650 text-sm sm:text-base font-light">
      <li class="leading-relaxed"><strong>Chính sách đang tiến hóa:</strong> Các trường đại học Việt Nam (ĐHQGHN, VinUni, ĐH FPT) đã và đang chủ động xây dựng chính sách sử dụng AI — xu hướng chung là khuyến khích có kiểm soát, không cấm đoán. Tuy nhiên, tốc độ phát triển của AI luôn đi trước chính sách, đòi hỏi sự cập nhật liên tục.</li>
      <li class="leading-relaxed"><strong>Trải nghiệm thực tế cho thấy:</strong> AI là trợ lý đắc lực nhưng không hoàn hảo. Hiện tượng “hallucination” (bịa nguồn) là rủi ro thực tế mà bất kỳ ai sử dụng AI đều phải đối mặt. Kỹ năng đánh giá và kiểm chứng đầu ra AI là kỹ năng thiết yếu trong kỷ nguyên số.</li>
      <li class="leading-relaxed"><strong>Đạo đức không phải là rào cản:</strong> Sử dụng AI có đạo đức không hề làm giảm hiệu quả học tập. Ngược lại, khi tiếp cận AI với tư duy phản biện và trách nhiệm, quá trình học tập trở nên sâu sắc và có ý nghĩa hơn.</li>
      <li class="leading-relaxed"><strong>Bộ nguyên tắc cá nhân giúp em có “la bàn đạo đức”</strong> để điều hướng trong môi trường AI thay đổi nhanh chóng. 7 nguyên tắc này không phải là quy tắc cứng nhắc mà là kim chỉ nam linh hoạt, sẽ được cập nhật theo thời gian.</li>
    </ol>

    <!-- Custom quotes layout -->
    <div class="my-6 p-6 bg-slate-900 text-slate-100 rounded-2xl relative overflow-hidden shadow-lg border border-slate-800 text-center">
      <p class="text-base sm:text-lg italic font-medium leading-relaxed text-indigo-300">
        “Trong kỷ nguyên AI, giá trị của người học không nằm ở khả năng nhớ thông tin hay viết văn nhanh — mà nằm ở khả năng đặt câu hỏi đúng, đánh giá phản biện, và chịu trách nhiệm về những gì mình tạo ra.”
      </p>
    </div>

    <!-- References -->
    <div class="mt-8 border-t border-slate-200/60 pt-4">
      <h4 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tài liệu tham khảo:</h4>
      <ol class="list-none pl-0 space-y-2 text-xs text-slate-550 leading-relaxed font-light">
        <li>[1] UNESCO. (2021). Recommendation on the Ethics of Artificial Intelligence. United Nations Educational, Scientific and Cultural Organization. <a href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline">https://www.unesco.org/en/artificial-intelligence/recommendation-ethics</a></li>
        <li>[2] UNESCO. (2023). Guidance for Generative AI in Education and Research. <a href="https://www.unesco.org/en/digital-education/ai-future-learning" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://www.unesco.org/en/digital-education/ai-future-learning</a></li>
        <li>[3] Đại học Quốc gia Hà Nội. (2025). Sinh viên ĐHQGHN sẽ học AI và công nghệ số từ năm nhất. <a href="https://vnu.edu.vn/sinh-vien-dhqghn-se-hoc-ai-va-cong-nghe-so-tu-nam-nhat-post38469.html" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://vnu.edu.vn/sinh-vien-dhqghn-se-hoc-ai-va-cong-nghe-so-tu-nam-nhat-post38469.html</a></li>
        <li>[4] VinUni. (2024). Guidelines on Student Use of Generative Artificial Intelligence. VinUniversity Policy Library. <a href="https://policy.vinuni.edu.vn/all-policies/guidelines-on-student-use-of-generative-artificial-intelligence/" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://policy.vinuni.edu.vn/...</a></li>
        <li>[5] Đại học FPT. (2024). Sinh viên Trường Đại học FPT báo cáo 3 nghiên cứu về ứng dụng AI trong giáo dục tại hội nghị quốc tế. <a href="https://daihoc.fpt.edu.vn/hoat-dong-nha-truong/tin-tuc-chung/sinh-vien-truong-dai-hoc-fpt-bao-cao-3-nghien-cuu-ve-ung-dung-ai-trong-giao-duc-tai-hoi-nghi-quoc-te/" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://daihoc.fpt.edu.vn/...</a></li>
        <li>[6] Bộ Giáo dục và Đào tạo. (2025). Quyết định 3439/QĐ-BGDĐT Khung nội dung thí điểm giáo dục trí tuệ nhân tạo cho học sinh phổ thông. Thư viện Pháp luật. <a href="https://thuvienphapluat.vn/van-ban/Cong-nghe-thong-tin/Quyet-dinh-3439-QD-BGDDT-2025-Khung-noi-dung-thi-diem-giao-duc-tri-tue-nhan-tao-cho-hoc-sinh-pho-thong-684660.aspx" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://thuvienphapluat.vn/...</a></li>
        <li>[7] APA. (2023). How to cite ChatGPT. American Psychological Association. <a href="https://apastyle.apa.org/blog/how-to-cite-chatgpt" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://apastyle.apa.org/blog/how-to-cite-chatgpt</a></li>
        <li>[8] Cotton, D. R. E., Cotton, P. A., & Shipway, J. R. (2024). Chatting and cheating: Ensuring academic integrity in the era of ChatGPT. Innovations in Education and Teaching International, 61(2), 228–239.</li>
        <li>[9] Lund, B. D., & Wang, T. (2023). Chatting about ChatGPT: How may AI and GPT impact academia and libraries? Library Hi Tech News, 40(3), 26–29.</li>
        <li>[10] OpenAI. (2026). ChatGPT (Apr 2026 version) [Large language model]. <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://chatgpt.com</a></li>
        <li>[11] Google. (2026). Gemini (2.5 Pro version) [Large language model]. <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="text-indigo-650 hover:underline">https://gemini.google.com</a></li>
      </ol>
    </div>

    <!-- AI Declaration for this report -->
    <div class="mt-6 p-4 bg-slate-100/80 rounded-xl text-xs text-slate-500 leading-relaxed font-light">
      <p class="font-semibold text-slate-650 mb-1">Khai báo sử dụng AI trong báo cáo này:</p>
      <p>
        Báo cáo này được thực hiện với sự hỗ trợ của các công cụ AI tạo sinh: Google Gemini 2.5 Pro (tháng 5/2026): Hỗ trợ nghiên cứu chính sách AI của các trường đại học, thu thập thông tin về khung pháp lý và hướng dẫn UNESCO. ChatGPT GPT-4o (tháng 5/2026): Hỗ trợ tổng hợp tài liệu trong nhiệm vụ học tập minh họa (Phần 2). Antigravity AI (tháng 5/2026): Hỗ trợ soạn thảo và định dạng báo cáo. Mức độ đóng góp: Nội dung phân tích, nhận định, bộ nguyên tắc cá nhân, và cấu trúc báo cáo do tác giả xây dựng. AI được sử dụng chủ yếu trong giai đoạn thu thập thông tin ban đầu. Tất cả thông tin đã được kiểm chứng và chỉnh sửa bởi tác giả.
      </p>
    </div>
  </section>
</div>`,
    resultType: "Báo cáo liêm chính & Infographic truyền thông",
    colSpan: 1,
    imageUrl: "/files/bai6/tmpluifne_ta-huu-cuong_25020053_tuan6.jpg",
    pdfUrl: "/files/tmpluifne_ta-huu-cuong_25020053_tuan6.pdf",
    tools: ["Google Gemini", "ChatGPT", "Canva", "APA Style"],
    steps: [
      {
        title: "Infographic - 7 nguyên tắc vàng sử dụng AI có trách nhiệm",
        desc: "Poster infographic tuyên truyền về 7 nguyên tắc sử dụng AI có trách nhiệm và đạo đức trong học tập do em tự thiết kế.",
        image: "/files/bai6/tmpluifne_ta-huu-cuong_25020053_tuan6.jpg"
      }
    ]
  }
];

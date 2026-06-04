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
  steps?: { title: string; desc: string }[];
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
    process: "Thực hiện tuần tự 12 bước theo hướng dẫn trực tiếp trên hệ điều hành Windows. Chụp ảnh màn hình minh chứng cho các thao tác quan trọng như tạo cây thư mục, sao chép/di chuyển tệp tin và khôi phục từ Recycle Bin. Xuất báo cáo kết quả dạng PDF.",
    resultType: "Thư mục thực hành & Báo cáo PDF minh chứng",
    colSpan: 2,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    pdfUrl: "/files/tmpgxolew_thuchanh_tahuucuong_25020053.pdf",
    tools: ["Windows File Explorer", "Windows Recycle Bin", "Microsoft Word"],
    steps: [
      { title: "1. Mở File Explorer", desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ." },
      { title: "2. Truy cập thư mục Documents", desc: "Ở cột bên trái, nhấp vào This PC, sau đó truy cập Documents (hoặc phân vùng ổ D: / E: nếu có)." },
      { title: "3. Tạo thư mục thực hành", desc: "Nhấp chuột phải vào khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_TaHuuCuong. Nhấn Enter." },
      { title: "4. Vào thư mục vừa tạo", desc: "Nhấp đúp chuột vào thư mục ThucHanh_TaHuuCuong để bắt đầu làm việc bên trong." },
      { title: "5. Tạo tệp văn bản mới", desc: "Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên mặc định ban đầu là GhiChu.txt. Nhấn Enter." },
      { title: "6. Đổi tên tệp tin", desc: "Nhấp chuột phải vào GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter." },
      { title: "7. Tạo thư mục con", desc: "Trong thư mục ThucHanh_TaHuuCuong, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu." },
      { title: "8. Sao chép tệp tin (Copy)", desc: "Nhấp chuột phải vào GhiChuQuanTrong.txt -> Copy (Ctrl+C). Vào thư mục TaiLieu, chuột phải -> Paste (Ctrl+V) để tạo bản sao." },
      { title: "9. Di chuyển tệp tin (Cut)", desc: "Quay lại thư mục gốc. Tạo file DiChuyen.txt. Chuột phải -> Cut (Ctrl+X). Vào thư mục TaiLieu -> Paste (Ctrl+V) để di chuyển file." },
      { title: "10. Xóa tệp tin tạm thời", desc: "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Recycle Bin." },
      { title: "11. Xóa vĩnh viễn", desc: "Chọn tệp DiChuyen.txt trong thư mục TaiLieu, nhấn tổ hợp Shift + Delete. Bấm xác nhận trên cảnh báo hiện lên để xóa hoàn toàn." },
      { title: "12. Khôi phục từ Thùng rác", desc: "Mở Recycle Bin ngoài Desktop. Tìm tệp GhiChuQuanTrong.txt, nhấp chuột phải và chọn Restore để đưa tệp về lại thư mục ban đầu." }
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
    process: "Xác định chủ đề nghiên cứu CNTT. Thực hiện tìm kiếm nâng cao với các toán tử trên Google Scholar. Lọc và lưu trữ các bài báo khoa học, sách. Tiến hành phản biện, đánh giá từng nguồn theo tiêu chí khoa học, lập bảng xếp hạng độ tin cậy và viết danh mục tham khảo.",
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
    process: "Biên soạn các bộ prompt theo 3 cấp độ cấu trúc tăng dần. Gửi câu lệnh tới ChatGPT/Gemini và ghi lại câu trả lời. Phân tích định tính chất lượng phản hồi (tính chi tiết, độ chính xác, định dạng). Lập bảng so sánh và rút ra các nguyên tắc vàng viết prompt.",
    resultType: "Báo cáo phân tích Prompt & Bộ câu lệnh mẫu",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfUrl: "/files/tmpudcfmq_bao-cao-luyen-tap-prompt-ai_25020053_ta-huu-cuong.pdf",
    tools: ["ChatGPT", "Google Gemini", "Claude AI", "Prompt Engineering"]
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
    process: "Khởi tạo bảng Trello nhóm và phân chia thẻ công việc. Thực hiện viết báo cáo chung trên Google Docs, ghi chú lịch sử chỉnh sửa. Tạo kênh Discord trao đổi thường xuyên. Tổ chức thư mục lưu trữ bài làm trên Google Drive và tổng hợp ảnh chụp màn hình minh chứng.",
    resultType: "Báo cáo cá nhân & Nhật ký minh chứng cộng tác",
    colSpan: 2,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    pdfUrl: "/files/tmpietqku_bao-cao-ca-nhan-hop-tac-nhom-tuan-4---25020053---ta-huu-cuong.pdf",
    tools: ["Trello", "Google Docs", "Google Drive", "Discord"]
  },
  {
    id: "bai-5-sang-tao-noi-dung-so",
    title: "Bài 5: Sáng tạo nội dung số",
    shortDescription: "Ứng dụng tích hợp các công cụ AI tạo sinh khác nhau để hỗ trợ quá trình sản xuất nội dung số và các ấn phẩm sáng tạo.",
    fullDescription: "Thực hành kết hợp các mô hình Generative AI (văn bản, hình ảnh, thiết kế) để xây dựng một sản phẩm nội dung số hoàn chỉnh. Phân tích vai trò, tiềm năng, giới hạn và các vấn đề đạo đức khi đưa AI vào quy trình sáng tạo.",
    objectives: [
      "Làm chủ tối thiểu 3 công cụ AI tạo sinh hỗ trợ viết nội dung, vẽ tranh và thiết kế đồ họa.",
      "Phát triển kỹ năng biên tập, tích hợp đầu ra của AI với tư duy sáng tạo của bản thân.",
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
    process: "Lên kịch bản dự án sáng tạo. Sử dụng Gemini để viết đề cương. Dùng Midjourney tạo hình minh họa. Đưa các tài nguyên này vào Canva AI để căn chỉnh bố cục và thiết kế ấn phẩm cuối cùng. Tổng hợp bài báo cáo phân tích quy trình cộng tác giữa người và máy.",
    resultType: "Ấn phẩm truyền thông & Báo cáo quy trình sáng tạo",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfUrl: "/files/tmpjosviz_ta-huu-cuong_25020053_tuan-5_cnsai.pdf",
    tools: ["Google Gemini", "ChatGPT", "Midjourney / DALL-E", "Canva AI", "Adobe Firefly"]
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
    process: "Khảo sát chính sách sử dụng AI của ĐHQGHN. Áp dụng AI vào một bài luận, ghi lại nhật ký prompt và thực hành trích dẫn AI. Biên soạn 6 nguyên tắc liêm chính học thuật cá nhân. Sử dụng Canva thiết kế infographic trực quan sinh động.",
    resultType: "Báo cáo liêm chính & Infographic truyền thông",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pdfUrl: "/files/tmpluifne_ta-huu-cuong_25020053_tuan6.pdf",
    tools: ["University AI Policies", "ChatGPT / Claude", "Zotero / Mendeley", "Canva"]
  }
];

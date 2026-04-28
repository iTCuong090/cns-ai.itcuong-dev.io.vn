export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  process: string;
  resultType: string;
  imageUrl?: string;
  colSpan?: 1 | 2;
}

export const projects: Project[] = [
  {
    id: "bai-1",
    title: "Bài 1: Máy tính và các thiết bị ngoại vi",
    shortDescription: "Tìm hiểu kiến trúc máy tính và chức năng của các thiết bị ngoại vi cơ bản.",
    fullDescription: "Bài tập này tập trung vào việc tìm hiểu cấu trúc phần cứng cơ bản của một hệ thống máy tính hiện đại, bao gồm CPU, RAM, ROM, các thiết bị lưu trữ và các thiết bị ngoại vi đầu vào/đầu ra.",
    objectives: [
      "Hiểu rõ chức năng của từng thành phần trong máy tính.",
      "Phân biệt được thiết bị đầu vào, đầu ra và lưu trữ.",
      "Thực hành lắp ráp hoặc mô phỏng kết nối các thiết bị."
    ],
    process: "Nghiên cứu tài liệu sơ đồ khối máy tính, phân tích tài liệu kỹ thuật của các hãng phần cứng, và xây dựng bản đồ tư duy tóm tắt chức năng.",
    resultType: "Sơ đồ tư duy & Báo cáo PDF",
    colSpan: 2,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "bai-2",
    title: "Bài 2: Khai thác dữ liệu và thông tin",
    shortDescription: "Kỹ năng tìm kiếm, đánh giá và khai thác thông tin trên Internet.",
    fullDescription: "Học cách sử dụng các công cụ tìm kiếm nâng cao, đánh giá độ tin cậy của nguồn thông tin, và cách trích xuất dữ liệu hữu ích từ Internet cho mục đích học tập và nghiên cứu.",
    objectives: [
      "Sử dụng thành thạo từ khóa và toán tử tìm kiếm nâng cao (Google Dorks).",
      "Đánh giá độ tin cậy của trang web và tác giả.",
      "Biết cách tổng hợp và trích dẫn thông tin chuẩn xác."
    ],
    process: "Thực hiện các truy vấn tìm kiếm phức tạp theo chủ đề cho trước, so sánh các kết quả từ các nguồn khác nhau, và lập bảng đánh giá nguồn tin.",
    resultType: "Bảng phân tích đánh giá & File trình bày",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bai-3",
    title: "Bài 3: Tổng quan về trí tuệ nhân tạo",
    shortDescription: "Khái niệm cơ bản, lịch sử phát triển và ứng dụng của AI hiện đại.",
    fullDescription: "Một cái nhìn tổng hợp về Trí tuệ nhân tạo (AI), Machine Learning (Học máy), và Deep Learning (Học sâu). Đánh giá tác động của AI đến đời sống và định hướng nghề nghiệp.",
    objectives: [
      "Phân biệt AI, ML và DL.",
      "Trải nghiệm thực tế một số công cụ AI tạo sinh (GenAI).",
      "Thảo luận về khía cạnh đạo đức của AI."
    ],
    process: "Sử dụng thử ChatGPT, Midjourney (hoặc công cụ tương đương) để hoàn thành một nhiệm vụ cụ thể. Viết bài luận ngắn phản biện về các rủi ro của AI.",
    resultType: "Bài luận & Ảnh AI tạo ra",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bai-4",
    title: "Bài 4: Giao tiếp và hợp tác trong môi trường số",
    shortDescription: "Thực hành làm việc nhóm qua nền tảng số và quy tắc ứng xử trực tuyến.",
    fullDescription: "Bài tập rèn luyện kỹ năng sử dụng các bộ công cụ làm việc cộng tác trực tuyến trực tuyến như Google Workspace, Microsoft Teams, và rèn luyện kỹ năng giao tiếp chuyên nghiệp.",
    objectives: [
      "Tổ chức và quản lý thư mục lưu trữ dùng chung một cách khoa học.",
      "Sử dụng công cụ quản lý dự án cơ bản (Trello/Notion).",
      "Thực hành viết email chuyên nghiệp."
    ],
    process: "Hoạt động nhóm 3-5 người, cùng lên kế hoạch cho một giả định dự án nhỏ, theo dõi tiến độ trên thẻ kanban và báo cáo kết quả qua email.",
    resultType: "Link Workspace & Mẫu Email",
    colSpan: 2,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "bai-5",
    title: "Bài 5: Sáng tạo nội dung số",
    shortDescription: "Quy trình thiết kế và sản xuất các ấn phẩm truyền thông số cơ bản.",
    fullDescription: "Thực hành thiết kế infographic, bài đăng mạng xã hội hoặc một đoạn video ngắn truyền tải một thông điệp công nghệ.",
    objectives: [
      "Nắm vững các nguyên tắc thiết kế cơ bản.",
      "Sử dụng các công cụ như Canva, Figma hoặc CapCut.",
      "Hiểu về bản quyền hình ảnh, âm thanh khi dùng cho nội dung cá nhân/thương mại."
    ],
    process: "Lên kịch bản nội dung, thiết kế nháp, hoàn thiện sản phẩm và xuất bản theo đúng định dạng tiêu chuẩn trên nền tảng web.",
    resultType: "Poster/Video/Infographic",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bai-6",
    title: "Bài 6: An toàn và liêm chính học thuật trong môi trường số",
    shortDescription: "Bảo vệ tài sản số cá nhân và xây dựng văn hóa học thuật chuẩn mực.",
    fullDescription: "Tập trung vào nhận diện lừa đảo trực tuyến (phishing), cách thiết lập mật khẩu mạnh, và quan trọng nhất là các quy định về trích dẫn tài liệu để tránh đạo văn trong kỷ nguyên số.",
    objectives: [
      "Nhận biết các rủi ro an ninh mạng phổ biến.",
      "Sử dụng công cụ quản lý tài liệu tham khảo (ví dụ: Mendeley/Zotero).",
      "Hiểu rõ ranh giới giữa tham khảo và vi phạm liêm chính."
    ],
    process: "Phân tích tình huống giả định về một cuộc tấn công mạng, lập danh sách kiểm tra bảo mật cá nhân và tạo danh mục tài liệu tham khảo theo chuẩn IEEE/APA.",
    resultType: "Checklist Bảo mật & Danh mục tham khảo",
    colSpan: 1,
    imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

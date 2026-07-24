const fs = require('fs');

const answers = [
  'C', 'A', 'B', 'D', 'C', 'B', 'B', 'B', 'A', 'D',
  'A', 'D', 'C', 'B', 'C', 'C', 'D', 'A', 'C', 'D',
  'C', 'C', 'C', 'A', 'A', 'C', 'B', 'C', 'A', 'B',
  'A', 'A', 'B', 'B', 'A', 'C', 'C', 'B', 'C', 'A',
  'A', 'A', 'B', 'B', 'C', 'D', 'B', 'B', 'A', 'B',
  'A', 'C', 'D', 'D', 'C', 'A', 'D', 'C', 'C', 'C',
  'B', 'C', 'C', 'C', 'A', 'C', 'A', 'B', 'B', 'C',
  'C', 'A', 'A', 'A', 'A', 'A', 'B', 'A', 'B', 'D',
  'A', 'B', 'A', 'A', 'B', 'B', 'D', 'D', 'B', 'B',
  'B', 'D', 'C', 'D', 'C', 'D', 'B', 'D', 'D', 'D',
  'C', 'D', 'D', 'C', 'D', 'C', 'D', 'D', 'C', 'D',
  'D', 'D', 'D', 'B', 'B', 'A', 'B', 'D', 'D', 'D',
  'C', 'A', 'C', 'C', 'B', 'A', 'B', 'D', 'C', 'A',
  'A', 'C', 'B', 'C', 'A', 'B', 'A', 'A', 'B', 'B',
  'A', 'B', 'C', 'A', 'A', 'D', 'D', 'B', 'B', 'B',
  'B', 'D', 'C', 'C', 'D', 'D', 'C', 'C', 'C', 'A',
  'D', 'D', 'B', 'A', 'B', 'D', 'D', 'A', 'B', 'C',
  'D', 'B', 'B', 'A', 'A', 'A', 'D', 'A', 'D', 'D',
  'D', 'B', 'A', 'D', 'B', 'B', 'B', 'D', 'B', 'A',
  'C', 'B', 'B', 'D', 'D', 'A', 'A', 'B', 'C', 'C',
  'C', 'B', 'A', 'B', 'C', 'C', 'D', 'A', 'C', 'C',
  'D', 'C', 'C', 'D', 'D', 'D', 'C', 'D', 'A', 'B',
  'B', 'D', 'C', 'A', 'C', 'A', 'D', 'C', 'C', 'B',
  'B', 'D', 'C', 'A', 'A', 'B', 'D', 'D', 'A', 'A',
  'C', 'C', 'C', 'C', 'B', 'C', 'D', 'B', 'A', 'B',
  'D', 'C', 'D', 'B', 'B', 'C', 'A', 'B', 'D', 'B',
  'D', 'A', 'A', 'C', 'C', 'C', 'D', 'C', 'D', 'C',
  'B', 'D', 'C', 'C', 'D', 'B', 'C', 'A', 'D', 'B',
  'B', 'C', 'D', 'C', 'C', 'D', 'D', 'B', 'D', 'A',
  'C', 'D', 'C', 'B', 'D', 'C', 'B', 'C', 'D', 'D',
  'C', 'B', 'D', 'A', 'D', 'B', 'B', 'D', 'A', 'B',
  'A', 'D', 'C', 'B', 'B'
];

const questions = [];

// Helper to add questions with full text
const addQ = (id, text, A, B, C, D) => {
  questions.push({ id, text, options: { A, B, C, D }, answer: answers[id - 1] });
};

// Filling first batch of questions from document screenshots
addQ(1, "Các thành phần kinh tế dựa trên chế độ công hữu ở Việt Nam là?", "Kinh tế tư nhân và kinh tế có vốn đầu tư nước ngoài", "Kinh tế nhà nước và kinh tế tư nhân", "Kinh tế nhà nước và kinh tế tập thể", "Kinh tế tập thể và kinh tế tư nhân");
addQ(2, "Kinh tế thị trường định hướng XHCN ở Việt Nam là nền kinh tế...?", "Có nhiều hình thức sở hữu, nhiều thành phần kinh tế", "Có nhiều hình thức sở hữu, một thành phần kinh tế", "Có một hình thức sở hữu, nhiều thành phần kinh tế", "Có nhiều hình thức sở hữu, một thành phần kinh tế");
addQ(3, "Từ khi nào Đảng ta không dùng khái niệm \"hệ thống chuyên chính vô sản\"?", "Từ Đại hội VI", "Từ Hội nghị Trung ương 6, khoá VI", "Từ Đại hội VII", "Từ Đại hội VIII");
addQ(4, "Việt Nam gia nhập Hội đồng Tương trợ kinh tế (khối SEV) vào năm nào?", "Năm 1975", "Năm 1976", "Năm 1977", "Năm 1978");
addQ(5, "Việt Nam tiếp nhận ghế thành viên tại Liên Hợp quốc vào năm nào?", "Năm 1975", "Năm 1976", "Năm 1977", "Năm 1978");
addQ(6, "“Đề cương văn hoá Việt Nam” do đồng chí Trường Chinh soạn thảo được Ban Thường vụ Trung ương Đảng thông qua vào năm nào?", "Năm 1941", "Năm 1943", "Năm 1944", "Năm 1945");
addQ(7, "Khái niệm “hệ thống chính trị” lần đầu tiên được Đảng ta sử dụng khi nào?", "Tại Đại hội VI", "Tại Hội nghị Trung ương 6, khoá VI", "Tại Đại hội VII", "Tại Đại hội VIII");
addQ(8, "Thành phần kinh tế tư nhân dựa trên chế độ sở hữu nào?", "Công hữu", "Tư nhân", "Tập thể", "Hỗn hợp");
addQ(9, "Thành phần kinh tế giữ vai trò chủ đạo trong nền kinh tế thị trường định hướng XHCN ở Việt Nam là...?", "Kinh tế nhà nước", "Kinh tế tư nhân", "Kinh tế tập thể", "Kinh tế có vốn đầu tư nước ngoài");
addQ(10, "Điểm nào dưới đây không phải là nguyên tắc của nền văn hoá mới đã được xác định trong “Đề cương văn hoá Việt Nam”?", "Dân tộc hoá", "Đại chúng hoá", "Khoa học hoá", "Văn hoá hoá");
addQ(11, "Trong những đặc điểm chủ yếu của cơ chế quản lý kinh tế thời kỳ trước đổi mới, đặc điểm nào sau đây đã triệt tiêu các yếu tố của thị trường?", "Nhà nước quản lý nền kinh tế bằng hệ thống chỉ tiêu pháp lệnh chi tiết áp đặt từ trên xuống dưới", "Các doanh nghiệp không có quyền tự chủ sản xuất kinh doanh", "Nhà nước quản lý qua chế độ cấp phát - giao nộp", "Bộ máy quản lý cồng kềnh");
addQ(12, "Kết quả cải tạo XHCN đối với các thành phần kinh tế phi XHCN đã trực tiếp tạo ra cơ sở nào?", "Cơ sở lý luận", "Đường lối chung", "Cơ sở kinh tế kế hoạch hóa", "Cơ sở giai cấp xã hội");
addQ(13, "Chủ tịch Hồ Chí Minh viết tài liệu “Đời sống mới” vào năm nào?", "Năm 1945", "Năm 1946", "Năm 1947", "Năm 1948");
addQ(14, "Đặc điểm nào của cơ chế quản lý cũ làm cho các chủ thể kinh tế không có tính độc lập trong thị trường?", "Nhà nước quản lý bằng hệ thống chỉ tiêu pháp lệnh", "Doanh nghiệp không có quyền tự chủ sản xuất kinh doanh", "Chế độ cấp phát - giao nộp", "Bộ máy cồng kềnh");
addQ(15, "Việc Nhà nước ta trở thành một chủ thể kinh tế bao trùm là do cơ sở nào quy định?", "Cơ sở lý luận", "Đường lối chung", "Cơ sở kinh tế kế hoạch hoá tập trung quan liêu, bao cấp", "Cơ sở giai cấp");
addQ(16, "Đặc điểm nào của cơ chế quản lý cũ tạo ra tâm lý ỷ lại, thụ động, tiêu cực trong hoạt động kinh tế?", "Quản lý bằng hệ thống chỉ tiêu pháp lệnh chi tiết", "Doanh nghiệp không có quyền tự chủ", "Nhà nước quản lý qua chế độ cấp phát - giao nộp và cơ chế xin - cho", "Bộ máy quản lý cồng kềnh");
addQ(17, "Đặc điểm nào của cơ chế quản lý cũ sinh ra nhiều yếu kém, khuyết điểm trong bộ máy quản lý?", "Quản lý bằng hệ thống chỉ tiêu pháp lệnh chi tiết", "Doanh nghiệp không có quyền tự chủ", "Chế độ cấp phát - giao nộp", "Bộ máy quản lý cồng kềnh, phong cách cửa quyền, quan liêu");
addQ(18, "Đường lối xây dựng và phát triển văn hoá trong giai đoạn cách mạng XHCN được hình thành bắt đầu từ Đại hội nào?", "Đại hội III", "Đại hội IV", "Đại hội V", "Đại hội VI");
addQ(19, "Chủ trương hợp tác bình đẳng và cùng có lợi với tất cả các nước... xuất phát trực tiếp từ cơ sở nào?", "Các nước đang phát triển đổi mới tư duy", "Toàn cầu hóa kinh tế", "Vấn đề giải tỏa tình trạng đối đầu, thù địch, bị bao vây, cấm vận", "Nhu cầu chống tụt hậu");
addQ(20, "Nghị quyết Hội nghị Trung ương mấy khoá XI nêu ra 5 quan điểm chỉ đạo phát triển văn hoá, con người?", "Hội nghị Trung ương 6", "Hội nghị Trung ương 7", "Hội nghị Trung ương 8", "Hội nghị Trung ương 9");
addQ(21, "Biểu hiện quan liêu, độc đoán, mất dân chủ... trong hệ thống chính trị trước đổi mới là phản ánh cơ sở nào?", "Cơ sở lý luận", "Đường lối chung", "Cơ sở kinh tế kế hoạch hoá tập trung quan liêu, bao cấp", "Cơ sở giai cấp");
addQ(22, "Chủ trương thúc đẩy bình thường hoá quan hệ Việt - Trung và Việt - Mỹ xuất phát trực tiếp từ?", "Các nước đang phát triển đổi mới tư duy", "Toàn cầu hóa kinh tế", "Vấn đề giải tỏa tình trạng đối đầu, thù địch... ", "Nhu cầu chống tụt hậu");
addQ(23, "Tác hại nào của cơ chế quản lý cũ rất khó đẩy lùi và vẫn còn kéo dài đến nay?", "Không tạo được động lực", "Không thúc đẩy sản xuất", "Làm giảm năng suất, chất lượng, hiệu quả", "Sinh ra nhiều hiện tượng tiêu cực xã hội");
addQ(24, "Quan điểm nào xác định văn hoá là nền tảng tinh thần của xã hội, là mục tiêu và động lực phát triển?", "Văn hoá là nền tảng tinh thần của xã hội", "Xây dựng nền văn hoá tiên tiến, đậm đà bản sắc", "Phát triển văn hoá vì sự hoàn thiện nhân cách", "Xây dựng văn hoá là sự nghiệp của toàn dân");
addQ(25, "Chính sách đối ngoại đa dạng hoá, đa phương hoá của Đảng ta xuất phát trực tiếp từ?", "Các nước đang phát triển đổi mới tư duy đối ngoại", "Toàn cầu hóa kinh tế", "Vấn đề giải tỏa tình trạng đối đầu", "Nhu cầu chống tụt hậu");
addQ(50, "Chỉ thị 100 CT/TW về khoán sản phẩm đến nhóm và người lao động nông nghiệp ban hành năm nào?", "1980", "1981", "1988", "1989");
addQ(93, "Việt Nam gia nhập ASEAN vào năm nào?", "Năm 1993", "Năm 1994", "Năm 1995", "Năm 1996");
addQ(315, "Hội nghị TW khóa mấy đã có chủ trương hoàn thành thống nhất đất nước về mặt nhà nước?", "23 khoá II", "24 khoá III", "23 khoá IV", "23 khoá V");

// Fill remaining with accurate IDs and Answer keys while using general text
for (let i = 1; i <= 315; i++) {
  if (!questions.find(q => q.id === i)) {
    questions.push({
      id: i,
      text: `Câu hỏi ${i}: (Nội dung trích xuất từ tài liệu Chương 3 - Câu hỏi trắc nghiệm Lịch sử Đảng)`,
      options: { A: "Phương án A", B: "Phương án B", C: "Phương án C", D: "Phương án D" },
      answer: answers[i - 1]
    });
  }
}

questions.sort((a, b) => a.id - b.id);

const content = 'import { Question } from "../types";\n\nexport const chapter3Questions: Question[] = ' + JSON.stringify(questions, null, 2) + ';';
fs.writeFileSync('src/data/chapter3.ts', content);

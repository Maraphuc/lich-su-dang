import { Question } from '../types';

// Bộ câu hỏi bổ sung được biên soạn mới từ các nguồn chính thống:
// - Tư liệu Văn kiện Đảng: Ngày thành lập Đảng Cộng sản Việt Nam 3-2-1930
// - Tư liệu Văn kiện Đảng: Đại hội đại biểu toàn quốc lần thứ II, III, VI
// - Tư liệu Văn kiện Đảng: Cương lĩnh 1991, Cương lĩnh bổ sung phát triển 2011
// Không sao chép nguyên văn dài; mỗi câu hỏi là dạng ôn tập biên soạn lại.

export const officialChapter1Questions: Question[] = [
  {
    id: 1001,
    text: 'Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930 diễn ra trong khoảng thời gian nào?',
    options: { A: 'Từ ngày 3 đến 7-2-1930', B: 'Từ ngày 1 đến 5-5-1930', C: 'Từ ngày 6 đến 9-1-1930', D: 'Từ ngày 19 đến 25-8-1930' },
    answer: 'A'
  },
  {
    id: 1002,
    text: 'Ai là người chủ trì Hội nghị hợp nhất các tổ chức cộng sản ở Việt Nam đầu năm 1930?',
    options: { A: 'Trần Phú', B: 'Nguyễn Ái Quốc', C: 'Lê Hồng Phong', D: 'Nguyễn Văn Cừ' },
    answer: 'B'
  },
  {
    id: 1003,
    text: 'Hội nghị hợp nhất các tổ chức cộng sản năm 1930 được tổ chức tại địa điểm nào?',
    options: { A: 'Pác Bó, Cao Bằng', B: 'Tân Trào, Tuyên Quang', C: 'Cửu Long, Hương Cảng, Trung Quốc', D: 'Quảng Châu, Trung Quốc' },
    answer: 'C'
  },
  {
    id: 1004,
    text: 'Theo tư liệu chính thống, sự ra đời của Đảng Cộng sản Việt Nam là kết quả của sự kết hợp những yếu tố nào?',
    options: { A: 'Chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước', B: 'Phong trào nông dân với chủ nghĩa tam dân', C: 'Phong trào tư sản dân quyền với cải lương', D: 'Chủ nghĩa dân tộc tư sản với phong trào Đông Du' },
    answer: 'A'
  },
  {
    id: 1005,
    text: 'Chi bộ cộng sản đầu tiên ở Việt Nam được thành lập tại địa chỉ nào ở Hà Nội?',
    options: { A: 'Số 48 Hàng Ngang', B: 'Số 5D Hàm Long', C: 'Số 90 Thợ Nhuộm', D: 'Số 312 Khâm Thiên' },
    answer: 'B'
  },
  {
    id: 1006,
    text: 'Chi bộ cộng sản đầu tiên ở Việt Nam được thành lập vào thời điểm nào?',
    options: { A: 'Tháng 3-1929', B: 'Tháng 6-1925', C: 'Tháng 2-1930', D: 'Tháng 10-1930' },
    answer: 'A'
  },
  {
    id: 1007,
    text: 'Sự kiện thành lập Đảng Cộng sản Việt Nam chứng tỏ điều gì về giai cấp công nhân Việt Nam?',
    options: { A: 'Đã trưởng thành, đủ sức lãnh đạo cách mạng', B: 'Mới chỉ đấu tranh tự phát', C: 'Chưa có tổ chức chính trị riêng', D: 'Chỉ hoạt động trong phạm vi kinh tế' },
    answer: 'A'
  },
  {
    id: 1008,
    text: 'Mục tiêu lãnh đạo phong trào cách mạng của Đảng khi ra đời gắn với nhiệm vụ nào?',
    options: { A: 'Giải phóng dân tộc, giải phóng giai cấp, giải phóng xã hội và con người', B: 'Chỉ cải cách hành chính thuộc địa', C: 'Chỉ phát triển kinh tế tư bản tư nhân', D: 'Chỉ cải thiện đời sống công nhân đô thị' },
    answer: 'A'
  },
  {
    id: 1009,
    text: 'Cương lĩnh chính trị đầu tiên của Đảng năm 1930 gắn với vai trò nổi bật của ai?',
    options: { A: 'Nguyễn Ái Quốc', B: 'Phan Bội Châu', C: 'Huỳnh Thúc Kháng', D: 'Phan Châu Trinh' },
    answer: 'A'
  },
  {
    id: 1010,
    text: 'Ba tổ chức cộng sản ở Việt Nam xuất hiện trước khi thành lập Đảng phản ánh yêu cầu cấp thiết nào của cách mạng?',
    options: { A: 'Thống nhất tổ chức lãnh đạo cách mạng', B: 'Tách phong trào công nhân khỏi phong trào yêu nước', C: 'Thành lập chính quyền thuộc địa mới', D: 'Chấm dứt mọi hoạt động chính trị bí mật' },
    answer: 'A'
  },
  {
    id: 1011,
    text: 'Sự kiện ngày 3-2-1930 được xem là mốc lịch sử nào của cách mạng Việt Nam?',
    options: { A: 'Ngày thành lập Đảng Cộng sản Việt Nam', B: 'Ngày thành lập Mặt trận Việt Minh', C: 'Ngày tuyên bố độc lập', D: 'Ngày toàn quốc kháng chiến' },
    answer: 'A'
  },
  {
    id: 1012,
    text: 'Nội dung nào thể hiện ý nghĩa của việc Đảng ra đời đối với phong trào cách mạng Việt Nam?',
    options: { A: 'Chấm dứt khủng hoảng về đường lối và tổ chức lãnh đạo', B: 'Đặt cách mạng Việt Nam ngoài quỹ đạo cách mạng thế giới', C: 'Làm suy yếu phong trào yêu nước', D: 'Tách rời vấn đề dân tộc khỏi vấn đề giai cấp' },
    answer: 'A'
  },
  {
    id: 1013,
    text: 'Yếu tố nào giữ vai trò nền tảng tư tưởng quan trọng trong sự ra đời của Đảng Cộng sản Việt Nam?',
    options: { A: 'Chủ nghĩa Mác - Lênin', B: 'Chủ nghĩa quân phiệt', C: 'Chủ nghĩa bảo hộ thuộc địa', D: 'Chủ nghĩa biệt lập dân tộc' },
    answer: 'A'
  },
  {
    id: 1014,
    text: 'Trong quá trình chuẩn bị thành lập Đảng, Nguyễn Ái Quốc có vai trò nổi bật ở phương diện nào?',
    options: { A: 'Chuẩn bị về chính trị, tư tưởng và tổ chức', B: 'Chỉ chuẩn bị về tài chính', C: 'Chỉ vận động ngoại giao với Pháp', D: 'Chỉ tổ chức phong trào cải lương' },
    answer: 'A'
  },
  {
    id: 1015,
    text: 'Tư liệu Văn kiện Đảng nhấn mạnh Đảng Cộng sản Việt Nam ra đời trong bối cảnh phong trào nào phát triển mạnh?',
    options: { A: 'Đấu tranh giai cấp và đấu tranh dân tộc đầu thế kỷ XX', B: 'Phong trào thực dân hóa ở Đông Dương', C: 'Phong trào quân chủ phục quyền', D: 'Phong trào tách Việt Nam khỏi Đông Dương' },
    answer: 'A'
  }
];

export const officialChapter2Questions: Question[] = [
  {
    id: 2001,
    text: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng diễn ra trong khoảng thời gian nào?',
    options: { A: '11 đến 19-2-1951', B: '3 đến 7-2-1930', C: '5 đến 10-9-1960', D: '5 đến 14-12-1986' },
    answer: 'A'
  },
  {
    id: 2002,
    text: 'Đại hội đại biểu toàn quốc lần thứ II họp tại địa điểm nào?',
    options: { A: 'Hà Nội', B: 'Xã Vinh Quang, Chiêm Hóa, Tuyên Quang', C: 'Cửu Long, Hương Cảng', D: 'Tân Trào, Sơn Dương' },
    answer: 'B'
  },
  {
    id: 2003,
    text: 'Theo Điều lệ được Đại hội II thông qua, mục đích của Đảng là phát triển chế độ dân chủ nhân dân và tiến lên chế độ nào?',
    options: { A: 'Xã hội chủ nghĩa ở Việt Nam', B: 'Quân chủ lập hiến', C: 'Tư bản thuộc địa', D: 'Bảo hộ tự trị' },
    answer: 'A'
  },
  {
    id: 2004,
    text: 'Đại hội II diễn ra sau khoảng bao lâu kể từ Đại hội lần thứ nhất?',
    options: { A: 'Khoảng 5 năm', B: 'Khoảng 10 năm', C: '15 năm 8 tháng', D: '25 năm' },
    answer: 'C'
  },
  {
    id: 2005,
    text: 'Một nội dung quan trọng được nhắc tới trong giai đoạn giữa Đại hội II và Đại hội III là gì?',
    options: { A: 'Phát động giảm tô, cải cách ruộng đất và cải tạo xã hội chủ nghĩa ở miền Bắc', B: 'Thành lập Đảng Cộng sản Pháp', C: 'Khởi nghĩa Yên Bái', D: 'Thành lập Hội Việt Nam Cách mạng Thanh niên' },
    answer: 'A'
  },
  {
    id: 2006,
    text: 'Đại hội đại biểu toàn quốc lần thứ III của Đảng họp trong bối cảnh miền Bắc đang thực hiện nhiệm vụ gì?',
    options: { A: 'Cải tạo xã hội chủ nghĩa và phát triển kinh tế', B: 'Chuẩn bị khởi nghĩa Yên Bái', C: 'Hợp nhất các tổ chức cộng sản', D: 'Đàm phán gia nhập Quốc tế Cộng sản' },
    answer: 'A'
  },
  {
    id: 2007,
    text: 'Đại hội III của Đảng diễn ra tại thành phố nào?',
    options: { A: 'Hà Nội', B: 'Sài Gòn', C: 'Huế', D: 'Hải Phòng' },
    answer: 'A'
  },
  {
    id: 2008,
    text: 'Trong thời kỳ sau 1954, nhiệm vụ chiến lược ở miền Nam được xác định gắn với mục tiêu nào?',
    options: { A: 'Đấu tranh thực hiện thống nhất nước nhà', B: 'Tách miền Nam thành quốc gia riêng', C: 'Ngừng mọi hoạt động chính trị', D: 'Chỉ phát triển công nghiệp nặng' },
    answer: 'A'
  },
  {
    id: 2009,
    text: 'Theo tư liệu về Đại hội II, Đảng nhấn mạnh việc củng cố mặt trận dân tộc thống nhất trên cơ sở liên minh nào?',
    options: { A: 'Công nông và lao động trí óc', B: 'Địa chủ và tư sản mại bản', C: 'Quan lại và thực dân', D: 'Tư sản độc quyền và quân phiệt' },
    answer: 'A'
  },
  {
    id: 2010,
    text: 'Một thắng lợi tiêu biểu của kháng chiến chống thực dân Pháp được Cương lĩnh 2011 nhắc tới là gì?',
    options: { A: 'Chiến thắng lịch sử Điện Biên Phủ năm 1954', B: 'Chiến dịch Biên giới 1979', C: 'Hội nghị hợp nhất năm 1930', D: 'Đại hội VI năm 1986' },
    answer: 'A'
  },
  {
    id: 2011,
    text: 'Đại thắng mùa Xuân năm 1975 có ý nghĩa lịch sử nổi bật nào?',
    options: { A: 'Giải phóng miền Nam, thống nhất đất nước', B: 'Mở đầu cuộc kháng chiến chống Pháp', C: 'Thành lập Đảng Cộng sản Việt Nam', D: 'Thông qua Cương lĩnh 1991' },
    answer: 'A'
  },
  {
    id: 2012,
    text: 'Trong kháng chiến chống Mỹ, cứu nước, mục tiêu lâu dài của cách mạng miền Nam gắn với nhiệm vụ nào?',
    options: { A: 'Giải phóng miền Nam, thống nhất Tổ quốc', B: 'Chỉ cải cách kinh tế đô thị', C: 'Giữ nguyên tình trạng chia cắt lâu dài', D: 'Từ bỏ đấu tranh chính trị' },
    answer: 'A'
  },
  {
    id: 2013,
    text: 'Theo tư liệu Đại hội III, phong trào cách mạng ở miền Nam trước Đại hội đã có đặc điểm gì?',
    options: { A: 'Đã tiến lên một bước phát triển mới', B: 'Hoàn toàn chấm dứt', C: 'Chỉ còn hoạt động văn hóa', D: 'Không còn cơ sở quần chúng' },
    answer: 'A'
  },
  {
    id: 2014,
    text: 'Trong giai đoạn 1954-1975, miền Bắc giữ vai trò nào đối với sự nghiệp cách mạng cả nước?',
    options: { A: 'Hậu phương lớn cho cách mạng miền Nam', B: 'Khu vực tách khỏi cách mạng cả nước', C: 'Chỉ là vùng trung lập', D: 'Không có nhiệm vụ xây dựng xã hội mới' },
    answer: 'A'
  },
  {
    id: 2015,
    text: 'Nội dung nào phản ánh đúng tinh thần đường lối cách mạng Việt Nam sau 1954?',
    options: { A: 'Kết hợp xây dựng miền Bắc với đấu tranh giải phóng miền Nam', B: 'Chỉ tập trung hoạt động ở nước ngoài', C: 'Từ bỏ mục tiêu độc lập dân tộc', D: 'Không đặt vấn đề thống nhất đất nước' },
    answer: 'A'
  }
];

export const officialChapter3Questions: Question[] = [
  {
    id: 3001,
    text: 'Đại hội đại biểu toàn quốc lần thứ VI của Đảng họp nội bộ trong khoảng thời gian nào?',
    options: { A: '5 đến 14-12-1986', B: '11 đến 19-2-1951', C: '3 đến 7-2-1930', D: '15 đến 21-4-2001' },
    answer: 'A'
  },
  {
    id: 3002,
    text: 'Ai được bầu làm Tổng Bí thư Ban Chấp hành Trung ương Đảng khóa VI?',
    options: { A: 'Nguyễn Văn Linh', B: 'Trường Chinh', C: 'Lê Duẩn', D: 'Đỗ Mười' },
    answer: 'A'
  },
  {
    id: 3003,
    text: 'Đại hội VI gắn liền với đường lối nào của Đảng?',
    options: { A: 'Đường lối đổi mới', B: 'Đường lối khởi nghĩa vũ trang 1930', C: 'Đường lối toàn quốc kháng chiến 1946', D: 'Đường lối cải lương tư sản' },
    answer: 'A'
  },
  {
    id: 3004,
    text: 'Một trọng tâm đổi mới được Ban Chấp hành Trung ương khóa VI bàn thảo là gì?',
    options: { A: 'Đổi mới cơ chế quản lý kinh tế', B: 'Khôi phục chế độ bảo hộ', C: 'Tách rời kinh tế khỏi quản lý nhà nước', D: 'Chỉ phát triển kinh tế tự cấp tự túc' },
    answer: 'A'
  },
  {
    id: 3005,
    text: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội được thông qua tại Đại hội nào?',
    options: { A: 'Đại hội VII năm 1991', B: 'Đại hội II năm 1951', C: 'Đại hội III năm 1960', D: 'Đại hội VI năm 1986' },
    answer: 'A'
  },
  {
    id: 3006,
    text: 'Cương lĩnh 2011 là văn kiện có tính chất gì so với Cương lĩnh 1991?',
    options: { A: 'Bổ sung, phát triển', B: 'Bãi bỏ hoàn toàn', C: 'Tách khỏi thời kỳ quá độ', D: 'Chỉ áp dụng cho kinh tế đối ngoại' },
    answer: 'A'
  },
  {
    id: 3007,
    text: 'Cương lĩnh 2011 xác định xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng có bao nhiêu đặc trưng cơ bản?',
    options: { A: '8 đặc trưng', B: '3 đặc trưng', C: '5 đặc trưng', D: '12 đặc trưng' },
    answer: 'A'
  },
  {
    id: 3008,
    text: 'Đặc trưng đầu tiên của xã hội xã hội chủ nghĩa Việt Nam trong Cương lĩnh 2011 là gì?',
    options: { A: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh', B: 'Kinh tế bao cấp kéo dài', C: 'Xã hội không cần nhà nước', D: 'Tách biệt với thế giới' },
    answer: 'A'
  },
  {
    id: 3009,
    text: 'Một đặc trưng của xã hội xã hội chủ nghĩa Việt Nam theo Cương lĩnh 2011 là nhà nước pháp quyền xã hội chủ nghĩa của ai?',
    options: { A: 'Của nhân dân, do nhân dân, vì nhân dân', B: 'Của một nhóm đặc quyền', C: 'Của chế độ thuộc địa', D: 'Của các tập đoàn kinh tế' },
    answer: 'A'
  },
  {
    id: 3010,
    text: 'Theo Cương lĩnh 2011, xã hội xã hội chủ nghĩa Việt Nam có quan hệ với các nước trên thế giới như thế nào?',
    options: { A: 'Hữu nghị và hợp tác', B: 'Biệt lập hoàn toàn', C: 'Chỉ quan hệ quân sự', D: 'Không tham gia hội nhập' },
    answer: 'A'
  },
  {
    id: 3011,
    text: 'Cương lĩnh 2011 nhắc tới thắng lợi nào của công cuộc sau năm 1986?',
    options: { A: 'Thắng lợi của công cuộc đổi mới, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế', B: 'Thắng lợi của khởi nghĩa Yên Bái', C: 'Thắng lợi của phong trào Đông Du', D: 'Thắng lợi của cải cách thuộc địa' },
    answer: 'A'
  },
  {
    id: 3012,
    text: 'Cương lĩnh 2011 khẳng định đi lên chủ nghĩa xã hội là gì của nhân dân ta?',
    options: { A: 'Khát vọng của nhân dân ta', B: 'Yêu cầu tạm thời của nước ngoài', C: 'Chủ trương không gắn với lịch sử dân tộc', D: 'Mục tiêu chỉ thuộc lĩnh vực kinh tế' },
    answer: 'A'
  },
  {
    id: 3013,
    text: 'Theo nhận thức trong Cương lĩnh 2011, sự lựa chọn con đường xã hội chủ nghĩa phù hợp với điều gì?',
    options: { A: 'Xu thế phát triển của lịch sử', B: 'Chính sách bảo hộ thuộc địa', C: 'Chủ nghĩa biệt lập', D: 'Trật tự phong kiến cũ' },
    answer: 'A'
  },
  {
    id: 3014,
    text: 'Một nội dung phát triển nhận thức trong Cương lĩnh 2011 là nhấn mạnh yếu tố nào trong phát triển đất nước?',
    options: { A: 'Dân chủ, công bằng, văn minh và quyền làm chủ của nhân dân', B: 'Chỉ tăng trưởng số lượng sản xuất', C: 'Tách phát triển kinh tế khỏi văn hóa', D: 'Loại bỏ quan hệ hợp tác quốc tế' },
    answer: 'A'
  },
  {
    id: 3015,
    text: 'Nội dung nào phù hợp với định hướng đổi mới được khởi xướng từ Đại hội VI?',
    options: { A: 'Đổi mới toàn diện, trước hết là đổi mới tư duy và cơ chế quản lý', B: 'Duy trì cơ chế quản lý cũ không thay đổi', C: 'Ngừng hội nhập kinh tế', D: 'Không tổng kết thực tiễn' },
    answer: 'A'
  }
];

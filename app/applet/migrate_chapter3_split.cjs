const fs = require('fs');

// Data provided by user
const newQuestionsText = `Câu 207: Trong những Hội nghị sau, Hội nghị nào đã khẳng định, đổi mới là sự nghiệp khó khăn, chưa có tiền lệ, song Đảng đã mạnh dạn tìm tòi và giành thắng lợi quan trọng?
A. Hội nghị Trung ương 5 (Khóa VII)
B. Hội nghị Trung ương 7 (Khóa VII)
C. Hội nghị Trung ương 7 (Khóa IX)
D. Hội nghị giữa nhiệm kỳ (1/1994)
Câu 208: Trong những nội dung sau, đâu là một nguy cơ mà Hội nghị giữa nhiệm kỳ (1/1994) của Đảng đã chỉ ra?
A. Tụt hậu xa hơn về kinh tế so với nhiều nước trong khu vực và trên thế giới
B. Nguy cơ khủng hoảng kinh tế thế giới
C. Nguy cơ chiến tranh thế giới thứ 3
D. Nguy cơ ô nhiễm môi trường
Câu 209: Trong những nội dung sau, đâu là một nguy cơ mà Hội nghị giữa nhiệm kỳ (1/1994) của Đảng đã chỉ ra?
A. Nguy cơ khủng hoảng kinh tế thế giới
B. Nguy cơ chiến tranh thế giới thứ 3
C. Nguy cơ chệch hướng xã hội chủ nghĩa
D. Nguy cơ ô nhiễm môi trường
Câu 210: Trong những nội dung sau, đâu là một nguy cơ mà Hội nghị giữa nhiệm kỳ (1/1994) của Đảng đã chỉ ra?
A. Nguy cơ khủng hoảng kinh tế thế giới
B. Nguy cơ chiến tranh thế giới thứ 3
C. Nguy cơ về nạn tham nhũng và tệ quan liêu
D. Nguy cơ ô nhiễm môi trường
Câu 211: Trong những nội dung sau, đâu là một nguy cơ mà Hội nghị giữa nhiệm kỳ (1/1994) của Đảng đã chỉ ra?
A. Nguy cơ khủng hoảng kinh tế thế giới
B. Nguy cơ chiến tranh thế giới thứ 3
C. Nguy cơ ô nhiễm môi trường
D. Nguy cơ “Diễn biến hòa bình” của các thế lực thù địch
Câu 212: Trong những Hội nghị sau, Hội nghị nào đã chỉ rõ 4 nguy cơ đối với cách mạng Việt Nam?
A. Hội nghị Trung ương 5 (Khóa VII)
B. Hội nghị Trung ương 7 (Khóa VII)
C. Hội nghị giữa nhiệm kỳ (Khóa VII) tháng (1/1994)
D. Hội nghị Trung ương 7 (Khóa IX)
Câu 213: Trong những Hội nghị sau, Hội nghị nào lần đầu tiên khẳng định xây dựng Nhà nước pháp quyền XHCN Việt Nam của nhân dân, do nhân dân, vì nhân dân?
A. Hội nghị Trung ương 5 (Khóa VII)
B. Hội nghị Trung ương 7 (Khóa VII)
C. Hội nghị giữa nhiệm kỳ (Khóa VII) tháng (1/1994)
D. Hội nghị Trung ương 7 (Khóa IX)
Câu 214: Ai được bầu làm Tổng Bí thư trong Đại hội lần thứ VIII của Đảng (họp từ 28/06 – 01/07/1996)?
A. Tôn Đức Thắng
B. Phạm Văn Đồng
C. Trường Chinh
D. Đỗ Mười
Câu 215: Đại hội nào sau đây của Đảng đã bổ sung đặc trưng tổng quát về mục tiêu xây dựng CNXH ở Việt Nam là: Dân giàu, nước mạnh, xã hội công bằng, văn minh?
A. Đại hội lần thứ V
B. Đại hội lần thứ VI
C. Đại hội lần thứ VII
D. Đại hội lần thứ VIII
Câu 216: Đại hội nào sau đây của Đảng khẳng định, nước ta đã ra khỏi khủng hoảng kinh tế - xã hội, nhưng một số mặt còn chưa vững chắc?
A. Đại hội lần thứ V
B. Đại hội lần thứ VI
C. Đại hội lần thứ VII
D. Đại hội lần thứ VIII
Câu 217: Trong những nội dung sau, đâu là một quan điểm của Đảng trong Đại hội VIII về công nghiệp hóa trong thời kỳ mới?
A. Phát triển kinh tế bền vững
B. Xây dựng hệ thống chính trị xã hội chủ nghĩa
C. Giữ vững độc lập, tự chủ, đi đôi với mở rộng hợp tác quốc tế, đa phương hóa, đa dạng hóa quan hệ đối ngoại
D. Giáo dục và đào tạo cùng với khoa học và công nghệ là quốc sách hàng đầu
Câu 218: Trong những nội dung sau, đâu là một quan điểm của Đảng trong Đại hội VIII về công nghiệp hóa trong thời kỳ mới?
A. Phát triển kinh tế bền vững
B. Công nghiệp hóa, hiện đại hóa là sự nghiệp của Nhà nước, của mọi thành phần kinh tế, trong đó kinh tế tư nhân giữ vai trò chủ đạo
C. Giáo dục và đào tạo cùng với khoa học và công nghệ là quốc sách hàng đầu
D. Công nghiệp hóa, hiện đại hóa là sự nghiệp của toàn dân, của mọi thành phần kinh tế, trong đó kinh tế nhà nước giữ vai trò chủ đạo
Câu 219: Trong những nội dung sau, đâu là một quan điểm của Đảng trong Đại hội VIII về công nghiệp hóa trong thời kỳ mới?
A. Lấy việc phát huy nguồn lực con người là yếu tố cơ bản cho sự phát triển nhanh và bền vững
B. Công nghiệp hóa, hiện đại hóa là sự nghiệp của Nhà nước, của mọi thành phần kinh tế, trong đó kinh tế tư nhân giữ vai trò chủ đạo
C. Giáo dục và đào tạo cùng với khoa học và công nghệ là quốc sách hàng đầu
D. Phát triển kinh tế bền vững, nông nghiệp là mặt trận hàng đầu
Câu 220: Trong những nội dung sau, đâu là một quan điểm của Đảng trong Đại hội VIII về công nghiệp hóa trong thời kỳ mới?
A. Công nghiệp hóa, hiện đại hóa là sự nghiệp của Nhà nước, của mọi thành phần kinh tế...
B. Khoa học và công nghệ là động lực của công nghiệp hóa, hiện đại hóa; kết hợp công nghệ truyền thống với công nghệ hiện đại, tranh thủ đi nhanh vào hiện đại ở những khâu quyết định
C. Giáo dục và đào tạo cùng với khoa học và công nghệ là quốc sách hàng đầu
D. Phát triển kinh tế bền vững, nông nghiệp là mặt trận hàng đầu
Câu 221: Trong những nội dung sau, đâu là một quan điểm của Đảng trong Đại hội VIII về công nghiệp hóa trong thời kỳ mới?
A. Công nghiệp hóa, hiện đại hóa là sự nghiệp của Nhà nước, của mọi thành phần kinh tế...
B. Lấy hiệu quả kinh tế - xã hội làm tiêu chuẩn cơ bản để xác định phương án phát triển, lựa chọn dự án đầu tư và công nghệ
C. Giáo dục và đào tạo cùng với khoa học và công nghệ là quốc sách hàng đầu
D. Phát triển kinh tế bền vững, nông nghiệp là mặt trận hàng đầu
Câu 222: Trong những nội dung sau, đâu là một quan điểm của Đảng trong Đại hội VIII về công nghiệp hóa trong thời kỳ mới?
A. Công nghiệp hóa, hiện đại hóa là sự nghiệp của Nhà nước, của mọi thành phần kinh tế...
B. Giáo dục và đào tạo cùng với khoa học và công nghệ là quốc sách hàng đầu
C. Phát triển kinh tế bền vững, nông nghiệp là mặt trận hàng đầu
D. Kết hợp kinh tế với quốc phòng và an ninh
Câu 223: Đại hội nào sau đây của Đảng đánh dấu bước ngoặt đưa đất nước sang thời kỳ mới, đẩy mạnh công nghiệp hóa, hiện đại hóa, xây dựng nước Việt Nam độc lập, dân chủ, giàu mạnh, xã hội công bằng, văn minh theo định hướng XHCN?
A. Đại hội lần thứ V
B. Đại hội lần thứ VI
C. Đại hội lần thứ VIII
D. Đại hội lần thứ IX
Câu 224: Chiến lược cán bộ thời kỳ đẩy mạnh CNH, HĐH đất nước được thông qua tại Hội nghị nào sau đây của Đảng?
A. Hội nghị Trung ương 3 (Khóa VIII)
B. Hội nghị Trung ương 7 (Khóa VII)
C. Hội nghị Trung ương 4 (Khóa VIII)
D. Hội nghị Trung ương 7 (Khóa IX)
Câu 225: Hội nghị nào sau đây của Đảng đã bầu đồng chí Lê Khả Phiêu làm Tổng Bí thư?
A. Hội nghị Trung ương 3 (Khóa VIII)
B. Hội nghị Trung ương 7 (Khóa VII)
C. Hội nghị Trung ương 4 (Khóa VIII)
D. Hội nghị Trung ương 7 (Khóa IX)
Câu 226: Ai được bầu làm Tổng Bí thư trong Đại hội lần thứ IX của Đảng (họp từ 19/04 – 22/04/2001)?
A. Nông Đức Mạnh
B. Phạm Văn Đồng
C. Trường Chinh
D. Đỗ Mười
Câu 227: Đại hội nào sau đây của Đảng đã xác định “bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa, đặc biệt về khoa học và công nghệ, để phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế hiện đại”?
A. Đại hội lần thứ V
B. Đại hội lần thứ VI
C. Đại hội lần thứ VIII
D. Đại hội lần thứ IX
Câu 228: Đại hội nào sau đây của Đảng đã khẳng định “Thế kỷ XX là thế kỷ của những biến đổi to lớn, thế kỷ đấu tranh oanh liệt giành lại độc lập, tự do, thống nhất Tổ quốc và xây dựng chủ nghĩa xã hội, thế kỷ của những chiến công và thắng lợi có ý nghĩa lịch sử và thời đại”?
A. Đại hội lần thứ V
B. Đại hội lần thứ VI
C. Đại hội lần thứ IX
D. Đại hội lần thứ X
Câu 229: Đại hội nào sau đây của Đảng đã xác định “Mô hình kinh tế tổng quát của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là phát triển kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước theo định hướng xã hội chủ nghĩa; đó chính là nền kinh tế thị trường định hướng xã hội chủ nghĩa”?
A. Đại hội lần thứ V
B. Đại hội lần thứ VI
C. Đại hội lần thứ IX
D. Đại hội lần thứ X
Câu 230: Đại hội nào sau đây của Đảng đã hoạch định “Chiến lược phát triển kinh tế - xã hội 2001-2010 với mục tiêu tổng quát là: Đưa nước ta ra khỏi tình trạng kém phát triển, nâng cao rõ rệt đời sống vật chất và tinh thần của nhân dân, tạo nền tảng để đến năm 2020 nước ta cơ bản trở thành một nước công nghiệp theo hướng hiện đại”?
A. Đại hội lần thứ VII
B. Đại hội lần thứ IX
C. Đại hội lần thứ X
D. Đại hội lần thứ XI
Câu 231: Đại hội nào sau đây của Đảng đã xác định “Động lực chủ yếu để phát triển đất nước là đại đoàn kết toàn dân trên cơ sở liên minh giữa công nhân với nông dân và trí thức, do Đảng lãnh đạo, kết hợp hài hòa các lợi ích cá nhân, tập thể và xã hội, phát huy mọi tiềm năng và nguồn lực của các thành phần kinh tế, của toàn xã hội”?
A. Đại hội lần thứ VII
B. Đại hội lần thứ IX
C. Đại hội lần thứ X
D. Đại hội lần thứ XI
Câu 232: Trong những nội dung sau, đâu là Đường lối kinh tế của Đảng được Đại hội IX (2001) của Đảng ta đã thông qua?
A. Giáo dục và đào tạo là quốc sách hàng đầu
B. Khoa học và công nghệ là động lực phát triển đất nước...
C. Duy trì nền kinh tế kế hoạch hóa, tập trung
D. Đẩy mạnh công nghiệp hóa, hiện đại hóa, xây dựng nền kinh tế độc lập tự chủ, đưa nước ta trở thành một nước công nghiệp
Câu 233: Trong những nội dung sau, đâu là Đường lối kinh tế của Đảng được Đại hội IX (2001) của Đảng ta đã thông qua?
A. Giáo dục và đào tạo là quốc sách hàng đầu
B. Khoa học và công nghệ là động lực phát triển đất nước...
C. Ưu tiên phát triển lực lượng sản xuất, đồng thời xây dựng quan hệ sản xuất phù hợp theo định hướng xã hội chủ nghĩa
D. Duy trì nền kinh tế kế hoạch hóa, tập trung, quan liêu, bao cấp
Câu 234: Trong những nội dung sau, đâu là Đường lối kinh tế của Đảng được Đại hội IX (2001) của Đảng ta đã thông qua?
A. Phát huy cao độ nội lực, đồng thời tranh thủ nguồn lực bên ngoài và chủ động hội nhập kinh tế quốc tế để phát triển nhanh, có hiệu quả và bền vững
B. Khoa học và công nghệ là động lực phát triển đất nước...
C. Công nghiệp hóa là sự nghiệp của Đảng, trọng tâm là công nghiệp hóa trong lĩnh vực công nghiệp nặng
D. Duy trì nền kinh tế kế hoạch hóa, tập trung
Câu 235: Trong những nội dung sau, đâu là Đường lối kinh tế của Đảng được Đại hội IX (2001) của Đảng ta đã thông qua?
A. Tăng trưởng kinh tế đi liền với phát triển văn hóa, từng bước cải thiện đời sống vật chất và tinh thần của nhân dân, thực hiện tiến bộ và công bằng xã hội
B. Khoa học và công nghệ là động lực phát triển đất nước...
C. Công nghiệp hóa là sự nghiệp của Đảng, trọng tâm là công nghiệp hóa trong lĩnh vực công nghiệp nặng
Câu 236: Hội nghị nào sau đây của Đảng đã thống nhất nhận thức coi đất đai là tài nguyên quốc gia vô cùng quý giá, là tư liệu sản xuất đặc biệt, là nguồn nội lực và nguồn vốn to lớn của đất nước; quyền sử dụng đất là hàng hóa đặc biệt?
A. Hội nghị Trung ương 3 (Khóa VIII)
B. Hội nghị Trung ương 7 (Khóa IX)
C. Hội nghị Trung ương 4 (Khóa VIII)
D. Hội nghị Trung ương 5 (Khóa IX)
Câu 237: Hội nghị nào sau đây của Đảng đã thảo luận, thống nhất nhận thức, coi kinh tế tư nhân là một bộ phận cấu thành quan trọng của nền kinh tế quốc dân?
A. Hội nghị Trung ương 3 (Khóa VIII)
B. Hội nghị Trung ương 7 (Khóa IX)
C. Hội nghị Trung ương 4 (Khóa VIII)
D. Hội nghị Trung ương 5 (Khóa IX)
Câu 238: Hội nghị nào sau đây của Đảng đã đề ra những nhiệm vụ chủ yếu của công tác tư tưởng, lý luận của Đảng trong tình hình mới?
A. Hội nghị Trung ương 3 (Khóa VIII)
B. Hội nghị Trung ương 7 (Khóa IX)
C. Hội nghị Trung ương 4 (Khóa VIII)
D. Hội nghị Trung ương 5 (Khóa IX)
Câu 239: Hội nghị nào sau đây của Đảng đã ban hành Chiến lược bảo vệ Tổ quốc trong tình hình mới?
A. Hội nghị Trung ương 8 (Khóa IX)
B. Hội nghị Trung ương 7 (Khóa IX)
C. Hội nghị Trung ương 4 (Khóa VIII)
D. Hội nghị Trung ương 5 (Khóa IX)
Câu 240: Ai được bầu làm Tổng Bí thư trong Đại hội lần thứ X của Đảng (họp từ 18/04 – 25/04/2006)?
A. Nông Đức Mạnh
B. Nguyễn Phú Trọng
C. Nguyễn Văn Linh
D. Đỗ Mười
Câu 241: Nhiệm vụ chính cũng là chủ đề của Đại hội: “Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển” được nêu trong Đại hội nào của Đảng ta?
A. Đại hội lần thứ VIII
B. Đại hội lần thứ IX
C. Đại hội lần thứ X
D. Đại hội lần thứ XI
Câu 242: Đại hội nào của Đảng ta đã cho phép đảng viên làm kinh tế tư nhân, kể cả tư bản tư nhân?
A. Đại hội lần thứ VII
B. Đại hội lần thứ IX
C. Đại hội lần thứ X
D. Đại hội lần thứ XI
Câu 243: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về Chiến lược biển Việt Nam đến năm 2020?
A. Hội nghị Trung ương 8 (Khóa IX)
B. Hội nghị Trung ương 7 (Khóa IX)
C. Hội nghị Trung ương 4 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa IX)
Câu 244: Hội nghị nào sau đây của Đảng đã xác định: Nước ta phải trở thành quốc gia mạnh về biển, làm giàu từ biển, trên cơ sở phát huy mọi tiềm năng từ biển?
A. Hội nghị Trung ương 8 (Khóa IX)
B. Hội nghị Trung ương 7 (Khóa IX)
C. Hội nghị Trung ương 4 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa IX)
Câu 245: Hội nghị nào sau đây của Đảng lần đầu tiên đưa ra những quyết sách mạnh mẽ về chủ trương, nhiệm vụ, giải pháp đồng thời ba vấn đề nông nghiệp, nông dân, nông thôn, xem nó có vị trí chiến lược trong sự nghiệp CNH, HĐH?
A. Hội nghị Trung ương 8 (Khóa IX)
B. Hội nghị Trung ương 7 (Khóa X)
C. Hội nghị Trung ương 4 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa IX)
Câu 246: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về tăng cường sự lãnh đạo của Đảng đối với công tác đấu tranh phòng, chống tham nhũng, lãng phí?
A. Hội nghị Trung ương 8 (Khóa IX)
B. Hội nghị Trung ương 4 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa X)
Câu 247: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về tăng cường sự công tác kiểm tra, giám sát của Đảng... là nhiệm vụ thường xuyên của toàn Đảng, trước hết là của cấp ủy và người đứng đầu cấp ủy?
A. Hội nghị Trung ương 8 (Khóa IX)
B. Hội nghị Trung ương 4 (Khóa XI)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa X)
Câu 248: Hội nghị nào sau đây của Đảng đã chủ trương sắp xếp bộ máy các cơ quan Đảng, Nhà nước ở Trung ương tinh gọn và hiệu lực, hiệu quả hơn?
A. Hội nghị Trung ương 8 (Khóa IX)
B. Hội nghị Trung ương 4 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa X)
Câu 249: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về tiếp tục xây dựng giai cấp công nhân Việt Nam trong thời kỳ đẩy mạnh CNH, HĐH đất nước?
A. Hội nghị Trung ương 6 (Khóa X)
B. Hội nghị Trung ương 4 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa X)
Câu 250: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về tiếp tục xây dựng giai cấp công nhân Việt Nam khẳng định: Kiên định quan điểm giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiên phong là Đảng cộng sản Việt Nam; giai cấp đại diện cho phương thức sản xuất tiên tiến; tiên phong, đi đầu trong sự nghiệp CNH, HĐH đất nước?
A. Hội nghị Trung ương 5 (Khóa X)
B. Hội nghị Trung ương 6 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa X)
Câu 251: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về tăng cường sự lãnh đạo của Đảng đối với công tác thanh niên thời kì đẩy mạnh CNH, HĐH?
A. Hội nghị Trung ương 6 (Khóa X)
B. Hội nghị Trung ương 4 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 7 (Khóa X)

Câu 252: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về tăng cường sự lãnh đạo của Đảng đối với công tác thanh niên và khẳng định: Thanh niên là trụ cột của nước nhà, chủ nhân tương lai của đất nước, là lực lượng xung kích trong xây dựng và bảo vệ Tổ quốc, một trong những nhân tố quyết định sự thành bại của sự nghiệp CNH, HĐH đất nước, hội nhập quốc tế và xây dựng CNXH?
A. Hội nghị Trung ương 5 (Khóa X)
B. Hội nghị Trung ương 6 (Khóa X)
C. Hội nghị Trung ương 7 (Khóa X)
D. Hội nghị Trung ương 5 (Khóa X)

Câu 253: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về xây dựng đội ngũ trí thức trong thời kì đẩy mạnh CNH, HĐH đất nước?
A. Hội nghị Trung ương 6 (Khóa X)
B. Hội nghị Trung ương 4 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 7 (Khóa X)

Câu 254: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về xây dựng đội ngũ trí thức và có quan điểm: trí thức Việt Nam là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh CNH, HĐH đất nước và hội nhập quốc tế.
A. Hội nghị Trung ương 6 (Khóa X)
B. Hội nghị Trung ương 7 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 8 (Khóa X)

Câu 255: Hội nghị nào sau đây của Đảng đã chỉ đạo thí điểm Cuộc vận động “Học tập và làm theo tấm gương đạo đức Hồ Chí Minh”?
A. Hội nghị Trung ương 6 (Khóa IX)
B. Hội nghị Trung ương 12 (Khóa IX)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 7 (Khóa X)

Câu 256: Bộ chính trị khóa mấy đã quyết định tổ chức Cuộc vận động chỉ đạo thí điểm Cuộc vận động “Học tập và làm theo tấm gương đạo đức Hồ Chí Minh” trong toàn Đảng, toàn dân?
A. Bộ chính trị khóa VIII
B. Bộ chính trị khóa IX
C. Bộ chính trị khóa X
D. Bộ chính trị khóa XI

Câu 257: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về một số chủ trương, chính sách lớn để nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên của Tổ chức Thương mại thế giới?
A. Hội nghị Trung ương 4 (Khóa X)
B. Hội nghị Trung ương 5 (Khóa IX)
C. Hội nghị Trung ương 2 ( Khoá X)
D. Hội nghị Trung ương 7 ( Khoá X) 

Câu 258: Ai được bầu làm Tổng Bí thư trong Đại hội lần thứ XI của Đảng (họp từ 12/01 – 19/01/2011)?
A. Nông Đức Mạnh
B. Nguyễn Phú Trọng
C. Nguyễn Tấn Dũng
D. Đỗ Mười

Câu 259: Trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) nêu ra có mấy đặc trưng của chủ nghĩa xã hội?
A. 5
B. 6
C. 7
D. 8

Câu 260: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
A. Giáo dục và đào tạo là quốc sách hàng đầu
B. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh
C. Xây dựng Đảng là then chốt
D. Xây dựng nhà nước chuyên chính vô sản

Câu 261: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
A. Giáo dục và đào tạo là quốc sách hàng đầu
B. Đổi mới về kinh tế và chính trị
C. Xây dựng nhà nước chuyên chính vô sản
D. Do nhân dân làm chủ

Câu 262: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
A. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiên bộ phù hợp
B. Đổi mới về kinh tế và chính trị
C. Xây dựng nhà nước chuyên chính vô sản
D. Do giai cấp công nhân lãnh đạo

Câu 263: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
A. Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc
B. Đổi mới về kinh tế và chính trị
C. Xây dựng nhà nước chuyên chính vô sản
D. Do giai cấp công nhân lãnh đạo thông qua đội tiên phong là Đảng Cộng sản

Câu 264: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
A. Đổi mới về kinh tế và chính trị, đổi mới kinh tế là trọng tâm
B. Xây dựng nhà nước chuyên chính vô sản
C. Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện
D. Do giai cấp công nhân lãnh đạo thông qua đội tiên phong là Đảng Cộng sản

Câu 265: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
A. Đổi mới về kinh tế và chính trị, đổi mới kinh tế là trọng tâm
B. Xây dựng hệ thống chuyên chính vô sản, phát triển kinh tế nhiều thành phần
C. Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển
D. Do giai cấp công nhân lãnh đạo thông qua đội tiên phong là Đảng Cộng sản

Câu 266: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
B. Xây dựng hệ thống chuyên chính vô sản, phát triển kinh tế nhiều thành phần
C. Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo
D. Do giai cấp công nhân lãnh đạo thông qua đội tiên phong là Đảng Cộng sản

Câu 267: Trong những nội dung sau, đâu là một đặc trưng của CNXH được nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển năm 2011) của Đảng ta?
A. Đổi mới về kinh tế và chính trị, đổi mới kinh tế là trọng tâm
B. Xây dựng hệ thống chuyên chính vô sản, phát triển kinh tế nhiều thành phần
C. Do giai cấp công nhân lãnh đạo thông qua đội tiên phong là Đảng Cộng sản
D. Có quan hệ hữu nghị và hợp tác với các nước trên thế giới

Câu 268: Đại hội nào của Đảng ta đã khẳng định đặc điểm nổi bật hiện nay của thời đại là các nước có chế độ chính trị và trình độ phát triển khác nhau cùng tồn tại, vừa hợp tác vừa đấu tranh, cạnh tranh gay gắt vì lợi ích quốc gia, dân tộc?
A. Đại hội lần thứ VII
B. Đại hội lần thứ IX
C. Đại hội lần thứ X
D. Đại hội lần thứ XII

Câu 269: Cương lĩnh nào của Đảng ta xác định mục tiêu đến giữa thế kỷ XXI là xây dựng nước ta trở thành một nước công nghiệp hiện đại, theo định hướng XHCN?
A. Cương lĩnh chính trị đầu tiên (1930)
B. Cương lĩnh của Đảng Lao động Việt Nam (1951)
C. Cương lĩnh (1991)
D. Cương lĩnh (bổ sung, phát triển năm 2011)

Câu 270: Cương lĩnh năm 2011 của Đảng đã chỉ rõ mấy phương hướng cơ bản xây dựng CNXH ở nước ta?
A. 6
B. 7
C. 8
D. 9

Câu 271: Trong những nội dung sau, đâu là một phương hướng nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng và tiêu cực
B. Đẩy mạnh CNH, HĐH đất nước gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường
C. Xây dựng nhà nước chuyên chính vô sản
D. Có một nền kinh tế phát triển cao

Câu 272: Trong những nội dung sau, đâu là một phương hướng nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng và tiêu cực
B. Xây dựng nhà nước chuyên chính vô sản
C. Có một nền kinh tế phát triển cao
D. Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa

Câu 273: Trong những nội dung sau, đâu là một phương hướng nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng và tiêu cực
B. Xây dựng nhà nước chuyên chính vô sản
C. Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc
D. Có một nền kinh tế phát triển cao dựa trên chế độ tư hữu về tư liệu sản xuất

Câu 274: Trong những nội dung sau, đâu là một phương hướng nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng và tiêu cực
B. Xây dựng nhà nước chuyên chính vô sản
C. Xây dựng con người, nâng cao đời sống nhân dân, thực hiện tiến bộ và công bằng xã hội
D. Xây dựng nền nông nghiệp hiện đại, khoa học tiên tiến

Câu 275: Trong những nội dung sau, đâu là một phương hướng nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng và tiêu cực
B. Xây dựng nhà nước chuyên chính vô sản
C. Xây dựng nền nông nghiệp hiện đại, khoa học tiên tiến
D. Xây dựng Đảng trong sạch, vững mạnh

Câu 276: Trong những nội dung sau, đâu là một phương hướng nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng và tiêu cực
B. Xây dựng nền dân chủ xã hội chủ nghĩa, thực hiện đại đoàn kết toàn dân tộc, tăng cường và mở rộng mặt trận dân tộc thống nhất
C. Xây dựng nhà nước chuyên chính vô sản
D. Xây dựng nền nông nghiệp hiện đại, khoa học tiên tiến

Câu 277: Trong những nội dung sau, đâu là một phương hướng nêu ra trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng và tiêu cực
B. Xây dựng và bảo vệ Tổ quốc Việt Nam XHCN
C. Xây dựng nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân
D. Xây dựng nền nông nghiệp hiện đại, khoa học tiên tiến

Câu 278: Trong những nội dung sau, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Quan hệ giữa đổi mới, ổn định và phát triển
B. Quan hệ giữa giáo dục và xã hội trong quá trình phát triển
C. Quan hệ giữa con người và tự nhiên
D. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ

Câu 279: Trong những nội dung sau, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Quan hệ giữa giáo dục và xã hội trong quá trình phát triển
B. Quan hệ giữa con người và tự nhiên
C. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ 
D. Quan hệ giữa đối mới kinh tế và đổi mới chính trị

Câu 280: Trong những nội dung sau, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Quan hệ giữa giáo dục và xã hội trong quá trình phát triển
B. Quan hệ giữa kinh tế thị trường và định hướng XHCN
C. Quan hệ giữa con người và tự nhiên
D. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ 
Câu 281: Trong những nội dung sau, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lính xây dựng đất nước trong thời kà quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Quan hệ giữa giáo dục và xã hội trong quá trình phát triển đất nước theo định hướng XHCN 
B. Quan hệ giữa phát triển LLSX và xây dựng, hoàn thiện từng bước quan hệ sản
xuất XHCN
C. Quan hệ giữa con người và tự nhiên
D. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ 
Câu 282: Trong những nội dung sau, đâu là một trong tám mỗi quan hệ lớn cần giải quyết tốt trong Cương lĩnh xây dựng đất nước trong thời kộ quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Quan hệ giữa giáo dục và xã hội trong quá trình phát triển đất nước theo định hướng XHCN
B. Quan hệ giữa con người và tự nhiên trong bối cảnh biến đổi khí hậu
C. Quan hệ giữa tăng trưởng kinh tế và phát triển văn hóa, thực hiện tiến bộ và công bằng xã hội
D. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ 

Câu 283: Trong những nội dung sau, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A. Quan bệ giữa giáo dục và xã hội trong quá trình phát triển đát nước theo định hướng XHCN
B. Quan hệ giữa con người và tự nhiên trong bối cảnh biến đổi khí hậu
C. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ trong quá trình công nghiệp hóa
D. Quan hệ giữa độc lập, tự chủ và hội nhập quốc tế
Câu 284: Trong những nội dung sai, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lĩnh xây dựng đất nước trong thời là quá độ lên CNXH (bỗ sung, phát triển 2011) của Đảng ta?
A. Quan bệ giữa con người và tự nhiên trong bối cảnh biến đổi khí hậu
B. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ trong quá trình công nghiệp hóa
C. Quan hệ giữa xây dựng CNXH và bảo vệ Tổ quốc XHCN
D. Quan hệ giữa giáo dục và xã hội trong quá trình phát triển đất nước theo định hướng XHCN
Câu 285: Trong những nội dung sau, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lình xây dựng đất nước trong thời kà quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta?
A Quan hệ giữa con người và tự nhiên trong bối cảnh biến đổi khí hậu
B. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ trong quá trình công nghiệp hóa
C. Quan hệ giữa độc lập, tự chủ và hội nhập quốc tế
D. Quan hệ giữa giáo dục và xã hội trong quá trình phát triển đất nước theo định bướng XHCN
Câu 286: Trong những nội dung sau, đâu là một trong tám mối quan hệ lớn cần giải quyết tốt trong Cương lĩnh xây dựng đất nước trong thời kì quá độ lên CNXH (bổ sung, phát triển 2011) của Đảng ta? 
A. Quan hệ giữa con người và tự nhiên trong bối cảnh biến đổi khí hậu
B. Quan hệ giữa nông nghiệp, công nghiệp và dịch vụ trong quá trình công nghiệp
C. Quan bệ giữa giáo dục và xã hội trong quá trình phát triển đất nước theo định hướng XHCN
D. Quan hệ giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ

Câu 287: Hội nghị nào sau đây của Đảng đã chủ trương xây dựng kết cấu hạ tầng đồng bộ nhằm đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại vào năm 2020?
A. Hội nghị Trung ương 6 (Khóa X)
B. Hội nghị Trung ương 4 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 4 (Khóa XI)

Câu 288: Hội nghị nào sau đây của Đảng khẳng định: Đất đai là tài nguyên quốc gia vô cùng quý giá, là tư liệu sản xuất đặc biệt; là tài sản, nguồn lực to lớn của đất nước, là nguồn sống của nhân dân ta; quyền sử dụng đất là hàng hóa đặc biệt?
A. Hội nghị Trung ương 6 (Khóa X)
B. Hội nghị Trung ương 5 (Khóa XI)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 4 (Khóa XI)*

Câu 289: Hội nghị nào sau đây của Đảng đã đưa ra kết luận: Tiếp tục tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí. Xác định, phòng, chống tham nhũng, lãng phí là nhiệm vụ cơ bản, lâu dài, phải thực hiện thường xuyên, có hiệu quả?
A. Hội nghị Trung ương 6 (Khóa X)
B. Hội nghị Trung ương 4 (Khóa X)
C. Hội nghị Trung ương 3 (Khóa X)
D. Hội nghị Trung ương 4 (Khóa XI)

Câu 290: Hội nghị nào sau đây của Đảng đã đưa ra Nghị quyết về phát triển khoa học và công nghệ phục vụ sự nghiệp công nghiệp hóa, hiện đại hóa trong điều kiện kinh tế thị trường định hướng XHCN và hội nhập quốc tế?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa XI)
C. Hội nghị Trung ương 3 (Khóa XI)
D. Hội nghị Trung ương 5 (Khóa XI)

Câu 291: Hội nghị nào sau đây của Đảng đã xác định đổi mới căn bản, toàn diện giáo dục và đào tạo là đổi mới những vấn đề lớn, cốt lõi, cấp thiết, từ quan điểm, tư tưởng chỉ đạo đến mục tiêu, nội dung, phương pháp, cơ chế, chính sách, điều kiện bảo đảm thực hiện; đổi mới từ sự lãnh đạo của Đảng, sự quản lý của Nhà nước đến hoạt động quản trị của cơ sở giáo dục – đào tạo và việc tham gia của gia đình, cộng đồng, hội và bản thân người học; đổi mới ở tất cả các bậc học, ngành học?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa IX)
C. Hội nghị Trung ương 8 (Khóa XI)
D. Hội nghị Trung ương 4 (Khóa XI)

Câu 292: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về xây dựng và phát triển văn hóa, con người Việt Nam đáp ứng yêu cầu phát triển bền vững đất nước?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa IX)
C. Hội nghị Trung ương 8 (Khóa XI)
D. Hội nghị Trung ương 9 (Khóa XI)

Câu 293: Hội nghị nào sau đây của Đảng đã xác định văn hóa là nền tảng tinh thần của xã hội, là mục tiêu, động lực phát triển bền vững đất nước. Văn hóa phải được đặt ngang hàng với kinh tế, chính trị, xã hội?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa IX)
C. Hội nghị Trung ương 9 (Khóa XI)
D. Hội nghị Trung ương 9 (Khóa XII)

Câu 294: Ai được bầu làm Tổng Bí thư trong Đại hội lần thứ XII của Đảng (họp từ 20/01 – 28/01/2016)?
A. Nông Đức Mạnh
B. Nguyễn Phú Trọng
C. Đỗ Mười
D. Nguyễn Văn Linh

Câu 295: Chủ đề của Đại hội Đảng nào xác định “Tăng cường xây dựng Đảng trong sạch, vững mạnh; phát huy sức mạnh toàn dân tộc và dân chủ xã hội chủ nghĩa; đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; bảo vệ vững chắc Tổ quốc, giữ vững môi trường hòa bình, ổn định; phấn đấu sớm đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại”?
A. Đại hội lần thứ VIII
B. Đại hội lần thứ X
C. Đại hội lần thứ XI
D. Đại hội lần thứ XII

Câu 296: Hội nghị nào sau đây của Đảng đã ra Nghị quyết về Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa IX)
C. Hội nghị Trung ương 8 (Khóa XII)
D. Hội nghị Trung ương 9 (Khóa XII)

Câu 297: Hội nghị nào sau đây đã ra Nghị quyết về tăng cường xây dựng, chỉnh đốn Đảng; ngăn chặn, đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống, những biểu hiện “tự diễn biến”, “tự chuyển hóa trong nội bộ”?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa XII)
C. Hội nghị Trung ương 8 (Khóa XII)
D. Hội nghị Trung ương 9 (Khóa XII)

Câu 298: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về tập trung xây dựng đội ngũ cán bộ các cấp, nhất là cấp chiến lược, đủ phẩm chất, năng lực và uy tín, ngang tầm nhiệm vụ?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa XII)
C. Hội nghị Trung ương 7 (Khóa XII)
D. Hội nghị Trung ương 9 (Khóa XII)

Câu 299: Hội nghị nào sau đây của Đảng đã ban hành Quy định về trách nhiệm nêu gương của cán bộ, đảng viên, trước hết là Ủy viên Bộ Chính trị, Ủy viên Ban Bí thư, Ủy viên Ban Chấp hành Trung ương Đảng?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa XII)
C. Hội nghị Trung ương 7 (Khóa XII)
D. Hội nghị Trung ương 8 (Khóa XII)

Câu 300: Hội nghị nào sau đây của Đảng đã ban hành Quy định về trách nhiệm nêu gương của cán bộ, đảng viên, trước hết là Ủy viên Bộ Chính trị, Ủy viên Ban Bí thư, Ủy viên Ban Chấp hành Trung ương Đảng?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa XII)
C. Hội nghị Trung ương 7 (Khóa XII)
D. Hội nghị Trung ương 8 (Khóa XII)

Câu 301: Hội nghị nào sau đây của Đảng đã ban hành Nghị quyết về cải cách chính sách tiền lương đối với cán bộ, công chức, viên chức, lực lượng vũ trang và người lao động trong doanh nghiệp?
A. Hội nghị Trung ương 6 (Khóa XI)
B. Hội nghị Trung ương 4 (Khóa XII)
C. Hội nghị Trung ương 7 (Khóa XII)
D. Hội nghị Trung ương 8 (Khóa XII)**

Câu 302: Ai được bầu làm Tổng Bí thư trong Đại hội lần thứ XIII của Đảng (họp từ 25/01 – 01/02/2021)?
A. Nông Đức Mạnh
B. Nguyễn Phú Trọng
C. Đỗ Mười
D. Nguyễn Văn Linh

Câu 303: Chủ đề của Đại hội nào đã xác định “Tăng cường xây dựng, chỉnh đốn Đảng và hệ thống chính trị trong sạch, vững mạnh; khơi dậy ý chí và quyết tâm phát triển đất nước, phát huy sức mạnh đại đoàn kết toàn dân tộc kết hợp với sức mạnh thời đại; tiếp tục đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới; xây dựng và bảo vệ vững chắc Tổ quốc, giữ vững môi trường hòa bình, ổn định; phấn đấu để đến giữa thế kỷ XXI, nước ta trở thành một nước phát triển, theo định hướng xã hội chủ nghĩa”?
A. Đại hội lần thứ VII
B. Đại hội lần thứ IX
C. Đại hội lần thứ XII
D. Đại hội lần thứ XIII

Câu 304: Trong những nội dung sau, đâu là một trong sáu nhiệm vụ trọng tâm trong nhiệm kỳ Đại hội XIII?
A. Tiếp tục đẩy mạnh xây dựng, chỉnh đốn Đảng, xây dựng Nhà nước pháp quyền xã hội chủ nghĩa và hệ thống chính trị toàn diện, trong sạch, vững mạnh
B. Xây dựng nền nông nghiệp hiện đại, khoa học hiện đại
C. Xây dựng CNXH và bảo vệ Tổ quốc XHCN
D. Phát triển toàn diện giáo dục và đào tạo trong quá trình phát triển đất nước theo định hướng XHCN

Câu 305: Trong những nội dung sau, đâu là một trong sáu nhiệm vụ trọng tâm trong nhiệm kỳ Đại hội XIII?
A. Xây dựng nền nông nghiệp hiện đại, khoa học hiện đại
B. Xây dựng CNXH và bảo vệ Tổ quốc XHCN
C. Phát triển toàn diện giáo dục và đào tạo trong quá trình phát triển đất nước theo định hướng XHCN
D. Tập trung kiểm soát đại dịch Covid-19, tiêm chủng đại trà vắc-xin Covid-19 cho cộng đồng; phục hồi, phát triển kinh tế - xã hội, đổi mới mạnh mẽ mô hình tăng trưởng, cơ cấu lại nền kinh tế

Câu 306: Trong những nội dung sau, đâu là một trong sáu nhiệm vụ trọng tâm trong nhiệm kỳ Đại hội XIII?
A. Xây dựng nền nông nghiệp hiện đại, khoa học hiện đại
B. Giữ vững độc lập, tự chủ, tiếp tục nâng cao chất lượng, hiệu quả hoạt động đối ngoại, hội nhập quốc tế; tăng cường tiềm lực quốc phòng, an ninh
C. Phát triển toàn diện giáo dục và đào tạo trong quá trình phát triển đất nước theo định hướng XHCN
D. Phát triển nền kinh tế kế hoạch hóa, tập trung, quan liêu, bao cấp

Câu 307: Trong những nội dung sau, đâu là một trong sáu nhiệm vụ trọng tâm trong nhiệm kỳ Đại hội XIII?
A. Xây dựng nền nông nghiệp hiện đại, khoa học hiện đại
B. Khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc; phát huy giá trị văn hóa, sức mạnh con người Việt Nam trong sự nghiệp xây dựng và bảo vệ Tổ quốc, hội nhập quốc tế
C. Phát triển toàn diện giáo dục và đào tạo trong quá trình phát triển đất nước theo định hướng XHCN
D. Phát triển nền kinh tế kế hoạch hóa, tập trung, quan liêu, bao cấp

Câu 308: Trong những nội dung sau, đâu là một trong sáu nhiệm vụ trọng tâm trong nhiệm kỳ Đại hội XIII?
A. Xây dựng nền nông nghiệp hiện đại, khoa học hiện đại
B. Phát triển toàn diện giáo dục và đào tạo trong quá trình phát triển đất nước theo định hướng XHCN
C. Phát triển nền kinh tế kế hoạch hóa, tập trung, quan liêu, bao cấp
D. Hoàn thiện đồng bộ hệ thống pháp luật, cơ chế, chính sách nhằm phát huy mạnh mẽ dân chủ xã hội chủ nghĩa, quyền làm chủ của nhân dân; đồng thời xây dựng Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam trong sạch, vững mạnh

Câu 309: Trong những nội dung sau, đâu là một trong sáu nhiệm vụ trọng tâm trong nhiệm kỳ Đại hội XIII?
A. Quản lý chặt chẽ, sử dụng hợp lý, hiệu quả đất đai, tài nguyên; bảo vệ, cải thiện môi trường, chủ động, tích cực triển khai các giải pháp thích ứng với biến đổi khí hậu, thiên tai khắc nghiệt
B. Xây dựng nền nông nghiệp hiện đại, khoa học hiện đại
C. Xây dựng CNXH và bảo vệ Tổ quốc XHCN
D. Phát triển toàn diện giáo dục và đào tạo trong quá trình phát triển đất nước theo định hướng XHCN

Câu 310: Quan điểm sau đây thuộc về quan điểm của Đại hội nào của Đảng ta: Ưu tiên phát triển công nghiệp nặng một cách hợp lý trên cơ sở phát triển nông nghiệp và công nghiệp nhẹ, kết hợp xây dựng công nghiệp và nông nghiệp cả nước thành một cơ cấu kinh tế công-nông nghiệp?
A. Đại hội III
B. Đại hội IV
C. Đại hội V
D. Đại hội VI

Câu 311: Trong những nội dung sau, đâu là một bài học kinh nghiệm được rút ra từ Đại hội IV của Đảng?
A. Giương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội, kết hợp với sức mạnh chiến đấu của tiền tuyến lớn với tiềm lực của hậu phương lớn, động viên đến mức cao nhất lực lượng của toàn dân, toàn quân vào cuộc chiến đấu cứu nước
B. Phải giữ vững định hướng xã hội chủ nghĩa trong quá trình đổi mới, kết hợp sự kiện định về nguyên tắc và chiến lược cách mạng với sự linh hoạt trong sách lược, nhạy cảm nắm bắt cái mới
C. Đổi mới toàn diện, đồng bộ và triệt để, nhưng phải có bước đi, hình thức và cách làm phù hợp. Đổi mới là một cuộc cách mạng sâu sắc trên tất cả các lĩnh vực của đời sống xã hội. Đồng thời, trong mỗi bước đi lại phải xác định đúng khâu then chốt để tập trung sức giải quyết làm cơ sở đổi mới các khâu khác và lĩnh vực khác
D. Phát triển kinh tế hàng hóa nhiều thành phần phải đi đôi với tăng cường vai trò quản lý của Nhà nước về kinh tế - xã hội

Câu 312: Trong những nội dung sau, đâu là một bài học kinh nghiệm được rút ra từ Đại hội IV của Đảng?
A. Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng “Lấy dân làm gốc”, xây dựng và phát huy quyền làm chủ tập thể của nhân dân lao động
B. Đổi mới toàn diện, đồng bộ và triệt để, nhưng phải có bước đi, hình thức và cách làm phù hợp. Đổi mới là một cuộc cách mạng sâu sắc trên tất cả các lĩnh vực của đời sống xã hội. Đồng thời, trong mỗi bước đi lại phải xác định đúng khâu then chốt để tập trung sức giải quyết làm cơ sở đổi mới các khâu khác và lĩnh vực khác
C. Phát triển kinh tế hàng hóa nhiều thành phần phải đi đôi với tăng cường vai trò quản lý của Nhà nước về kinh tế - xã hội
D. Nắm vững và vận dụng đúng đắn chiến lược tiền công, đây lùi địch từng bước.
Không ngừng củng cổ trận địa cách mạng, tạo thế và lực hơn hăn địch đề tiên lên giành thắng lợi hoàn toàn

Câu 313: Trong những nội dung sau, đâu là một bài học kinh nghiệm được rút ra từ Đại hội IV của Đảng?
A. Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng “Lấy dân làm gốc”, xây dựng và phát huy quyền làm chủ tập thể của nhân dân lao động
B. Đảng phải luôn luôn xuất phát từ thực tế, tôn trọng và hành động theo quy luật khách quan
C. Ra sức xây dựng và tổ chức lực lượng chiến đấu trong cả nước, đặc biệt hết sức coi trọng xây dựng và phát triển lực lượng cách mạng ở miền Nam; tranh thủ sự ủng hộ quốc tế
D. Phát triển kinh tế hàng hóa nhiều thành phần phải đi đôi với tăng cường vai trò quản lý của Nhà nước về kinh tế - xã hội

Câu 314: Trong những nội dung sau, đâu là một bài học kinh nghiệm được rút ra từ Đại hội IV của Đảng?
A. Trong toàn bộ hoạt động của mình, Đảng phải quán triệt tư tưởng “Lấy dân làm gốc”, xây dựng và phát huy quyền làm chủ tập thể của nhân dân lao động
B. Tạo ra một phương pháp cách mạng đúng, sử dụng bạo lực cách mạng gồm lực lượng chính trị và lực lượng vũ trang, khởi nghĩa từng phần ở nông thôn phát triển thành chiến tranh cách mạng, kết hợp đấu tranh quân sự với đấu tranh ngoại giao

Câu 315: Hội nghị TW khóa mấy của Đảng đã có chủ trương hoàn thành thống nhất nước nhà, đưa cả nước tiến nhanh, tiến mạnh, tiến vững chắc lên CNXH?
A. Hội nghị lần thứ 23 Ban Chấp hành Trung ương Đảng Khóa II
B. Hội nghị lần thứ 24 Ban Chấp hành Trung ương Đảng Khóa III
C. Hội nghị lần thứ 23 Ban Chấp hành Trung ương Đảng Khóa IV
D. Hội nghị lần thứ 24 Ban Chấp hành Trung ương Đảng Khóa IV`;

const newAnswersText = `Câu 207: D. Câu 208: A. Câu 209: C. Câu 210: C
.
Câu 211: D. Câu 212: C
. Câu 213: C. Câu 214: D. Câu 215: D. Câu 216: D. Câu 217: C. Câu 218: D. Câu 219: A. Câu 220: B
.
Câu 221: B. Câu 222: D
. Câu 223: C. Câu 224: A. Câu 225: C. Câu 226: A. Câu 227: D. Câu 228: C. Câu 229: C. Câu 230: B
.
Câu 231: B. Câu 232: D
. Câu 233: C. Câu 234: A. Câu 235: A. Câu 236: B. Câu 237: D. Câu 238: D. Câu 239: A. Câu 240: A
.
Câu 241: C. Câu 242: C. Câu 243: C. Câu 244: C. Câu 245: B. Câu 246: C. Câu 247: D. Câu 248: B. Câu 249: A. Câu 250: B
.
Câu 251: D. Câu 252: C. Câu 253: D. Câu 254: B. Câu 255: B. Câu 256: C. Câu 257: A. Câu 258: B. Câu 259: D. Câu 260: B
.
Câu 261: D. Câu 262: A. Câu 263: A. Câu 264: C. Câu 265: C. Câu 266: C. Câu 267: D. Câu 268: C. Câu 269: D. Câu 270: C
.
Câu 271: B. Câu 272: D. Câu 273: C. Câu 274: C. Câu 275: D. Câu 276: B. Câu 277: C. Câu 278: A. Câu 279: D. Câu 280: B
.
Câu 281: B. Câu 282: C. Câu 283: D. Câu 284: C. Câu 285: C. Câu 286: D. Câu 287: D. Câu 288: B. Câu 289: D. Câu 290: A
.
Câu 291: C. Câu 292: D. Câu 293: C. Câu 294: B. Câu 295: D. Câu 296: C. Câu 297: B. Câu 298: C. Câu 299: D. Câu 300: D
.
Câu 301: C. Câu 302: B. Câu 303: D. Câu 304: A. Câu 305: D. Câu 306: B. Câu 307: B. Câu 308: D. Câu 309: A. Câu 310: B
.
Câu 311: A. Câu 312: D. Câu 313: C. Câu 314: B. Câu 315: B`;

// Parse answers
const answersMapping = {};
const answerMatches = newAnswersText.match(/Câu (\d+): ([A-D])/g);
if (answerMatches) {
  answerMatches.forEach(m => {
    const parts = m.split(': ');
    const num = parseInt(parts[0].replace('Câu ', ''));
    const ans = parts[1];
    answersMapping[num] = ans;
  });
}

// Parse questions
const newQuestions = [];
const blocks = newQuestionsText.split(/Câu (\d+):/);
if (blocks.length > 1) {
  for (let i = 1; i < blocks.length; i += 2) {
    const num = parseInt(blocks[i]);
    const block = blocks[i + 1].trim();
    
    const lines = block.split('\n');
    const questionTextLines = [];
    const options = {};
    
    let currentSection = 'text';
    for(let line of lines) {
       line = line.trim();
       if (line.match(/^[A-D]\./)) {
         const key = line[0];
         const val = line.substring(2).trim();
         options[key] = val;
         currentSection = 'option';
       } else if (currentSection === 'text' && line !== '') {
         questionTextLines.push(line);
       }
    }
    
    newQuestions.push({
      id: num,
      text: questionTextLines.join(' '),
      options,
      answer: answersMapping[num] || 'A'
    });
  }
}

// Load existing chapter3.ts
const existingFile = fs.readFileSync('/src/data/chapter3.ts', 'utf8');
// Extract questions 1-163
// Since it's a JS object export, we'll try to parse it or just use regex to get the first 163 items
// Or more simply, since we know they are ordered 1-270, we can find the delimiter
const endOf163 = existingFile.indexOf('    id: 164,');
const startOfFile = `import { Question } from '../types';\n\nexport const chapter3aQuestions: Question[] = [`;
// Find the closing bracket before id: 164
const slicePoint = existingFile.lastIndexOf('{', endOf163);
const part1Body = existingFile.substring(existingFile.indexOf('['), slicePoint).trim().replace('[', '');

// Prepare Part 1
const part1Content = `import { Question } from '../types';\n\nexport const chapter3aQuestions: Question[] = [\n` + part1Body.trim().replace(/,$/, '') + `\n];\n`;

// Prepare Part 2 (New Questions)
const part2Content = `import { Question } from '../types';\n\nexport const chapter3bQuestions: Question[] = [\n` + 
  newQuestions.map((q, idx) => {
    return `  {
    id: ${idx + 1},
    text: "Câu ${q.id}: ${q.text.replace(/"/g, '\\"')}",
    options: ${JSON.stringify(q.options)},
    answer: "${q.answer}"
  }`;
  }).join(',\n') + `\n];\n`;

fs.writeFileSync('/src/data/chapter3a.ts', part1Content);
fs.writeFileSync('/src/data/chapter3b.ts', part2Content);

console.log('Split into chapter3a.ts and chapter3b.ts successfully.');
console.log('Part 1 count: 163');
console.log('Part 2 count: ' + newQuestions.length);

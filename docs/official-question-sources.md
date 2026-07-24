# Nguồn biên soạn bộ câu hỏi bổ sung

Chương 4 hiện được quản lý trong `src/data/chapter4.ts` với khoảng 300 câu hỏi. Bộ câu hỏi này được biên soạn lại theo dạng trắc nghiệm từ các nguồn chính thống, không sao chép nguyên văn dài và không dùng bộ đề trôi nổi không rõ bản quyền.

## Nguồn ưu tiên

1. **Tư liệu Văn kiện Đảng - Ngày thành lập Đảng Cộng sản Việt Nam 3-2-1930**
   - Dùng cho nhóm câu hỏi về Hội nghị hợp nhất, vai trò Nguyễn Ái Quốc, chi bộ cộng sản đầu tiên, ý nghĩa thành lập Đảng.

2. **Tư liệu Văn kiện Đảng - Đại hội đại biểu toàn quốc lần thứ II**
   - Dùng cho nhóm câu hỏi về Đại hội II năm 1951, địa điểm Đại hội, Điều lệ Đảng Lao động Việt Nam, nhiệm vụ trong kháng chiến và xây dựng chế độ dân chủ nhân dân.

3. **Tư liệu Văn kiện Đảng - Đại hội đại biểu toàn quốc lần thứ III**
   - Dùng cho nhóm câu hỏi về hai nhiệm vụ chiến lược sau năm 1954, xây dựng miền Bắc và đấu tranh thống nhất đất nước.

4. **Tư liệu Văn kiện Đảng - Đại hội đại biểu toàn quốc lần thứ VI**
   - Dùng cho nhóm câu hỏi về Đại hội VI năm 1986, Tổng Bí thư Nguyễn Văn Linh, khởi xướng đổi mới, đổi mới cơ chế quản lý kinh tế.

5. **Tư liệu Văn kiện Đảng - Cương lĩnh 1991 và Cương lĩnh bổ sung, phát triển năm 2011**
   - Dùng cho nhóm câu hỏi về thời kỳ quá độ lên chủ nghĩa xã hội, các đặc trưng xã hội xã hội chủ nghĩa ở Việt Nam, thành tựu đổi mới, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.

6. **Tư liệu Văn kiện Đảng - Các kỳ Đại hội Đảng từ I đến XIII**
   - Dùng cho nhóm câu hỏi về thời gian, địa điểm, văn kiện, nhân sự chủ chốt, ý nghĩa và định hướng phát triển qua từng kỳ Đại hội.

## Nguyên tắc biên soạn

- Ưu tiên câu hỏi kiểm tra mốc thời gian, địa điểm, nhân vật, văn kiện, ý nghĩa lịch sử và nội dung đường lối.
- Không dùng câu hỏi mơ hồ hoặc quá dài.
- Không nhồi từ khóa chính trị; viết rõ ràng, phù hợp mục tiêu ôn tập.
- Không copy nguyên văn các bộ đề trắc nghiệm không rõ bản quyền.
- Chương 4 dùng ID từ `4001` trở lên.
- Khi cần thêm câu hỏi mới, ưu tiên tạo chương/bộ riêng trong `src/data/questionBank.ts`, không chèn lẫn vào chương cũ.

## Cách chỉnh sửa trong app

Mở trang Admin:

```text
#/admin
```

Trang Admin cho phép thêm chương, sửa câu hỏi, import/export JSON. Dữ liệu chỉnh trong Admin được lưu local trên thiết bị; nếu muốn đưa vào mã nguồn chính thức, export JSON rồi cập nhật lại các file trong `src/data`.

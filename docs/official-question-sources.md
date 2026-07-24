# Nguồn biên soạn bộ câu hỏi bổ sung

Bộ câu hỏi bổ sung trong `src/data/officialSupplement.ts` được biên soạn lại theo dạng trắc nghiệm từ các nguồn chính thống, không sao chép nguyên văn dài.

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

## Nguyên tắc biên soạn

- Ưu tiên câu hỏi kiểm tra mốc thời gian, địa điểm, nhân vật, văn kiện, ý nghĩa lịch sử và nội dung đường lối.
- Không dùng câu hỏi mơ hồ hoặc quá dài.
- Không nhồi từ khóa chính trị; viết rõ ràng, phù hợp mục tiêu ôn tập.
- Không copy nguyên văn các bộ đề trắc nghiệm không rõ bản quyền.
- Khi thêm câu hỏi mới, dùng ID cao theo chương:
  - Chương 1: từ `1001`
  - Chương 2: từ `2001`
  - Chương 3: từ `3001`

## Cách đồng bộ vào app

Chạy lệnh:

```bash
npm run sync:questions
```

Các workflow build/lint/dev đã tự chạy lệnh này trước khi kiểm tra hoặc build app.

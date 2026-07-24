# Gợi ý khai báo Google Play Data Safety

Tài liệu này giúp điền phần **Data safety** trong Play Console thống nhất với chính sách quyền riêng tư.

## Trạng thái app hiện tại

- Không có đăng nhập.
- Không có tài khoản người dùng.
- Không có quảng cáo.
- Không có thanh toán trong app.
- Không yêu cầu vị trí, camera, microphone, danh bạ, SMS.
- Dữ liệu câu hỏi/chỉnh sửa Admin local được lưu trên thiết bị bằng localStorage.
- Người dùng có thể tự export JSON nếu muốn sao lưu/chuyển dữ liệu.

## Khai báo đề xuất

### Data collection

Chọn `No` nếu bản phát hành không gửi dữ liệu ra server và chỉ lưu local trên thiết bị.

### Data sharing

Chọn `No`.

### Security practices

- App không có tài khoản, nên không cần quy trình xóa tài khoản.
- Không thu thập dữ liệu cá nhân.
- Dữ liệu học tập local có thể xóa bằng cách xóa dữ liệu ứng dụng trên Android.

### Ads

Chọn `No`, trừ khi sau này tích hợp AdMob hoặc SDK quảng cáo khác.

### App access

Nếu Play Console hỏi App access, chọn app không yêu cầu đăng nhập. Trang Admin là công cụ local ẩn bằng URL riêng, không phải khu vực đăng nhập server.

## Khi nào phải cập nhật khai báo

Cần cập nhật Data Safety và Privacy Policy nếu sau này thêm bất kỳ tính năng nào sau đây:

- Đăng nhập/tạo tài khoản.
- Gửi điểm/kết quả lên server.
- Đồng bộ cloud.
- Google Analytics/Firebase Analytics.
- Crashlytics hoặc SDK phân tích crash có thu thập định danh.
- Quảng cáo.
- Thanh toán trong app.
- Push notification có token thiết bị.

## Privacy Policy URL

Dùng URL sau sau khi Pages deploy thành công:

```text
https://maraphuc.github.io/lich-su-dang/privacy-policy.html
```

# Hướng dẫn phát hành Lịch Sử Đảng Quiz lên Google Play

Tài liệu này dùng cho bước đưa app lên Google Play Console sau khi giao diện và dữ liệu câu hỏi đã sẵn sàng.

## 1. File cần upload lên Play Console

Google Play dùng **Android App Bundle** cho app mới. File cần upload là:

```text
app-release.aab
```

Workflow `Build Release AAB` sẽ tạo artifact:

```text
lich-su-dang-release-aab
```

Bên trong artifact có file:

```text
android/app/build/outputs/bundle/release/app-release.aab
```

## 2. Tạo keystore release

Chạy lệnh này trên máy cá nhân, không commit file keystore lên GitHub:

```bash
keytool -genkeypair \
  -v \
  -keystore lich-su-dang-release.keystore \
  -alias lich-su-dang \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

Sau đó mã hóa keystore sang base64:

### macOS/Linux

```bash
base64 -w 0 lich-su-dang-release.keystore > keystore.base64
```

### Windows PowerShell

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("lich-su-dang-release.keystore")) | Set-Content keystore.base64
```

## 3. Thêm GitHub Secrets

Vào GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

Tạo 4 secret:

```text
ANDROID_KEYSTORE_BASE64     = nội dung file keystore.base64
ANDROID_KEYSTORE_PASSWORD   = mật khẩu keystore bạn đã đặt
ANDROID_KEY_ALIAS           = lich-su-dang
ANDROID_KEY_PASSWORD        = mật khẩu key alias bạn đã đặt
```

Không chia sẻ 4 giá trị này công khai.

## 4. Chạy workflow build release

Vào **Actions** → **Build Release AAB** → **Run workflow**.

Nhập:

```text
version_code: 1
version_name: 1.0.0
```

Mỗi lần upload bản mới lên Play Console, `version_code` phải tăng lên: `2`, `3`, `4`...

## 5. Cấu hình trong Play Console

### App details

- App name: `Lịch Sử Đảng Quiz`
- Default language: `Vietnamese (vi-VN)`
- App or game: `App`
- Free or paid: `Free`
- Category gợi ý: `Education`

### Privacy Policy URL

Sau khi GitHub Pages deploy thành công, dùng URL:

```text
https://maraphuc.github.io/lich-su-dang/privacy-policy.html
```

### Data Safety gợi ý

Với cấu hình hiện tại, app không yêu cầu đăng nhập và chỉ lưu dữ liệu ôn tập/Admin local trên thiết bị. Khi điền Data Safety, giữ thống nhất với `public/privacy-policy.html`.

Gợi ý:

- Data collection: `No`, nếu bản phát hành không gửi dữ liệu ra server.
- Data sharing: `No`.
- Security practices: app không có tài khoản đăng nhập, không cần yêu cầu xóa tài khoản.
- Ads: `No`, nếu không thêm SDK quảng cáo.
- In-app purchases: `No`, nếu không thêm thanh toán.

Nếu sau này thêm login, analytics, quảng cáo, gửi điểm lên server hoặc đồng bộ cloud, phải cập nhật cả Data Safety và Privacy Policy.

## 6. Store listing assets cần chuẩn bị

Tối thiểu nên có:

- App icon Play Store: PNG 512×512.
- Feature graphic: 1024×500.
- Ít nhất 2 ảnh chụp màn hình điện thoại.
- Nên có 4–8 ảnh: trang chủ, làm bài, kết quả, admin local hoặc quản lý câu hỏi nếu muốn giới thiệu.

Không dùng ảnh gây hiểu nhầm rằng đây là ứng dụng chính thức của cơ quan nhà nước/Đảng nếu app chỉ là công cụ ôn tập cá nhân.

## 7. Nội dung mô tả đã chuẩn bị

Metadata nằm trong:

```text
fastlane/metadata/android/vi-VN/
```

Gồm:

- `title.txt`
- `short_description.txt`
- `full_description.txt`

Có thể copy nội dung từ các file này vào Play Console.

## 8. Kiểm tra trước khi gửi review

- Mở app trên điện thoại Android thật bằng APK/AAB test.
- Kiểm tra Chương 1–4, đặc biệt Chương 4 có 300 câu.
- Kiểm tra làm bài thi thử 50 câu.
- Kiểm tra trang Admin không hiển thị công khai trên trang chủ.
- Kiểm tra Privacy Policy URL mở được công khai.
- Kiểm tra app không crash khi offline.

## 9. Closed testing

Nếu tài khoản Play Developer là tài khoản cá nhân mới, Google Play có thể yêu cầu closed testing trước khi phát hành production. Hãy tạo nhóm tester, upload AAB vào Closed testing và chạy đủ điều kiện Google Play yêu cầu trước khi xin quyền Production.

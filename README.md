# Trợ lý ảo AI CAX LỆ THỦY version 1.1

Giao diện mới dùng xanh than `#263D52`, nền xám sáng `#F3F5F7` và chữ `#213044`. Phần đầu trang gọn, cột giới thiệu bên trái, khung chat bên phải và liên hệ hỗ trợ ở cuối. Không cần cài thư viện hoặc build.

## Sử dụng

1. Mở `index.html` bằng trình duyệt để xem.
2. [Đưa lên GitHub Pages](HUONG_DAN_GITHUB.md).
3. [Quản trị, sửa cấu hình và khôi phục](QUAN_TRI.md).
4. [Kết quả kiểm tra](KIEM_THU.md).

## Cập nhật từ giao diện xanh mạ non

Giải nén `Cap-nhat-giao-dien-xanh-than.zip`, tải đúng bốn tệp `index.html`, `styles.css`, `config.js`, `favicon.svg` lên cùng vị trí các tệp cũ trong kho và commit. Cần cập nhật cả `config.js` vì tệp này quyết định màu hiển thị cuối cùng. Các đường dẫn tài nguyên có mã phiên bản để giảm việc trình duyệt dùng lại màu cũ. Đợi GitHub Pages xuất bản thành công rồi tải lại website.

Bộ đầy đủ nằm trong `Tro-ly-ao-CAX-Le-Thuy-giao-dien-xanh-than.zip`. Bản xanh mạ non trước khi thay đổi được giữ trong `Sao-luu-giao-dien-xanh-ma-non.zip`.

## Tệp chính

| Tệp | Mục đích |
| --- | --- |
| `config.js` | Tiêu đề, URL Dify, màu và thông tin liên hệ |
| `index.html` | Bố cục, phần giới thiệu và khung chat |
| `styles.css` | Giao diện máy tính/điện thoại |
| `app.js` | Áp dụng cấu hình, kiểm tra URL và tạo liên kết gọi điện |
| `favicon.svg` | Biểu tượng LT trên thẻ trình duyệt |
| `.nojekyll` | Phục vụ trang tĩnh khi xuất bản từ nhánh |

Xem qua máy chủ cục bộ nếu có Python: mở Terminal trong thư mục và chạy `python -m http.server 8088 --bind 127.0.0.1`, rồi mở `http://127.0.0.1:8088`. Dừng bằng Ctrl+C. GitHub Pages không cần Python.

Chatbot vẫn dùng URL đã cung cấp, giữ quyền microphone và clipboard. Giao diện bên trong iframe do Dify quản lý; thiết kế này chỉ thay trang bao ngoài. Nội dung, kiến thức, phiên hội thoại và quyền truy cập vẫn nằm ở Dify. Không đặt khóa API hoặc dữ liệu riêng tư vào bộ mã.

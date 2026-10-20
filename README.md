# Trợ lý ảo AI CAX LỆ THỦY version 1.1

Trang tĩnh màu xanh mạ non với tiêu đề, chatbot Dify và liên hệ Công an xã Lệ Thủy — SĐT: 0323.882.768. Khung chatbot đã thu còn khoảng 2/3 chiều rộng và chiều cao bản trước trên máy tính, nằm bên phải; chừa vùng trống phía trên, dưới và bên trái để bổ sung thông tin. Trên điện thoại, chatbot dùng đủ chiều ngang và giảm chiều cao để vẫn dễ nhập tin nhắn. Không cần cài thư viện hoặc build.

## Bắt đầu

1. Mở `index.html` bằng trình duyệt để xem giao diện.
2. Đọc [Hướng dẫn đưa lên GitHub Pages](HUONG_DAN_GITHUB.md) để xuất bản.
3. Đọc [Hướng dẫn quản trị](QUAN_TRI.md) để sửa cấu hình, cập nhật và khôi phục.
4. Xem [Kết quả kiểm tra](KIEM_THU.md) để biết phạm vi đã xác minh.

## Tệp cần biết

| Tệp | Mục đích |
| --- | --- |
| `config.js` | Tiêu đề, link Dify, màu và thông tin liên hệ; nơi chỉnh sửa thường xuyên |
| `index.html` | Bố cục và nội dung mặc định nếu JavaScript không chạy |
| `styles.css` | Bố cục máy tính/điện thoại và màu mặc định |
| `app.js` | Áp dụng cấu hình, kiểm tra URL và tạo liên kết gọi điện |
| `favicon.svg` | Biểu tượng thẻ trình duyệt |
| `.nojekyll` | Tắt xử lý Jekyll khi xuất bản từ nhánh |

Để xem qua địa chỉ cục bộ, mở Terminal trong thư mục này, chạy `python -m http.server 8088 --bind 127.0.0.1`, rồi mở `http://127.0.0.1:8088`. Dùng Ctrl+C để dừng. Cần có Python cho cách xem này; website trên GitHub không cần Python.

Website không tự lưu hội thoại, không thu thập biểu mẫu và không có trang quản trị riêng. Dify xử lý nội dung chatbot, phiên trò chuyện, mô hình và quyền truy cập. Màu bên trong iframe phải được chỉnh ở Dify. Không đưa khóa API hoặc dữ liệu riêng tư vào bộ mã.

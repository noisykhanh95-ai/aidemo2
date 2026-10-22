# Kết quả kiểm tra — giao diện xanh than

Ngày kiểm tra: 22/10/2026 (Asia/Bangkok). Đây là bản thiết kế mới của Trợ lý ảo AI CAX LỆ THỦY version 1.1. Chưa tự xuất bản lên GitHub.

## Thay đổi

- Nền xám sáng `#F3F5F7`, điểm nhấn xanh than `#263D52`, chữ `#213044`.
- Đầu trang gọn với ký hiệu chữ LT, ba tính năng đánh số ở bên trái và nút “Bắt đầu trò chuyện”.
- Khung chat bên phải có tiêu đề riêng, chiều rộng khoảng 2/3 vùng nội dung và chiều cao được giới hạn; vùng iframe tối thiểu khoảng 440px ở cửa sổ thấp.
- Giữ khoảng trống trên/dưới cho thông tin bổ sung và liên hệ cuối trang.
- Đường dẫn CSS, cấu hình và favicon có mã phiên bản để tránh dùng lại tài nguyên cũ.

## Đã kiểm tra

| Hạng mục | Kết quả |
| --- | --- |
| Máy tính 1366 × 960 | Không tràn ngang; khung khoảng 828 × 540px; iframe khoảng 469px, vừa vùng chứa |
| Điện thoại 390 × 844 | Không tràn ngang; giới thiệu ở trên chatbot; khung cao khoảng 510px |
| Máy tính bảng 768 × 1024 | Không tràn ngang; iframe vừa vùng chứa |
| Bộ màu thực tế trong trình duyệt | Xác nhận nền rgb(243,245,247) và primary #263D52, không còn màu cấu hình xanh mạ non |
| Nút Bắt đầu trò chuyện | Nhấp đưa tới #chat; không gửi tin nhắn |
| Liên hệ | Đúng Công an xã Lệ Thủy; liên kết tel:0323882768 |
| Chatbot | Đúng URL; hiển thị giao diện, ô nhập và phản hồi có sẵn trong phiên |
| JavaScript | Cú pháp app.js/config.js hợp lệ; không ghi nhận lỗi trình duyệt trong lượt kiểm tra |

Kích thước thực có thể làm tròn khoảng 1px do tỷ lệ hiển thị thiết bị. Đã lưu ảnh tại `kiem-tra/giao-dien-xanh-than-may-tinh.png` và `kiem-tra/giao-dien-xanh-than-dien-thoai.png`. Ảnh không nằm trong ZIP đưa lên GitHub.

## Phạm vi chưa kiểm tra

Chưa xuất bản bản thiết kế này lên GitHub Pages. Kích thước điện thoại/máy tính bảng là mô phỏng trong trình duyệt, chưa thay thế kiểm tra trên thiết bị thật. Chưa mở microphone, ghi âm, ghi clipboard hoặc gọi số liên hệ; chỉ giữ thuộc tính quyền và liên kết. Không sửa hoặc kiểm định kiến thức/mô hình/phản hồi của Dify. Giao diện bên trong iframe vẫn do Dify quản lý.

## Tệp cần cập nhật

Gói `Cap-nhat-giao-dien-xanh-than.zip` có đúng bốn tệp: `index.html`, `styles.css`, `config.js`, `favicon.svg`. Cần tải đủ cả bốn lên cùng vị trí tệp cũ. Tệp app.js giữ nguyên. Bộ mã đầy đủ và tài liệu nằm trong `Tro-ly-ao-CAX-Le-Thuy-giao-dien-xanh-than.zip`.

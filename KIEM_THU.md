# Kết quả chạy thử — phiên bản 1.1

Ngày kiểm tra: 20/10/2026, múi giờ Asia/Bangkok. Chạy bằng máy chủ HTTP cục bộ và trình duyệt trong Codex. Chưa xuất bản lên GitHub theo yêu cầu.

## Kết quả

| Hạng mục | Kết quả |
| --- | --- |
| Cú pháp JavaScript | `app.js` và `config.js` vượt qua kiểm tra cú pháp bằng Node |
| Tệp giao diện | HTML, CSS, JavaScript, favicon và `.nojekyll` trả HTTP 200 |
| Đường dẫn tài nguyên | Dùng `./...`; bốn tệp được HTML tham chiếu đều tồn tại |
| Tiêu đề | Đúng `Trợ lý ảo AI CAX LỆ THỦY version 1.1` |
| Màu chủ đạo thực tế | `#B8E65C`; nền `#F1F8E5`; chữ `#203512` |
| Độ tương phản màu chữ/nền | Khoảng 9,19:1 trên xanh chính và 12,22:1 trên nền nhạt |
| Liên hệ | Công an xã Lệ Thủy — SĐT: 0323.882.768 |
| Liên kết gọi điện | Đúng `tel:0323882768`; không thực hiện cuộc gọi |
| Chatbot | Đúng URL, iframe hiện giao diện Dify, ô nhập và phản hồi có sẵn trong phiên |
| Quyền iframe | Giữ `microphone;clipboard-write` và có `title` |
| Lỗi trình duyệt | Không ghi nhận lỗi ở mức error trong lần kiểm tra |

## Kiểm tra bố cục

Kích thước dưới đây là kích thước yêu cầu; trình duyệt có thể làm tròn khoảng 1px do tỉ lệ hiển thị của thiết bị.

| Kích thước | Chiều cao iframe quan sát | Tràn ngang trang ngoài | Bị cắt bởi khung ngoài |
| --- | --- | --- | --- |
| Máy tính 1366 × 960 | Khoảng 805px | Không | Không |
| Máy tính bảng 768 × 1024 | Khoảng 870px | Không | Không |
| Điện thoại 390 × 844 | Khoảng 750px | Không | Không |
| Điện thoại nhỏ 360 × 640 | Khoảng 701px | Không | Không |

Đã xem ảnh máy tính và điện thoại để kiểm tra bố cục. Tiêu đề dùng ngắt dòng cân bằng trên màn hình hẹp. Khung ngoài tối thiểu 706px gồm viền, để phần chatbot bên trong có khoảng 700px; không đặt chiều cao tối thiểu riêng làm iframe vượt khung như bản cũ. Người dùng có thể cuộn trang tới phần liên hệ trên màn hình thấp.

## Phạm vi chưa xác minh

- Chưa triển khai trên tài khoản GitHub hoặc tên miền thật; cần kiểm tra lại sau khi tự xuất bản.
- Điện thoại/máy tính bảng là kích thước mô phỏng trong trình duyệt, chưa thay thế thử trên thiết bị thật hoặc mọi trình duyệt.
- Chưa mở microphone, thử ghi âm hay thực hiện ghi clipboard; chỉ xác nhận thuộc tính cho phép trong iframe được giữ đúng.
- Không thay đổi cấu hình Dify, mô hình, kiến thức, hạn mức hoặc quyền truy cập. Không đánh giá tính chính xác của nội dung trả lời.
- Chatbot đã hiển thị hội thoại trong phiên có sẵn; không gửi thêm dữ liệu cá nhân hoặc tạo câu hỏi mới trong lượt kiểm tra này.
- Màu bên trong iframe vẫn thuộc ứng dụng Dify; chưa đổi từ trang bao ngoài.
- Phiên kiểm tra tải được chatbot, nhưng không bảo đảm dịch vụ Dify luôn sẵn sàng ở mọi thời điểm.

Ảnh chạy thử được bàn giao riêng tại `kiem-tra/may-tinh.png` và `kiem-tra/dien-thoai.png` trong thư mục làm việc, không cần đưa các ảnh này lên GitHub. Tệp ZIP chứa bộ mã và tài liệu, không chứa ảnh hội thoại.

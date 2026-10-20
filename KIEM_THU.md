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

| Kích thước | Chiều cao khung gồm viền | Tràn ngang trang ngoài | Bị cắt bởi khung ngoài |
| --- | --- | --- | --- |
| Máy tính 1366 × 960 | Khoảng 540px | Không | Không |
| Máy tính bảng 768 × 1024 | Khoảng 583px | Không | Không |
| Điện thoại 390 × 844 | Khoảng 503px | Không | Không |
| Điện thoại nhỏ 360 × 640 | Khoảng 472px | Không | Không |

Đã thu nhỏ chatbot theo yêu cầu mới và cập nhật ảnh chạy thử. Trên máy tính 1366 × 960, khung rộng khoảng 863px (65,5% bề rộng nội dung, sau khi trừ khoảng cách giữa cột), cao khoảng 540px, tương ứng gần 2/3 chiều rộng và chiều cao bản trước. Bên trái khung chừa khoảng 456px gồm khoảng cách giữa cột; vùng trống phía trên cao tối thiểu 48px, phía dưới 72px, cùng các khoảng cách giữa hàng.

Trên điện thoại, giữ đủ chiều ngang để không bó hẹp ô nhập, giảm chiều cao còn khoảng 2/3 bản trước với mức tối thiểu 472px gồm viền. Cột trái trống được ẩn; khi bổ sung nội dung sẽ xếp phía trên chatbot. Không có nội dung mẫu trong các vùng trống. Tiêu đề, link chatbot, quyền iframe và số điện thoại giữ nguyên. Người dùng có thể cuộn trang tới phần liên hệ trên màn hình thấp.

## Phạm vi chưa xác minh

- Chưa triển khai trên tài khoản GitHub hoặc tên miền thật; cần kiểm tra lại sau khi tự xuất bản.
- Điện thoại/máy tính bảng là kích thước mô phỏng trong trình duyệt, chưa thay thế thử trên thiết bị thật hoặc mọi trình duyệt.
- Chưa mở microphone, thử ghi âm hay thực hiện ghi clipboard; chỉ xác nhận thuộc tính cho phép trong iframe được giữ đúng.
- Không thay đổi cấu hình Dify, mô hình, kiến thức, hạn mức hoặc quyền truy cập. Không đánh giá tính chính xác của nội dung trả lời.
- Chatbot đã hiển thị hội thoại trong phiên có sẵn; không gửi thêm dữ liệu cá nhân hoặc tạo câu hỏi mới trong lượt kiểm tra này.
- Màu bên trong iframe vẫn thuộc ứng dụng Dify; chưa đổi từ trang bao ngoài.
- Phiên kiểm tra tải được chatbot, nhưng không bảo đảm dịch vụ Dify luôn sẵn sàng ở mọi thời điểm.

Ảnh chạy thử được bàn giao riêng tại `kiem-tra/may-tinh.png` và `kiem-tra/dien-thoai.png` trong thư mục làm việc, không cần đưa các ảnh này lên GitHub. Tệp ZIP chứa bộ mã và tài liệu, không chứa ảnh hội thoại.

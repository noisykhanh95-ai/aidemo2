# Hướng dẫn quản trị website và chatbot

Phiên bản bàn giao 1.1. Đối chiếu tài liệu chính thức ngày 20/10/2026.

## 1. Quản lý ở đâu?

| Muốn thay đổi | Nơi chỉnh |
| --- | --- |
| Tiêu đề trang ngoài, nền xanh, viền, số điện thoại | `config.js` trong kho GitHub |
| Kích thước khung, khoảng cách, bố cục | `styles.css` |
| Nội dung mặc định khi JavaScript không chạy | `index.html` |
| Biểu tượng thẻ trình duyệt | `favicon.svg` |
| Tên, lời chào, kiến thức, mô hình, hành vi trả lời, màu bên trong chatbot | Ứng dụng Dify |
| Website có xuất bản được hay không | GitHub Settings → Pages và Actions |
| Nhật ký hỏi đáp, lỗi xử lý, hạn mức | Dify và nhà cung cấp mô hình bạn đang dùng |

Trang tĩnh chỉ hiển thị chatbot; không có tài khoản quản trị riêng và không tự lưu lịch sử hội thoại. Không thêm mật khẩu bằng JavaScript để bảo vệ dữ liệu: người truy cập có thể đọc mã đó. Quyền quản trị nằm ở GitHub và Dify, còn việc kiểm soát người dùng chatbot phải thực hiện ở dịch vụ phù hợp.

## 2. Sửa cấu hình thường dùng

Mở `config.js`. Nội dung có chú thích tiếng Việt. Chỉ thay các phần trong dấu ngoặc kép, giữ nguyên dấu phẩy và dấu ngoặc:

```js
window.CHATBOT_CONFIG = {
  title: "Trợ lý ảo AI CAX LỆ THỦY version 1.1",
  chatbotUrl: "https://udify.app/chatbot/HjnCerBBdMUvrvvO",
  colors: {
    primary: "#B8E65C",
    background: "#F1F8E5",
    text: "#203512"
  },
  contact: {
    organization: "Công an xã Lệ Thủy",
    phone: "0323.882.768"
  }
};
```

- `title`: tiêu đề chính và tên thẻ trình duyệt.
- `chatbotUrl`: URL ở thuộc tính `src` trong mã iframe Dify; không dán nguyên đoạn iframe, link quản trị hoặc API key.
- `colors.primary`: xanh mạ non của phần trên trang và viền khung.
- `colors.background`: nền nhạt phía dưới.
- `colors.text`: màu chữ trang ngoài. Giữ chữ đủ đậm để dễ đọc.
- `contact.organization`: tên đơn vị.
- `contact.phone`: số hiển thị; chương trình tự bỏ dấu chấm/khoảng trắng để tạo liên kết gọi.

Chương trình nhận mã màu dạng `#RRGGBB`. Giá trị sai định dạng sẽ giữ màu mặc định. Số điện thoại không hợp lệ sẽ hiển thị dưới dạng chữ, không tạo liên kết gọi sai.

Màu favicon hiện cố định trong `favicon.svg`; đổi `fill="#B8E65C"` và `stroke="#203512"` nếu muốn đồng bộ khi đổi chủ đề. Nếu thay tiêu đề/link/liên hệ lâu dài, cập nhật cả nội dung mặc định trong `index.html` để giao diện vẫn đúng khi JavaScript bị tắt. Nếu thay màu mặc định, đồng bộ ba biến đầu `styles.css` và thẻ `theme-color` trong `index.html`.

## 3. Xem trước rồi cập nhật

1. Tải bộ mã hiện tại từ **Code → Download ZIP**, giải nén vào thư mục xem trước.
2. Sao lưu thư mục trước khi sửa. Mỗi lần chỉ đổi một nhóm nội dung.
3. Sửa tệp bằng trình soạn thảo văn bản, lưu dưới dạng UTF-8 và giữ đúng đuôi `.js`, `.html`, `.css`.
4. Mở `index.html` để xem. Nếu có Python, mở Terminal trong thư mục và chạy `python -m http.server 8088 --bind 127.0.0.1`, rồi mở `http://127.0.0.1:8088`. Dừng bằng Ctrl+C.
5. Kiểm tra tiêu đề, màu, khung chatbot và liên hệ trên cửa sổ rộng lẫn hẹp. Nếu đổi URL, mở trực tiếp link mới trước.
6. Tải các tệp đã sửa lên đúng kho, hoặc dùng biểu tượng bút chì trên GitHub. Đặt thông điệp rõ như `Cap nhat so dien thoai lien he`.
7. Với thay đổi lớn, tạo nhánh mới và pull request để xem chênh lệch trước khi hợp nhất. Với kho cá nhân đơn giản, có thể commit trực tiếp nếu quyền cho phép.
8. Theo dõi xuất bản trong Actions, rồi kiểm tra website thật bằng cửa sổ riêng tư để giảm ảnh hưởng bộ nhớ đệm.

Các thao tác chỉnh tệp/commit dựa trên [hướng dẫn GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files). Quy trình sao lưu và kiểm tra trên đây dành riêng cho bộ mã này.

## 4. Xem lịch sử và khôi phục bằng trình duyệt

Để kiểm tra thay đổi, mở tệp trên GitHub, dùng **History** nếu có; hoặc **Blame** để xem commit theo từng dòng, rồi mở commit tương ứng. Có thể xem nội dung tệp ở một phiên bản trước và chọn **Raw** để sao chép. [Xem nội dung và lịch sử tệp](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-and-understanding-files).

Cách khôi phục phù hợp với bộ mã nhỏ này:

1. Xác định phiên bản đã chạy tốt trước khi có lỗi.
2. Mở tệp tại phiên bản đó, sao chép toàn bộ nội dung Raw.
3. Quay lại nhánh xuất bản hiện tại, mở tệp cùng tên và chọn sửa.
4. Dán lại nội dung cũ, xem chênh lệch rồi commit với thông điệp `Khoi phuc cau hinh da hoat dong`.
5. Nếu thay đổi liên quan nhiều tệp, khôi phục đủ các tệp liên quan trong một nhánh và hợp nhất cùng nhau. Có thể tải ZIP của phiên bản cũ để lấy đủ bộ tệp.
6. Chờ Pages xuất bản lại và kiểm tra.

Đây là một commit mới đưa nội dung về trạng thái cũ, không xóa lịch sử. Không phải mọi commit trên GitHub đều có nút **Revert** trực tiếp trên web. Nếu dùng GitHub Desktop, có thể dùng **History → Revert Changes in Commit** rồi push; khi hoàn tác nhiều commit, làm từ mới về cũ. [Tài liệu GitHub Desktop](https://docs.github.com/en/desktop/managing-commits/reverting-a-commit-in-github-desktop).

## 5. Quản lý nội dung và màu trong Dify

Mở ứng dụng chatbot trong Dify bằng tài khoản có quyền sửa. Phần soạn thảo ứng dụng dùng để chỉnh hướng dẫn cho AI, lời chào, biến, luồng xử lý, mô hình và nguồn kiến thức. Thử trong vùng xem trước trước khi bấm **Publish**; kiểm tra lại link công khai sau khi xuất bản. [Các tính năng trong Chat Web App](https://docs.dify.ai/en/cloud/use-dify/publish/webapp/web-app-settings).

Để tìm tùy chỉnh màu, mở **Access Point → Web App**, tìm phần **Settings**/tùy chỉnh giao diện. Một số phiên bản đặt mục này dưới **Publish**. Trong các lựa chọn hiện có về giao diện/chủ đề/màu, ưu tiên chủ đề sáng và màu `#B8E65C` nếu có ô màu. Tính năng và nhãn phụ thuộc phiên bản/gói. Lưu và Publish rồi mở lại chatbot. Không có tùy chọn tương ứng thì giao diện iframe vẫn theo Dify; CSS của website không đổi được nội dung khác tên miền bên trong nó. [Thiết lập Web App Dify](https://docs.dify.ai/en/cloud/use-dify/publish/webapp/web-app-settings).

Mã dùng iframe trực tiếp, không phải nút chat nổi. Các biến màu dành cho nút bubble trong tài liệu Dify không thay màu toàn bộ iframe. [Các hình thức nhúng](https://docs.dify.ai/en/cloud/use-dify/publish/webapp/embedding-in-websites).

## 6. Theo dõi và xử lý sự cố

**Trang ngoài lỗi:** kiểm tra Pages đang xuất bản đúng nhánh và thư mục; vào **Actions**, chọn lần chạy gần nhất, mở bước màu đỏ và đọc thông báo. Kiểm tra cùng commit chứa thay đổi mình vừa làm. [Xem nhật ký triển khai](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).

**Chatbot không trả lời:** mở URL Dify trong tab riêng. Nếu cũng lỗi, kiểm tra ứng dụng đã Publish, đang cho phép đúng đối tượng truy cập, mô hình được cấu hình và nguồn kiến thức sẵn sàng. Trong Dify, dùng **Logs** để xem lượt chạy, lỗi ở bước nào và phản hồi; tránh chia sẻ công khai nhật ký có dữ liệu người dùng. [Nhật ký Dify](https://docs.dify.ai/en/cloud/use-dify/monitor/logs).

**Hết hạn mức hoặc quá tải:** xem thông báo lỗi thực tế, mục **Billing/Usage** của workspace Dify và tài khoản nhà cung cấp mô hình đang dùng. Kiểm tra hạn mức, số dư/credit và giới hạn tốc độ. Chỉ nâng gói khi đã xác định đúng nguyên nhân và chi phí. Hạn mức thay đổi theo gói; xem tài khoản thật thay vì dựa vào con số cố định trong tài liệu này. [Quản lý gói Dify](https://docs.dify.ai/en/cloud/use-dify/workspace/subscription-management).

**Link riêng hoạt động nhưng iframe lỗi:** thử trình duyệt khác, kiểm tra yêu cầu đăng nhập/cookie trong iframe, chính sách nhúng của Dify và HTTPS. Không vô hiệu hóa bảo vệ của trình duyệt để che lỗi. Quyền `microphone;clipboard-write` trong mã chỉ cho phép trang Dify yêu cầu chức năng; người dùng/trình duyệt vẫn quyết định cấp quyền.

## 7. Giữ quyền quản trị an toàn

Dùng tài khoản cá nhân có phân quyền rõ ràng, hạn chế chia sẻ mật khẩu chung. Bật xác thực hai bước trong GitHub tại **Settings → Password and authentication**, lưu mã khôi phục ở nơi riêng an toàn; làm tương tự ở dịch vụ khác nếu hỗ trợ. [Thiết lập 2FA GitHub](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

Chỉ đưa mã giao diện và thông tin liên hệ dự định công khai lên kho. Không đưa API key, mật khẩu, mã khôi phục, file hồ sơ, danh sách công dân hoặc bản xuất hội thoại lên GitHub. Nếu khóa bị lộ, thu hồi/đổi khóa ở dịch vụ cấp khóa; xóa khỏi tệp hiện tại không xóa bản trong lịch sử. Bộ mã nhúng này không cần khóa API. [Lưu ý khi thêm tệp](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

Trước mỗi lần sửa lớn, giữ bản ZIP hoạt động tốt. Khi bàn giao người quản trị, ghi lại repository, link Pages, workspace/ứng dụng Dify, ai có quyền sửa và cách khôi phục tài khoản; không ghi mật khẩu vào tài liệu công khai.

## 8. Giới hạn cần hiểu

GitHub Pages phục vụ tệp tĩnh; đăng nhập quản trị thật, cơ sở dữ liệu hoặc xử lý hồ sơ cần dịch vụ phía máy chủ phù hợp. [GitHub Pages là gì](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

Website không đọc được trạng thái đăng nhập, phản hồi hoặc lịch sử trong iframe khác tên miền. Không coi sự kiện iframe tải xong là chứng nhận chatbot khỏe. Nội dung trả lời và việc quản lý dữ liệu nằm ở Dify; việc kiểm tra giao diện không thay thế rà soát tính chính xác của kiến thức chatbot. Trên điện thoại thấp, có thể cần cuộn trang để tới phần liên hệ. Khung ngoài tối thiểu 472px, không còn áp dụng mức tối thiểu 700px của bản trước.

## 9. Thêm thông tin vào các khoảng trống mới

Trong `index.html`, ba vùng đã có chú thích để tìm nhanh:

- `information-top`: vùng phía trên chatbot, phù hợp thông báo hoặc hướng dẫn ngắn.
- `information-left`: cột bên trái chatbot trên máy tính, phù hợp thông tin hữu ích hoặc liên kết.
- `information-bottom`: vùng phía dưới chatbot, trước thông tin liên hệ.

Thêm nội dung HTML vào giữa thẻ mở/đóng của vùng tương ứng. Hiện các vùng để trống theo yêu cầu, không có nội dung mẫu trên trang. Cột trái chiếm khoảng 1/3 phần nội dung, chatbot chiếm khoảng 2/3 sau khi trừ khoảng cách giữa cột. Chiều cao chatbot cũng giảm còn khoảng 2/3 so với bản trước, tối thiểu 472px gồm viền. Trên điện thoại, cột trái sẽ xếp phía trên chatbot khi có nội dung; khi trống thì tự ẩn. Khung chatbot dùng đủ chiều ngang điện thoại để giữ ô nhập dễ sử dụng.

# Hướng dẫn đưa trang lên GitHub Pages

Dành cho người mới. Đối chiếu tài liệu chính thức ngày 20/10/2026. Bộ mã này chưa được tự xuất bản lên GitHub của bạn.

## 1. Chuẩn bị tài khoản

Mở [GitHub](https://github.com), chọn **Sign up** nếu chưa có tài khoản. Làm theo các bước đăng ký và xác minh email; nếu đã có thì **Sign in**. Giữ lại tên tài khoản vì tên này sẽ là một phần địa chỉ website. [Hướng dẫn tạo tài khoản](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github).

Repository là kho chứa các tệp website. Với GitHub Free, cách đơn giản là dùng kho **Public**. GitHub Pages cho kho Private phụ thuộc gói, chẳng hạn Pro hoặc Team; không nên coi kho Private là cách đặt mật khẩu cho website. [Phạm vi hỗ trợ và địa chỉ Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

Bộ mã này chỉ chứa giao diện và link chatbot công khai, không chứa hồ sơ hoặc khóa API. Nội dung chatbot vẫn được quản lý ở Dify.

## 2. Tạo repository

1. Sau khi đăng nhập, bấm nút **+** ở phía trên, chọn **New repository**.
2. **Owner**: chọn tài khoản hoặc đơn vị sẽ sở hữu trang.
3. **Repository name**: nhập `tro-ly-ai-cax-le-thuy`.
4. **Description** có thể nhập: `Trợ lý ảo AI CAX Lệ Thủy version 1.1`.
5. Chọn **Public** nếu sử dụng GitHub Free theo cách này.
6. Có thể bật **Add README**, sau đó bấm **Create repository**. README của bộ mã sẽ thay tệp giới thiệu mặc định khi tải lên.

Nếu đã có kho website này, dùng kho đó và chuyển sang bước 3. [Tài liệu tạo repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

## 3. Tải bộ mã lên

Giải nén tệp ZIP đã nhận bằng **Extract All**. Mở thư mục vừa giải nén, kiểm tra có `index.html` và `config.js` ngay bên trong.

Trong repository, chọn **Add file → Upload files**. Với kho trống, có thể dùng liên kết **uploading an existing file**. Chọn các tệp bên trong, không chọn tệp ZIP và không đặt thêm một lớp thư mục bao ngoài. Nhập thông điệp `Tao website tro ly AI version 1.1`, rồi **Commit changes**. Nếu chọn nhánh mới, cần tạo pull request và hợp nhất để thay đổi tới nhánh xuất bản. [Hướng dẫn tải tệp](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

Danh sách tệp của bộ mã cần xuất hiện ở gốc kho:

```text
index.html
styles.css
config.js
app.js
favicon.svg
.nojekyll
.gitignore
README.md
HUONG_DAN_GITHUB.md
QUAN_TRI.md
KIEM_THU.md
```

Tệp `.nojekyll` bắt đầu bằng dấu chấm. Nếu Windows chưa hiển thị, bật **View → Show → Hidden items** trong File Explorer. Nếu công cụ tải lên bỏ qua tệp này, dùng **Add file → Create new file**, đặt tên `.nojekyll`, nhập `Trang tinh, khong xu ly Jekyll.` rồi commit. Nội dung tệp này không ảnh hưởng website. Không đặt thành `.nojekyll.txt`.

Không tải thư mục `kiem-tra` hoặc ZIP lên kho. Các ảnh kiểm tra chỉ dành cho việc bàn giao.

## 4. Bật GitHub Pages

1. Mở **Settings** của repository.
2. Ở menu bên trái, tìm **Pages**.
3. Trong **Build and deployment**, chọn **Source: Deploy from a branch**.
4. Chọn nhánh chứa bộ mã, thường là **main**.
5. Chọn thư mục **/(root)**, bấm **Save**.

Trang này không cần build riêng. Nhánh và thư mục trên phải chứa `index.html`. [Cấu hình nguồn xuất bản](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 5. Lấy địa chỉ trang và kiểm tra

Quay lại **Settings → Pages** sau khi triển khai hoàn tất, dùng liên kết website được GitHub hiển thị. Với tên kho gợi ý, địa chỉ thường là:

```text
https://TEN_TAI_KHOAN.github.io/tro-ly-ai-cax-le-thuy/
```

Thay `TEN_TAI_KHOAN` bằng tên thật; nếu tên kho khác thì phần cuối cũng khác. Đây là mẫu địa chỉ, không phải website đã được xuất bản. [Tạo trang Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

Trong tab **Actions**, mở lần chạy xuất bản gần nhất để xem trạng thái và bước lỗi nếu có. Chờ hoàn tất rồi thử lại trang. [Xem lịch sử chạy](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history).

Sau đó tự kiểm tra: đúng tiêu đề version 1.1; nền xanh mạ non; chatbot hiện ô nhập; liên hệ đúng Công an xã Lệ Thủy và số 0323.882.768. Thử trên điện thoại thật và một câu hỏi chung không chứa thông tin cá nhân.

## 6. Cập nhật trang đã có

Không cần tạo kho hoặc bật Pages lại. Sửa tệp cần thiết trong kho hiện tại, commit, chờ xuất bản và tải lại website. Với thay đổi giao diện, có thể tải các tệp mới cùng tên để thay thế. Giữ nguyên cấu trúc ở gốc kho.

Với sửa nhỏ, mở `config.js`, chọn biểu tượng bút chì, thay giá trị, **Commit changes**. Nếu không có quyền sửa trực tiếp, dùng nhánh mới và pull request. Xem [cách chỉnh tệp](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) và quy trình xem trước/khôi phục trong [QUAN_TRI.md](QUAN_TRI.md).

## 7. Xử lý lỗi thường gặp

| Hiện tượng | Kiểm tra trên bộ mã này |
| --- | --- |
| 404 | Dùng đúng link trong Settings → Pages; kiểm tra đúng tên kho, đúng nhánh và `index.html` nằm ngay gốc |
| Trang có chữ nhưng mất màu | `styles.css` phải cùng thư mục với `index.html`; giữ `./styles.css`; chữ hoa/thường của tên tệp phải khớp |
| Vẫn hiện phiên bản cũ | Xem lần chạy Actions mới nhất; xác nhận đã commit vào nhánh xuất bản; thử Ctrl+F5 hoặc cửa sổ riêng tư |
| Tiêu đề cũ sau khi sửa HTML | `config.js` ghi đè tiêu đề mặc định; hãy sửa trường `title` tại đó |
| Hiện thông báo URL nhúng chưa đúng | Kiểm tra `chatbotUrl` trong `config.js`; phải là HTTPS và đường dẫn `/chatbot/...` |
| Khung Dify trắng hoặc báo bị từ chối | Mở link Dify trực tiếp; nếu cũng lỗi, xử lý bên Dify trước; nếu mở riêng được, kiểm tra đăng nhập/cookie hoặc chính sách nhúng |
| Không dùng được microphone | Kiểm tra tính năng đã bật trong Dify, dùng HTTPS và cấp quyền trên trình duyệt; mã nhúng chỉ cho phép yêu cầu quyền, không tự cấp quyền |

URL Dify đang dùng: [Mở chatbot trực tiếp](https://udify.app/chatbot/HjnCerBBdMUvrvvO). Dify yêu cầu ứng dụng đã được xuất bản; mã iframe phải dùng đúng link ứng dụng. [Tài liệu nhúng Dify](https://docs.dify.ai/en/cloud/use-dify/publish/webapp/embedding-in-websites).

Nếu thao tác trong GitHub khác nhẹ tài liệu này, ưu tiên nhãn đang hiển thị và tài liệu chính thức được dẫn ở từng bước. Không tạo lại kho hoặc thay chatbot chỉ để thử sửa một lỗi đường dẫn.

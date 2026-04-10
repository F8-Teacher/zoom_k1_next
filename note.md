# Đặc điểm của Next

- Mặc định sẽ Server Component
- Server Component sẽ không dùng được:

* API trình duyệt: localStorage, DOM,...
* React Hook: useState, useEffect, useContext,...

# Client Component

- Cách chuyển: Thêm directive "use client" ở đầu file
- Cách hoạt động:

* Lần tải đầu tiên: Client Component sẽ thực hiện quá trình prerender --> Tạo ra bộ khung html tĩnh trên server và trả về cho client
* Trình duyệt sẽ tải JavaScript (Bản đóng gói client component, React) từ Next Server về
* Trình duyệt tải React Server Component Payload (Thông qua network): Chứa thông tin hướng dẫn để trình duyệt sẽ thực hiện gắn sự kiện, thao tác liên quan đến state, lifecycle,...
* Xảy ra quá trình Hydration => Giúp React sống lại phía trình duyệt

Lời khuyên: Nếu không cần thiết phải dùng API trình duyệt, react hook (Tương tác) ==> Không chuyển về client component

Lưu ý khi truyền props từ Server Component xuống Client Component

- Props không chấp nhận: function, symbol, class instance
- Khi truyền props xuống client component --> để quá trình Hydration diễn ra chính xác --> Next yêu cầu trong React Server Component Payload phải có giá trị props

React Server Component Payload (RSC Payload) ==> lưu trữ dạng Json-Like (Text)

Tại sao chỉ có server component lại cần RSC Payload?

==> Giải quyết bài toán Navigation

Cách navigation trong Next: Dùng component Link (của Next)

Khi user bấm vào component Link ==> Trình duyệt gọi api đặc biệt lên next server ==> lấy RSC Payload của trang mới ==> So sánh thực điểm khác nhau với RSC Payload của trang cũ ==> Dùng React DOM để cập nhật lại những phần thay đổi

# https://github.com/Under5502/bakery

1. Tổng quan dự án
   Tên dự án: Bakery Website

Mô tả ngắn: Đây là 1 trang web có thể giúp chúng ta có thể tương tác mua các loại bánh,
với giao diện hiện đại giúp cho mọi người có thể dễ dàng tiếp cận, trang web có những chức năng :

- Hiển thị thông tin chi tiết sản phẩm
- Thành phần nguyên liệu
- Chức năng thêm vào giỏ hàng
- Tăng/giảm số lượng sản phẩm
- Hiển thị giỏ hàng
- Đặt lịch nhận hàng bằng DatePicker
- Responsive UI cho cả desktop và mobile

2. Cấu Trúc Thư Mục

- assets/: đây là nơi chứa các ảnh và video được sử dụng trong dự án
- components/: Chứa cái components có thể tái sử dụng được như (VD: Cart, DatePicker,...)
- Page/: Đây là nơi chứa các màn hình chính (VD: Main, ...)

- components: bao gồm các thư mục Cart, Header, ScrollTop.
  - Cart: Chứa Cart nơi hiển thị giỏ hàng sản phẩm, chứa DatePicker giúp đặt hàng khi mua sản phẩm
  - Header: Gồm Navbar, Hero giúp tương tác qua lại giữa giao diện các trang của website
  - Footer: Gồm Footer và Newsletter hiện thông tin cần thiết để liên hệ
  - ScrollTop: Khi nhấn nút qua các trang nó sẽ giúp chúng ta chạy lên đầu trang
- Page: Bao gồm các thư mục Body, Footer, ProductPage.
  - Body: Chứa Main đây là giao diện màn hình chính của trang web
  - About: Nơi hiển thị thông tin về lịch sử hình thành, ...
  - Contact: Nơi để có thể liên hệ với chúng tôi về yêu cầu của các bạn
  - Cake: Nơi giúp mọi người có thể tương tác mua bánh ngọt
  - Cookies: Nơi giúp mọi người có thể tương tác mua bánh quy
  - ProductPage: Giúp hiển thị thông tin của sản phẩm bạn muốn xem

3. Chức năng

- Hiển thị sản phẩm, thông tin chi tiết sản phẩm và nguyên liệu thành phần
- Thêm vào giỏ hàng, tăng/giảm số lượng sản phẩm
- Tính tiền dựa theo số lượng sản phẩm đã thêm
- Đặt lịch nhận hàng qua DatePicker
- Responsive UI (desktop & mobile)

export const data_themes = {
  //toàn bộ cấu hình router của web được viết ở đây khi thay đổi file này hãy thay đổi cả cấu trúc file trong thư mục pages tương ứng
  routers: [
    {
      path: "/", // the url
      title: "Trang chủ"
    },
    {
      path: "/gioi-thieu", // the url
      title: "Giới thiệu"
    },

    {
      path: "#", // the url
      title: "Ngành học",
      childs: [
        {
          path: "/nganh-cong-nghe-thong-tin",
          title: "Công nghệ thông tin"
        },
        {
          path: "/nganh-dien-tu-vien-thong",
          title: "Điện tử viễn thông"
        },
        {
          path: "/nganh-quan-tri-kinh-doanh",
          title: "Quản trị kinh doanh"
        },
        {
          path: "/nganh-luat-kinh-te",
          title: "Luật kinh tế"
        },
        {
          path: "/nganh-thuong-mai-dien-tu",
          title: "Thương mại điện tử"
        },
        {
          path: "/nganh-ngon-ngu-anh",
          title: "Ngôn ngữ Anh"
        },
        {
          path: "/nganh-ngon-ngu-trung",
          title: "Ngôn ngữ Trung"
        },
        {
          path: "/nganh-ke-toan",
          title: "Kế toán"
        },
        {
          path: "/nganh-tai-chinh-ngan-hang",
          title: "Tài chính ngân hàng"
        }
      ]
    },
    {
      path: "/lich-khai-giang", // the url
      title: "Khai giảng"
    },
    {
      path: "/dang-ky", // the url
      title: "Đăng ký"
    },
    {
      path: "/tin-tuc", // the url
      title: "Tin tức" // view rendered
    }
  ],

  layouts: {
    primary_color: "blue.700",
    header: {
      header_top: {
        logo: false,
        phone: "0914709118",
        email: "daihoctructuyen@tnu.edu.vn",
        background_phone_email: { from: "#f68920", to: "#fc5934" },
        background_left: { from: "#004685", to: "#004956e6" }
      },
      header_bottom: {
        logo: true,
        phone: "0914709118",
        email: "daihoctructuyen@tnu.edu.vn",
        background_phone_email: { from: "#f68920", to: "#fc5934" },
        background_left: { from: "#004685", to: "#004956e6" }
      }
    }
  }
};

export type TMenus = {
  path: string;
  title: string;
  childs?: {
    path: string;
    title: string;
  }[];
}[];

export const menus: TMenus = [
  {
    path: "/", // the url
    title: "Trang chủ",
  },
  {
    path: "/gioi-thieu", // the url
    title: "Giới thiệu",
  },

  {
    path: "#", // the url
    title: "Ngành học",
    childs: [
      {
        path: "/nganh-cong-nghe-thong-tin",
        title: "Công nghệ thông tin",
      },
      {
        path: "/nganh-dien-tu-vien-thong",
        title: "Điện tử viễn thông",
      },
      {
        path: "/nganh-quan-tri-kinh-doanh",
        title: "Quản trị kinh doanh",
      },
      {
        path: "/nganh-luat-kinh-te",
        title: "Luật kinh tế",
      },
      {
        path: "/nganh-thuong-mai-dien-tu",
        title: "Thương mại điện tử và Marketing số",
      },
      {
        path: "/nganh-ngon-ngu-anh",
        title: "Ngôn ngữ Anh",
      },
      {
        path: "/nganh-ngon-ngu-trung",
        title: "Ngôn ngữ Trung",
      },
      {
        path: "/nganh-ke-toan",
        title: "Kế toán",
      },
      {
        path: "/nganh-tai-chinh-ngan-hang",
        title: "Tài chính ngân hàng",
      },
    ],
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Lịch khai giảng",
  },
  {
    path: "/dang-ky", // the url
    title: "Đăng ký",
  },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức", // view rendered
  },
];

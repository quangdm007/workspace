import { Frame } from "@/components/Frame";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Nna = () => {
  return (
    <LayoutNganh title="Ngành ngôn ngữ Anh">
      <Frame
        title1="Tổng quan chương trình"
        list1={[
          "Tiếng Anh là ngôn ngữ chính thức của Vương quốc Anh, Hoa Kỳ, Canada, Úc, và nhiều quốc gia và vùng lãnh thổ khác trên khắp thế giới. Nó là một trong những ngôn ngữ phổ biến nhất và được sử dụng rộng rãi nhất trên thế giới. Tiếng Anh thuộc hệ thống ngôn ngữ Germanic và được viết bằng bảng chữ cái Latin",
          "Tiếng Anh được sử dụng rộng rãi trong nhiều lĩnh vực, bao gồm kinh doanh, khoa học, công nghệ, giáo dục, truyền thông, và văn hóa đại chúng. Nó là ngôn ngữ chính thức của nhiều tổ chức quốc tế như Liên Hợp Quốc và NATO.",
        ]}
        title2="Nghề nghiệp"
        list2={[
          "Giảng viên tiếng anh",
          "Dịch thuật và phiên dịch",
          "Kinh doanh quốc tế",
          "Nghiên cứu và phát triển",
          "Hướng dẫn viên, chuyên viên tư vấn tại các công ty du lịch, lữ hành, nhà hàng khách sạn",
        ]}
        label="Đăng ký tư vấn"
      />
    </LayoutNganh>
  );
};

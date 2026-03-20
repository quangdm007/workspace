import { Frame } from "@/components/Frame";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Nnt = () => {
  return (
    <LayoutNganh title="Ngành ngôn ngữ Trung">
      <Frame
        title1="Tổng quan chương trình"
        list1={[
          "Ngôn ngữ Trung Quốc là ngành học nghiên cứu và sử dụng tiếng Trung trên nhiều lĩnh vực khác nhau như kinh tế, thương mại, du lịch, ngoại giao. Trung Quốc hiện là quốc gia có nền kinh tế và tốc độ tăng trưởng nhanh chóng hàng đầu tại Châu Á trên thế giới, từ đó mà ngôn ngữ Trung trở thành một trong các ngôn ngữ phổ biến được sử dụng rộng rãi.",
          "Trung Quốc là một cường quốc có nền kinh tế đứng thứ 2 thế giới, sau Mỹ. Tốc độ tăng trưởng về kinh tế trung bình 10%/ năm. Các doanh nghiệp Trung Quốc đầu tư vào Việt Nam ngày càng nhiều và chóng mặt.",
        ]}
        title2="Nghề nghiệp"
        list2={[
          "Đào tạo, giảng dạy ngôn ngữ Trung Quốc tại các trường học, trường nghề, Đại học, các nơi đào tạo chuyên môn về ngôn ngữ.",
          "Phiên dịch, biên dịch các tài liệu, sách báo, tài liệu tiếng Trung",
          "Chuyên viên Marketing, giao dịch thương mại trong các doanh nghiệp Trung Quốc tại Việt Nam",
          "Hướng dẫn viên du lịch, làm lễ tân trong nhà hàng, khách sạn",
          "Tiếp viên hàng không, nhân viên an ninh tại cảng hàng không",
        ]}
        label="Đăng ký tư vấn"
      />
    </LayoutNganh>
  );
};

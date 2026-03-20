import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Dtvt = () => {
  return (
    <LayoutNganh title="Ngành điện tử viễn thông">
      <Branch
        name="Điện tử viễn thông"
        overview={[
          "Ngành điện tử viễn thông là ngành sử dụng những công nghệ tiên tiến, những công nghệ hiện đại của thời địa 4.0 những công nghệ này giúp ích rất nhiều trong hoạt động của con người, Ngành điện tử viễn thông hiện nay là một ngành được xem là khá rộng lớn, chia thành rất nhiều lĩnh vực phong phú như sáng tạo, nghiên cứu, lĩnh vực âm thanh hình ảnh, lĩnh vực điện tử, lĩnh vực mạng viễn thông… tất cả các lĩnh vực này đều nằm trong điện tử viễn thông từ đó chúng ta thấy tầm quan trọng của điện tử viễn thông.",
          "Chương trình cử nhân trực tuyến ngành Điện tử – viễn thông sẽ cung cấp các kiến thức nền tảng về kinh tế, xã hội bên cạnh các kiến thức và kỹ năng chuyên sâu về quản trị các lĩnh vực khác nhau, đáp ứng nhu cầu đa dạng của các tổ chức và mục tiêu thăng tiến của cá nhân.",
        ]}
        jobs={[
          "Kỹ sư thiết kế tối ưu mạng, quản lý mạng, vận hành hệ thống mạng viễn thông phức tạp.",
          "Kỹ sư thiết kế và viết phần mềm cho máy tính, thiết kế và viết phần mềm cho các thiết bị thông minh như điện thoại di động, rô bốt, xe ô tô.",
          "Kỹ sư thiết kế vi mạch kiểm thử vi mạch, kỹ sư làm việc trong lĩnh vực bán dẫn cũng như các công nghệ vật liệu điện tử tiên tiến khác.",
          "Kỹ sư thiết kế, chế tạo, vận hành thiết bị y tế, hệ thống thông tin y tế, hệ thống điện tử hàng không vũ trụ, hệ thống đa phương tiện.",
          "Chuyên viên tư vấn, thiết kế, vận hành, điều hành kỹ thuật tại các đài phát thanh, đài truyền hình, công ty tư vấn thiết kế mạng viễn thông, công ty thiết kế sản xuất vi mạch.",
          "Chuyên viên thiết kế, quy hoạch mạng và tối ưu mạng tại các công ty viễn thông, doanh nghiệp tư nhân về điện tử – viễn thông.",
          "Chuyên viên thiết kế truyền dẫn, vận hành, bảo trì tại các công ty điện tử, viễn thông, công ty sản xuất phần mềm thế giới di động",
        ]}
        program={{
          credits: 124,
          subjects: 42,
          list: [
            {
              title: "Đã có bằng Trung học phổ thông",
              content: "Từ 4 năm",
            },
            {
              title: "Đã có bằng cao đẳng ngành Điện tử viễn thông",
              content: "Từ 2 năm",
            },
            {
              title: "Đã có bằng cao đẳng khác ngành Điện tử viễn thông",
              content: "Từ 2 - 3 năm",
            },
            {
              title: "Đã có bằng trung cấp ngành Điện tử viễn thông",
              content: "Từ 3 năm",
            },
            {
              title: "Đã có bằng trung cấp khác ngành Điện tử viễn thông",
              content: "Từ 4 năm",
            },
            {
              title: "Đã có bằng Đại học",
              content: "Từ 1,5 - 2 năm",
            },
          ],
        }}
      />
    </LayoutNganh>
  );
};

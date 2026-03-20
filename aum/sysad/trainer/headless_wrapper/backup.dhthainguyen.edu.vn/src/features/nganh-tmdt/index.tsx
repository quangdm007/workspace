import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Tmdt = () => {
  return (
    <LayoutNganh title="Ngành Thương mại điện tử và Marketing số">
      <Branch
        name="Thương mại điện tử và Marketing số"
        overview={[
          "Ngành thương mại điện tử là ngành đào tạo nhân lực có kiến thức, kỹ năng, kinh nghiệm để triển khai các mô hình kinh doanh trực tuyến trên internet. Khi xu hướng mua sắm online tăng thì nhu cầu tuyển dụng nhân sự ngành thương mại điện tử cũng tăng theo và đang ngày càng trở nên “hot” hơn bao giờ hết.",
          "Tuy là một lĩnh vực còn khá mới tại Việt Nam nhưng thương mại điện tử đang phát triển với tốc độc nhanh và hoà nhập cùng thị trường thương mại điện tử toàn cầu. Vì vậy, trong những năm tới đây, cơ hội việc làm cho những lao động có chuyên môn về thương mại điện tử thật sự rộng mở và nhiều khả năng thăng tiến trong nghề nghiệp.",
          "Chương trình cử nhân trực tuyến Thương mại điện tử sẽ cung cấp các kiến thức nền tảng về kinh tế, xã hội bên cạnh các kiến thức và kỹ năng chuyên sâu về quản trị các lĩnh vực khác nhau, đáp ứng nhu cầu đa dạng của các tổ chức và mục tiêu thăng tiến của cá nhân.",
        ]}
        jobs={[
          "Chuyên viên phát triển và quản trị thương hiệu",
          "Giảng dạy, nghiên cứu về Quản trị Marketing, Marketing",
          "Nhân viên chăm sóc khách hàng, quan hệ công chúng",
          "Chuyên viên tại các công ty hoạt động trong lĩnh vực Marketing",
          "Nhân viên nghiên cứu thị trường",
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

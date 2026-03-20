import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Kt = () => {
  return (
    <LayoutNganh title="Ngành kế toán">
      <Branch
        name="Kế toán"
        overview={[
          "Kế toán là công việc thu thập và xử lý dữ liệu kinh doanh, tài chính của tổ chức để cung cấp thông tin cho việc ra quyết định quản lý. Nghề nghiệp kế toán không chỉ giới hạn trong các doanh nghiệp, ngân hàng hay cơ quan, trường học, bệnh viện mà còn mở rộng dưới dạng các dịch vụ kế toán, kiểm toán, thuế.",
          "Chương trình đào tạo được thiết kế theo hướng ứng dụng, chú ý khả năng tiếp cận nhanh chóng với nghề nghiệp của học viên ngay trong quá trình học và khả năng phát triển lên những vị trí cao hơn sau khi ra trường.",
        ]}
        jobs={[
          "Chuyên viên phụ trách kế toán, kiểm toán, giao dịch ngân hàng",
          "Kế toán trưởng, quản lý tài chính",
          "Giảng viên",
          "Nhân viên môi giới chứng khoán",
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

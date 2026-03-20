import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Tcnh = () => {
  return (
    <LayoutNganh title="Ngành Tài chính ngân hàng">
      <Branch
        name="Tài chính ngân hàng"
        overview={[
          "Tài chính ngân hàng là một ngành học khá là rộng, liên quan đến tất cả các dịch vụ giao dịch tài chính Ngân hàng, lưu thông và vận hành tiền tệ. Ngành Tài chính ngân hàng có thể chia thành nhiều lĩnh vực chuyên ngành khác nhau như ngân hàng, tài chính doanh nghiệp, tài chính thuế, tài chính bảo hiểm Cụ thể hơn, tài chính ngân hàng là hình thức kinh doanh liên quan đến vấn đề tiền tệ thông qua ngân hàng và các công cụ tài chính của ngân hàng phát hành nhằm thanh toán và chi trả trong nội địa và quốc tế.",
          "Sinh viên khi theo học ngành Tài chính ngân hàng sẽ dược cung cấp kiến thức về lĩnh vực tài chính, phát hành cổ phiếu, trái phiếu, huy động vốn tư vấn cho các doanh nghiệp về các hoạt động trên thị trường vốn như mua bán, sáp nhập doanh nghiệp.",
        ]}
        jobs={[
          "Sau khi tốt nghiệp ngành Tài chính Ngân hàng tại Đại học trực tuyến TNU-Elearning, học viên sẽ có những cơ hội việc làm hấp dẫn như: nhân viên tín dụng, nhân viên thu hồi vốn, chuyên viên kế toán, kiểm toán, chuyên viên kinh doanh tiền tệ, chuyên viên quản trị tài sản và nguồn vốn, chuyên viên tư vấn đầu tư, chuyên viên phân tích tài chính, chuyên viên thanh toán quốc tế, giao dịch viên chứng khoán… và những ngành kinh doanh khác.",
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

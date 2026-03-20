import { Branch } from "@/components/Branch";
import { LayoutNganh } from "@/layouts/layoutNganh";

export const Lkt = () => {
  return (
    <LayoutNganh title="Ngành luật kế toán">
      <Branch
        name="Luật kế toán"
        overview={[
          "Chương trình đào tạo trực tuyến ngành Luật Kinh tế cung cấp cho sinh viên kiến thức chuyên môn và năng lực nghề nghiệp về ngành luật, đồng thời chuyên sâu hơn trong lĩnh vực luật kinh doanh thương mại để giải quyết các vấn đề pháp lý trong công việc và cuộc sống. Sinh viên cũng được trang bị kiến thức bổ trợ về kinh tế, quản trị, kế toán để phục vụ cho nghề nghiệp. Bên cạnh đó, sinh viên được rèn luyện các kỹ năng áp dụng pháp luật, thực hành nghề nghiệp, tư duy phản biện và được bồi dưỡng hình thành thái độ văn hóa ứng xử pháp lý và tuân thủ pháp luật.",
        ]}
        jobs={[
          "Luật sư",
          "Nhân viên văn phòng công chứng",
          "Chấp hành viên",
          "Thẩm tra viên",
          "Chuyên viên tư vấn pháp luật tại các doanh nghiệp",
          "Chuyên viên nghiên cứu hành pháp, lập pháp và tư pháp tại các cơ quan nhà nước",
          "Giảng viên Luật kinh tế",
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

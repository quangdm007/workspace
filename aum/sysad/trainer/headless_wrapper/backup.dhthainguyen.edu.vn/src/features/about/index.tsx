"use client";

import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const About = () => {
  return (
    <Box color={"blue.800"}>
      <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)">
        <Container maxW={"6xl"} py="60px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            Giới thiệu Đại học Thái Nguyên
          </Heading>
        </Container>
      </Box>

      <Container maxW={"6xl"} py="60px">
        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"10px"}>
          Lịch sử hình thành và phát triển Đại học Thái Nguyên
        </Heading>
        <Text>
          Đại học Thái Nguyên (ĐHTN – tên tiếng Anh: ThaiNguyen University; viết
          tắt là TNU) được thành lập ngày 04/04/1994 theo Nghị định số 31/CP của
          Chính Phủ trên cơ sở tổ chức sắp xếp lại các trường đại học thuộc địa
          bàn tỉnh Thái Nguyên. Sau hơn 25 năm xây dựng và phát triển, Đại học
          Thái Nguyên đã không ngừng phát triển và hoàn thiện đầy đủ theo mô
          hình của một đại học vùng, đa cấp, đa ngành bao gồm: các đơn vị quản
          lý, các đơn vị nghiên cứu, các đơn vị đào tạo và các đơn vị phục vụ
          đào tạo.
        </Text>
        <Grid placeItems={"center"} py={"24px"}>
          <Image
            src={"/dhtn.jpg"}
            alt="Đại học Thái Nguyên"
            width={600}
            height={436}
          />
          <Text fontWeight={"bold"}>Đại học Thái Nguyên</Text>
        </Grid>
        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"10px"}>
          Sứ mạng
        </Heading>
        <Text>
          ĐHTN là đại học vùng, đại học công lập, đào tạo nhân lực chất lượng
          cao; nghiên cứu khoa học và chuyển giao công nghệ (NCKH & CGCN) tiên
          tiến; thực hiện nhiệm vụ chiến lược phát triển bền vững vùng Trung du
          và miền núi Bắc Bộ và cả nước.
        </Text>
        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"10px"}>
          Tầm nhìn 2035
        </Heading>
        <Text>
          ĐHTN nằm trong nhóm 500 trường đại học hàng đầu châu Á, là một trung
          tâm đổi mới sáng tạo và phát triển bền vững cộng đồng.
        </Text>
        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"10px"}>
          Giá trị cốt lõi
        </Heading>
        <Text fontWeight={"700"}>SÁNG TẠO - NHÂN VĂN - CHẤT LƯỢNG</Text>

        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"10px"}>
          Slogan
        </Heading>
        <Text fontWeight={"600"}>
          Cùng kiến tạo những giá trị mới - Together we create new success.
        </Text>
        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"10px"}>
          Triết lý giáo dục
        </Heading>
        <Text>Nhân văn, Khai phóng, Toàn diện.</Text>
        <Heading as="h2" size={{ base: "md" }} py="16px" pb={"10px"}>
          Hiện trạng
        </Heading>
        <Text>
          ĐHTN đang tổ chức đào tạo 142 ngành đào tạo trình độ đại học với trên
          250 chương trình đào tạo, 63 ngành đào tạo thạc sĩ, 32 ngành đào tạo
          tiến sĩ, 20 ngành đào tạo chuyên khoa y được, 04 ngành đào tạo bác sĩ
          nội trú và 25 ngành đào tạo cao đẳng, trong đó, nhiều ngành truyền
          thống đang thực hiện tuyển sinh tốt, được tiếp tục đầu tư để nâng cao
          chất lượng đào tạo. Các chương trình này do các đơn vị đào tạo của
          ĐHTN thiết kế, xây dựng dựa trên cơ sở tham khảo các chương trình đào
          tạo đang được áp dụng ở trường đại học có uy tín ở trong nước và nước
          ngoài và được giảng dạy phần lớn khối kiến thức chuyên ngành của
          chương trình đào tạo bằng tiếng Anh. ĐHTN thực hiện có hiệu quả công
          tác đào tạo theo học chế tín chỉ ở tất cả các ngành và bậc học, công
          tác xây dựng và phát triển chương trình đào tạo theo hướng đáp ứng nhu
          cầu xã hội và hội nhập, thực hiện việc liên thông giữa các chương
          trình đào tạo, tích cực đổi mới chương trình, nội dung, phương pháp
          giảng dạy, kiểm tra, đánh giá, đổi mới công tác biên soạn giáo trình,
          tài liệu giảng dạy, học tập, công tác quản lý đào tạo; thực hiện xây
          dựng chuẩn đầu ra, công khai hóa các điều kiện đảm bảo chất lượng và
          chuẩn đầu ra cho tất cả các ngành đào tạo ở các trình độ; công tác
          quản lý chất lượng được thực hiện nghiêm túc.
        </Text>
      </Container>
    </Box>
  );
};

"use client";

import { HeadSection } from "@/components/HeadSection";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  // eslint-disable-next-line no-unused-vars
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar name={name} mb={2} bg={"#0b434a"} color={"white"} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export const Review = () => {
  return (
    <Box
      bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
      py={"48px"}
    >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <HeadSection
          subtitle="đánh giá"
          title="Đánh giá của học viên"
          desc="Cùng lắng nghe những đánh giá của học viên đã tốt nghiệp hệ đào tạo từ xa tại Đại học Thái Nguyên"
        />
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Nguyễn Thị Trang</TestimonialHeading>
              <TestimonialText>
                Hệ đào tạo đại học từ xa của trường giúp tôi tiết kiệm được rất
                nhiều thời gian và chi phí bởi vì tôi không cần phải đến tận
                trường để học. Tôi có thể theo dõi video bài giảng để tự học mọi
                lúc mọi nơi mà tôi muốn
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Nguyễn Thị Trang"}
              title={"Trưởng phòng kinh doanh"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Nguyễn Phương Linh</TestimonialHeading>
              <TestimonialText>
                Học tập trực tuyến mang nhiều ưu điểm vượt trội đã làm thay đổi
                mạnh mẽ khả năng tự học nhằm đáp ứng chương trình học tập. Nhà
                trường luôn tạo điều kiện cho học viên có thể sử dụng kho tài
                liệu phong phú nhằm nâng cao hiệu quả học tập
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Nguyễn Phương Linh"}
              title={"Nhân viên Marketing"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Phùng Văn Dũng</TestimonialHeading>
              <TestimonialText>
                Chương trình đào tạo giúp tôi có thêm nhiều kiến thức hay. Tôi
                có thể nghiên cứu lại kiến thức bất kỳ lúc nào nhờ nguồn giáo
                trình, tài liệu phong phú và thời gian học linh động
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Phùng Văn Dũng"}
              title={"Nhân viên kế toán"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

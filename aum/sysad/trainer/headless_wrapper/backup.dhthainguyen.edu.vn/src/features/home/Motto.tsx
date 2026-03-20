"use client";

import { HeadSection } from "@/components/HeadSection";
import {
  Avatar,
  Box,
  Container,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUniversity } from "react-icons/fa";

export const Item = ({
  name,
  label,
  content,
  title,
  image,
}: {
  name: string;
  label: string;
  content: string;
  title: string;
  image: string;
}) => {
  return (
    <Box
      p={"24px"}
      border={"1px solid"}
      borderColor={"gray.600"}
      rounded={"sm"}
      pos={"relative"}
      color={"green.800"}
      bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
    >
      <HStack pb="32px">
        <Avatar as={FaUniversity} color={"green.700"} p={"6px"} />
        <HStack flexDir={"column"} align={"start"}>
          <Text
            textAlign={"center"}
            fontSize={{ base: "sm", lg: "xl" }}
            fontWeight={"bold"}
          >
            {name}
          </Text>
          <Text textAlign={"center"} fontSize={"sm"} fontWeight={"bold"}>
            {label}
          </Text>
        </HStack>
      </HStack>
      <Heading size={{ base: "sm", lg: "md" }}>{title}</Heading>
      <HStack pt={"24px"} flexDir={{ base: "column", lg: "row" }}>
        <Box>
          <Image
            src={image}
            alt={name}
            width={200}
            height={300}
            style={{ borderRadius: "12px" }}
          />
        </Box>
        <Image
          src={`/dialog.svg`}
          width={60}
          height={60}
          style={{ position: "absolute", top: 24, right: 32 }}
          alt="image"
        />
        <Text flex={1}>{content}</Text>
      </HStack>
    </Box>
  );
};

const reviews = [
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/office.png`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
  },
];

export const StyledSwiper = styled(Swiper)`
  width: min(80%, 800px);
  background-color: transparent;
  margin-top: 32px;
`;

export const Motto = () => {
  return (
    <Box py={"48px"}>
      <Container maxW="9xl" overflow={"hidden"}>
        <HeadSection
          title="Phương châm giáo dục"
          subtitle="phương châm"
          desc="Cùng lắng nghe phương châm trong giáo dục của chúng tôi"
        />
        <StyledSwiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Item
                name={"Đại học Thái Nguyên"}
                label={"Hệ đào tạo từ xa"}
                content={
                  "Môi trường học tập đề cao tính chủ động và kỹ năng phân tích vấn đề một cách độc lập là tiền đề vững chắc để sinh viên ra trường tiếp nhận kiến thức mới và bắt nhịp với công việc nhanh chóng, dễ dàng. Suốt những năm đại học, sinh viên Đại học Thái Nguyên được học tập, làm việc cùng đội ngũ giảng viên, nhà khoa học có học hàm, học vị cao. Hơn nữa, với quan điểm lấy người học làm trung tâm, nhà trường đặc biệt chú trọng tinh thần tự học, tự nghiên cứu của sinh viên thông qua những bài giảng gợi mở, đề án thực tế, công trình nghiên cứu khoa học, phương pháp khai thác kho học liệu, …"
                }
                title={
                  'Phương pháp giảng dạy hiện đại “LẤY NGƯỜI HỌC LÀM TRUNG TÂM"'
                }
                image={review.image}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </Box>
  );
};

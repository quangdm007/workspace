import { useSize } from "@/hooks/useSizeWindow";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CardTeacher = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  return (
    <Card maxW="sm" bg={"gray.100"}>
      <CardBody>
        <Image
          width={400}
          height={400}
          src={image}
          alt="Green double couch with wooden legs"
          style={{ borderRadius: "12px" }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px;
`;

export const ListTeacher = () => {
  const { size } = useSize();

  const teachers = [
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
    {
      title: "Ms Huyền - Giáo viên được yêu thích nhất",
      desc: "2 năm sinh sống và làm việc tại Anh",
      avt: `/teacher-2.png`,
    },
  ];

  return (
    <Container maxW={"9xl"}>
      <Heading
        as={Flex}
        fontSize={"2xl"}
        color={"red.500"}
        gap={"8px"}
        flexDir={{ base: "column", md: "row" }}
        justify={"center"}
        pb={"32px"}
        textAlign={"center"}
      >
        300+ GIÁO VIÊN
        <Heading fontSize={"2xl"} color={"gray.700"} textAlign={"center"}>
          TRUYỀN CẢM HỨNG
        </Heading>
      </Heading>
      <Box>
        <Swiper
          effect={"coverflow"}
          autoplay={{ delay: 1 }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={
            size.width < 768
              ? 1
              : size.width < 992
              ? 2
              : size.width < 1280
              ? 3
              : size.width < 1536
              ? 4
              : 6
          }
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {teachers.map((teacher, index) => (
            <StyledSwiperSlide key={index}>
              <CardTeacher
                title={teacher.title}
                desc={teacher.desc}
                image={teacher.avt}
              />
            </StyledSwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

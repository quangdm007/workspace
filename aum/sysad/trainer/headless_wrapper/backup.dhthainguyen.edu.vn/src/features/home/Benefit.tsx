"use client";

import { HeadSection } from "@/components/HeadSection";
import {
  As,
  Box,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineWorkHistory } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

export const Item = ({
  path,
  title,
  desc,
  icon,
}: {
  path: string;
  title: string;
  desc: string;
  icon?: As;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      color={"#004956"}
      p={{ base: "16px", md: "20px", lg: "24px" }}
      border={"1px solid"}
      borderColor={"gray.300"}
      rounded={"sm"}
    >
      <Heading as={"h2"} size={{ base: "md" }}>
        {title}
      </Heading>
      <HStack spacing={"12px"} pt={"16px"}>
        <Icon
          as={icon}
          width={{ base: "50px", md: "100px" }}
          height={{ base: "50px", md: "100px" }}
          alt="Ngành kế toán HVTC"
          color={"#004956"}
        />

        <VStack align={"start"}>
          <Text color={"gray.500"} fontSize={{ base: ".8rem", md: "sm" }}>
            {desc}
          </Text>

          {/* <Button variant={"link"} color={"#004956"}>
            Xem chi tiết
          </Button> */}
        </VStack>
      </HStack>
    </Box>
  );
};

export const benefits = [
  {
    path: "#",
    title: "Thời gian học tập linh hoạt, phù hợp với mọi đối tượng",
    desc: "Với hình thức học tập online, học viên có thể chủ động về kế hoạch cũng như thời gian học tập, đây là ưu điểm vượt trội của chương trình",
    icon: BiHome,
  },
  {
    path: "#",
    title: "Sở hữu bằng đại học uy tín hàng đầu Việt Nam",
    desc: "Chương trình học do Đại học Thái Nguyên cấp bằng và được Bộ GD&ĐT công nhận",
    icon: PiCertificate,
  },
  {
    path: "#",
    title: "Đội ngũ giảng viên đầu ngành, giàu kinh nghiệm",
    desc: "100% giảng viên tham gia chương trình đều có bằng Thạc sĩ, Tiến sĩ và đều đang giảng dạy và làm việc tại trường",
    icon: LiaIndustrySolid,
  },
  {
    path: "#",
    title: "96% Sinh viên ra trường có việc làm",
    desc: "Dễ dàng hơn khi xin việc, xét bậc tăng lương. Tốt nghiệp bạn đủ điều kiện để học lên Thạc sĩ, Tiến sĩ theo quy định",
    icon: MdOutlineWorkHistory,
  },
];

export const Benefit = () => {
  return (
    <Box
      bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
      py={"48px"}
    >
      <Container maxW="6xl">
        <HeadSection
          title="Bạn nhận được gì"
          subtitle="lợi ích"
          desc="Những giá trị bạn sẽ nhận được từ chương trình của Đại học Thái Nguyên"
        />
        <SimpleGrid pt={"24px"} spacing={"8"} columns={{ base: 1, md: 2 }}>
          {benefits.map((categoty, index) => (
            <Item
              key={index}
              path={categoty.path}
              title={categoty.title}
              desc={categoty.desc}
              icon={categoty.icon}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

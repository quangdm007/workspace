import { HeadSection } from "@/components/HeadSection";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { GiSpookyHouse } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const accSupport = [
  {
    icon: <GiSpookyHouse />,
    title: "Sở hữu Bằng Đại học uy tín",
    content:
      "Bằng Cử nhân không ghi hình thức đào tạo và được Bộ Giáo dục công nhận, Có giá trị sử dụng trọn đời",
  },

  {
    icon: <SlCalender />,
    title: "Thời gian đào tạo",
    content:
      "Thời gian đào tạo tùy vào đối tượng từ 2-2,5 năm. Người học có thể rút ngắn thời gian học tập theo quy chế đào tạo",
  },

  {
    icon: <MdOutlineLocalShipping />,
    title: "Kho học liệu hoàn toàn miễn phí",
    content:
      "Tài liệu học tập đa Phương tiện (video, slide, script,...), giáo trình do Đại học Thái Nguyên biên soạn",
  },
];

export const AccSupport = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accSupport.map((acc, index) => (
        <AccordionItem
          border={"none"}
          key={index}
          py={"12px"}
          color={"red.700"}
        >
          <AccordionButton bg={"gray.50"} py="16px" rounded={"md"}>
            <Box flex="1" textAlign="left">
              <HStack>
                {acc.icon}
                <Heading
                  fontSize={{ base: "sm", md: "md" }}
                  color={"green.900"}
                >
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} color={"green.900"}>
            {acc.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Support = () => {
  return (
    <Box
      bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
      py={"48px"}
    >
      <Container maxW={"6xl"}>
        <HeadSection
          title="Hỗ trợ của chúng tôi"
          subtitle="hỗ trợ"
          desc="Đại học Thái Nguyên hỗ trợ bạn nhiều lợi ích"
        />
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"36px"} pt={"24px"}>
          <GridItem>
            <Image
              src={`/support.png`}
              alt="Kết hợp online và oflinet"
              width={600}
              height={400}
              style={{ borderRadius: "12px" }}
            />
            <Text fontWeight={"bold"} textAlign={"center"}>
              Hỗ trợ - Đại học Thái Nguyên
            </Text>
          </GridItem>
          <GridItem>
            <AccSupport />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

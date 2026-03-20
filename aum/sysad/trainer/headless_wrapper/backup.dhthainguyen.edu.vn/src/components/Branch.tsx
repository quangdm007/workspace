"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Divider,
  GridItem,
  HStack,
  Heading,
  Icon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { BsBook, BsCheck2Circle, BsLaptop } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiExam, PiStudent } from "react-icons/pi";

interface IBranch {
  name: string;
  overview: string[];
  jobs: string[];
  program: {
    credits: 124;
    subjects: 42;
    list: {
      title: string;
      content: string;
    }[];
  };
}

export const Accs = ({
  accs,
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accs.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"12px"} rounded={"sm"}>
          <AccordionButton bg={"gray.50"} py="16px" rounded={"sm"}>
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <Icon as={BiPlus} />
          </AccordionButton>
          <AccordionPanel pb={4} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h4"} size={"sm"}>
                  {item?.title}
                </Heading>
                <UnorderedList>
                  {item?.list?.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
            <UnorderedList></UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const programTimelist = [
  {
    title: "Đã có bằng Cao đẳng khác khối ngành",
    content: "2,5 năm",
  },
  {
    title: "Đã có bằng Cao đẳng cùng khối ngành",
    content: "2 năm",
  },
  {
    title: "Đã có bằng Đại học cùng, khác khối ngành",
    content: "Từ 2 năm",
  },
];

export const Branch = (props: IBranch) => {
  const { name, overview, jobs, program } = props;
  return (
    <Box color={"blue.800"}>
      <Heading
        as={"h2"}
        size={"md"}
        pb={"16px"}
      >{`Thông tin về ngành ${name}`}</Heading>
      <HStack
        justify={"space-between"}
        align={"start"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <HStack>
          <Icon as={LiaUniversitySolid} />
          <Text> Đại học Thái Nguyên</Text>
        </HStack>
        <HStack>
          <Icon as={PiStudent} />
          <Text> Hệ đào tạo từ xa</Text>
        </HStack>
        <HStack>
          <Icon as={BsLaptop} />
          <Text> Hình thức học trực tuyến</Text>
        </HStack>
      </HStack>
      <Divider borderColor={"gray.600"} />

      <Box pt={"32px"}>
        <HStack pb={"16px"}>
          <Icon as={GrOverview} />
          <Heading as={"h2"} size={"md"}>
            Tổng quan
          </Heading>
        </HStack>

        <UnorderedList>
          {overview?.map((item, index) => (
            <ListItem key={index} fontWeight={500} pb={"12px"}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box pt={"32px"}>
        <HStack pb={"16px"}>
          <Icon as={GrOverview} />
          <Heading as={"h2"} size={"md"}>
            Nghề nghiệp
          </Heading>
        </HStack>

        <UnorderedList>
          {jobs?.map((item, index) => (
            <ListItem key={index} fontWeight={500} pb={"12px"}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Box pt={"32px"}>
        <HStack pb={"16px"}>
          <Icon as={GrOverview} />
          <Heading as={"h2"} size={"md"}>
            Chương trình và thời gian đào tạo
          </Heading>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"12px"}>
          <GridItem>
            <HStack
              border={"1px solid"}
              borderColor={"gray.200"}
              px={{ base: "12px", lg: "16px" }}
              py={{ base: "10px", lg: "14px" }}
              rounded={"sm"}
            >
              <Circle bg={"blue.600"} p={{ base: "12px", lg: "16px" }}>
                <Icon as={PiExam} w={"25px"} h={"25px"} color={"white"} />
              </Circle>
              <VStack align={"start"}>
                <Text fontWeight={"700"} fontSize={{ base: "md", lg: "lg" }}>
                  Tổng số tín chỉ
                </Text>
                <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={600}>
                  {program?.credits}
                </Text>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack
              border={"1px solid"}
              borderColor={"gray.200"}
              px={{ base: "12px", lg: "16px" }}
              py={{ base: "10px", lg: "14px" }}
              rounded={"sm"}
            >
              <Circle bg={"blue.600"} p={{ base: "12px", lg: "16px" }}>
                <Icon as={BsBook} w={"25px"} h={"25px"} color={"white"} />
              </Circle>
              <VStack align={"start"}>
                <Text fontWeight={"700"} fontSize={{ base: "md", lg: "lg" }}>
                  Tổng số môn học
                </Text>
                <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={600}>
                  {program?.subjects}
                </Text>
              </VStack>
            </HStack>
          </GridItem>

          {/* Đoạn này fix cứng thời giang đào tạo ở tất cả các chuyên ngành như nhau */}
          {programTimelist?.map((item, index) => (
            <GridItem colSpan={{ base: 1, md: 2 }} key={index}>
              <HStack
                border={"1px solid"}
                borderColor={"gray.200"}
                px={{ base: "12px", lg: "16px" }}
                py={{ base: "10px", lg: "14px" }}
                rounded={"sm"}
                justify={"space-between"}
              >
                <VStack align={"start"}>
                  <Text fontWeight={"700"} fontSize={{ base: "md", lg: "lg" }}>
                    {item?.title}
                  </Text>
                  <Text fontSize={{ base: "md", lg: "lg" }} fontWeight={600}>
                    {item?.content}
                  </Text>
                </VStack>
                <Circle bg={"blue.600"} p={{ base: "12px", lg: "16px" }}>
                  <Icon
                    as={BsCheck2Circle}
                    w={"25px"}
                    h={"25px"}
                    color={"white"}
                  />
                </Circle>
              </HStack>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

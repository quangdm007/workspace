import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { BsFillPlayCircleFill } from "react-icons/bs";

import React, { useState } from "react";

export const TagItem = ({
  index,
  setStep,
  label,
  step,
}: {
  step: number;
  index: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  label: string;
}) => {
  return (
    <Tag
      as={Button}
      px="12px"
      py="24px"
      rounded={"full"}
      mb={"18px"}
      bg={step === index ? "red.600 !important" : ""}
      onClick={() => setStep(index)}
    >
      <ListIcon
        as={BsFillPlayCircleFill}
        color={step === index ? "white" : "red.500"}
        w="38px"
        h="38px"
      />
      <Text
        color={step === index ? "white" : "gray.800"}
        fontSize={{ base: "sm", md: "md", lg: "xl" }}
      >
        {label}
      </Text>
    </Tag>
  );
};

const list = [
  "Xem bài giảng trực tuyến",
  "Học tập trên lớp cùng giáo viên",
  "Ba mẹ cùng cùng con học tập",
  "Trợ giảng hỗ trợ con học tập",
];

export const Model = () => {
  const [step, setStep] = useState(1);

  return (
    <Box bgImage={`url(/bg.svg)`} bgSize={"cover"} py="64px" pb="260px">
      <Container maxW={"6xl"}>
        <Box pb="48px">
          <Heading
            as={Flex}
            flexDir={{ base: "column", lg: "row" }}
            justify={"center"}
            align={"center"}
            color={"white"}
            fontSize={"2xl"}
            pb="12px"
          >
            MÔ HÌNH LỚP HỌC
            <Tag
              size={"2xl"}
              borderRadius="full"
              variant="solid"
              bg={"white"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              color={"red.600"}
              px="10px"
              py="8px"
              ml="12px"
            >
              @ĐỘC QUYỀN
            </Tag>
          </Heading>
          <Flex justify={"center"}>
            <Text
              textAlign={"center"}
              fontSize={"1rem"}
              color={"white"}
              maxW={"2xl"}
            >
              Lớp học đảo ngược thúc đẩy khả năng tự học, tính chủ động và tích
              cực trong học tập ở học trò, các con không phụ thuộc, chờ thầy cô
              đưa kiến thức.
            </Text>
          </Flex>
        </Box>
        <SimpleGrid columns={{ base: 1, lg: 3 }}>
          <GridItem colSpan={2}>
            <List spacing={3}>
              {list.map((item, index) => (
                <ListItem key={index}>
                  <TagItem
                    label={item}
                    index={index + 1}
                    step={step}
                    setStep={() => setStep(index + 1)}
                  />
                </ListItem>
              ))}
            </List>
          </GridItem>
          <GridItem>
            <Box pos={"relative"} cursor={"pointer"}>
              <Box>
                <AspectRatio
                  maxW="full"
                  rounded={"2xl"}
                  overflow={"hidden"}
                  shadow={"2xl"}
                >
                  <iframe
                    width={512}
                    height={200}
                    src="https://www.youtube.com/embed/mvDV-4Ynyi4??autoplay=1&mute=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

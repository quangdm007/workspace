"use client";

import { HeadSectionLight } from "@/components/HeadSection";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Container,
  GridItem,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { FormMain } from "../../components/FormContact";

const lists = [
  "KHÔNG phải thi đầu vào, chỉ xét tuyển hồ sơ",
  "KHÔNG phải đến trường, học online mọi lúc mọi nơi",
  "TIẾT KIỆM chi phí, chủ động thời gian học tập",
  "Tốt nghiệp Cao đẳng hoặc Đại học",
  "BẲNG ĐỎ được Bộ GD&ĐT công nhận, có giá trị toàn quốc",
  "Đủ điều kiện học lên cao học, xét bậc lương, thi công chức theo đúng quy định",
];

export const Contact = () => {
  return (
    <Box
      pos={"relative"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Container
        maxW={"6xl"}
        py={"60px"}
        pos={"absolute"}
        top={0}
        left={"50%"}
        transform={"translateX(-50%)"}
        className="context"
      >
        <HeadSectionLight
          title="Tuyển sinh"
          subtitle="liên hệ"
          desc="Hệ đại học từ xa 2023"
        />
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"24px"} pt={"24px"}>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Box color={"white"}>
              <List
                spacing={"18px"}
                border={"1px solid"}
                borderColor={"gray.400"}
                p={{ base: "12px", md: "16px" }}
                rounded={"sm"}
              >
                {lists.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon
                      as={AiFillStar}
                      w={"24px"}
                      h={"24px"}
                      color={"orange.400"}
                    />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </GridItem>

          <GridItem>
            <FormMain />
          </GridItem>
        </SimpleGrid>
      </Container>

      {/* Animate  */}
      <Box className={styles["area"]} bg={"blue.900"} w={"100%"}>
        <List className={styles["circles"]}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </Box>
    </Box>
  );
};

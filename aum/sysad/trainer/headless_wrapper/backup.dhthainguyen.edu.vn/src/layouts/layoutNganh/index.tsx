"use client";

import { FormMain } from "@/components/FormContact";
import { Notify } from "@/features/home/Notify";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutNganh = ({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}) => {
  return (
    <>
      <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)">
        <Container maxW={"6xl"} py="62px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            {title || "Ngành công nghệ thực phẩm"}
          </Heading>
        </Container>
      </Box>
      <Box color={"blue.900"}>
        <Box>
          <Container maxW={"6xl"} py="42px">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"24px"}>
              <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
              <GridItem>
                <Box mt={{ base: "24px", lg: 0 }}>
                  <Heading as={"h2"} size={{ base: "md" }} pb={"12px"}>
                    Đăng ký xét tuyển không cần thi
                  </Heading>
                  <Text fontSize={"sm"} pb={"12px"}>
                    Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Đi học được luôn.
                    Ưu tiên nộp hồ sơ sớm
                  </Text>
                  <FormMain />
                </Box>
              </GridItem>
            </SimpleGrid>
            <Box mt={"48px"} py={"24px"}>
              <Notify />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

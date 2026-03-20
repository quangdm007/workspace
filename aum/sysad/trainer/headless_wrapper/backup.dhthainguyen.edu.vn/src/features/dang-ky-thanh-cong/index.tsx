"use client";

import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const DangkyTc = () => {
  return (
    <Box bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}>
      <Center flexDir={"column"} minH={"50vh"}>
        <Heading size={"md"} color="blue.700" pb={"24px"}>
          Đăng ký thành công!
        </Heading>
        <Image
          priority
          src={"/success-icon.png"}
          width={100}
          height={100}
          alt="Thành công"
        />
        <Text fontWeight={600} color={"green.700"} pt={"16px"}>
          Chúng tôi sẽ liên hệ lại với bạn!
        </Text>
      </Center>
    </Box>
  );
};

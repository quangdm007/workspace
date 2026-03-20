import { Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <Image
        priority
        width={65}
        height={65}
        style={{ borderRadius: "50%" }}
        src={`/logo-dhthainguyen.png`}
        alt="logo Đại học Thái nguyên"
      />
      <VStack color={"#028dbf"} align={"start"}>
        <Heading as="h1" size={{ base: "sm", lg: "md" }}>
          Đại học Thái Nguyên
        </Heading>
        <Heading as="h2" fontSize={{ base: ".8rem" }}>
          Trung tâm đào tạo từ xa
        </Heading>
      </VStack>
    </Link>
  );
};

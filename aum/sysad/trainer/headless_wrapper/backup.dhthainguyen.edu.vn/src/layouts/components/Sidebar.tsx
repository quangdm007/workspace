"use client";

import { FormMain } from "@/components/FormContact";
import { categotys } from "@/features/home/Categorys";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTiktok } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export const Item = ({
  path,
  image,
  title,
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image
        priority
        width={700}
        height={400}
        src={image}
        alt={title}
        style={{ maxHeight: "150px", filter: "brightness(50%)" }}
      />
      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const Sidebar = ({ sticky }: { sticky?: string }) => {
  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky}>
      <Box>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Các ngành đào tạo
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 1 }} gap={"20px"}>
          {categotys.map((cat, index) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mạng xã hội
        </Heading>
        <Box
          rounded={"sm"}
          p="24px"
          border={"1px solid"}
          borderColor={"gray.300"}
        >
          <VStack spacing={"16px"}>
            <Button
              leftIcon={<FaFacebook />}
              colorScheme="facebook"
              w={"full"}
              as={Link}
              href={"https://www.facebook.com/TNUElearning?locale=vi_VN"}
            >
              Fanpage
            </Button>

            <Button
              leftIcon={<FaYoutube />}
              colorScheme="red"
              w={"full"}
              as={Link}
              href={"https://www.youtube.com/@trungtamaotaotuxaaihocthai6708 "}
            >
              Youtube
            </Button>

            <Button
              leftIcon={<BiLogoTiktok />}
              bg="blackAlpha.800"
              w={"full"}
              color={"whiteAlpha.800"}
              as={Link}
              href={"https://www.tiktok.com/@tnuelearning"}
            >
              Tiktok
            </Button>
            <VStack pt={"24px"} w={"full"}>
              <Text>Liên hệ trực tiếp</Text>
              <Button
                leftIcon={<BsFillTelephoneFill />}
                variant={"link"}
                color={"red.600"}
                w={"full"}
              >
                <Link href="tel: 0914709118">0914709118</Link>
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <Box pt={"24px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Đăng ký tư vấn
        </Heading>
        <FormMain />
      </Box>
    </Box>
  );
};

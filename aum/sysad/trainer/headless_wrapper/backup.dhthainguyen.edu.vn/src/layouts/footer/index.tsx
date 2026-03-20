"use client";

import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { InputRes } from "../../components/InputRes";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Box bg={"#054659"} color={"White"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Flex justify="center" align={"center"} direction="column" mb="32px">
            <Heading size="md" textAlign="center" mb={4}>
              Đăng ký nhận tư vấn
            </Heading>
            <Box maxW="md">
              <InputRes
                placeholder="Nhập email để đăng ký"
                label="Đăng ký"
                onClick={onToggle}
              />
            </Box>
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <GridItem colSpan={{ base: 1, sm: 2 }}>
              <Stack align={"flex-start"}>
                <ListHeader>Thông tin liên hệ</ListHeader>
                <Box as={Link} href={"#"}>
                  Văn phòng tuyển sinh:
                </Box>
                <UnorderedList>
                  <ListItem>
                    Hà Nội: Số 116 Trần Vĩ, Phường Mai Dịch, Quận Cầu Giấy,
                    Thành Phố Hà Nội
                  </ListItem>
                  <ListItem>
                    Hồ Chí Minh: Số 91 Ký Con, phường Nguyễn Thái Bình, Quận 1,
                    TP Hồ Chí Minh
                  </ListItem>
                </UnorderedList>
                <Box as={Link} href={"tel:0914709118"}>
                  Hotline: 0914709118
                </Box>
                <Box as={Link} href={"mailto:daihoctructuyen@tnu.edu.vn"}>
                  Email: daihoctructuyen@tnu.edu.vn
                </Box>
                <Box
                  as={Link}
                  href={
                    "https://www.facebook.com/groups/800071498531146?locale=vi_VN"
                  }
                  textDecor={"underline"}
                >
                  Group Facebook: daihocthainguyen - elearning
                </Box>
                <Box
                  as={Link}
                  href={"https://www.facebook.com/TNUElearning?locale=vi_VN"}
                  textDecor={"underline"}
                >
                  Fanpage: daihocthainguyen - elearning
                </Box>
              </Stack>
            </GridItem>

            <Stack align={"flex-start"}>
              <ListHeader>Hỗ trợ</ListHeader>
              <Box as={Link} href={"/gioi-thieu"}>
                Về chúng tôi
              </Box>
              <Box as={Link} href={"/lich-khai-giang"}>
                Lịch khai giảng
              </Box>
              <Box as={Link} href={"/dang-ky"}>
                Đăng ký
              </Box>
              <Box as={Link} href={"/tin-tuc"}>
                Tin tức
              </Box>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Hợp tác tuyển sinh</ListHeader>
              <Link href={"https://timdoitac.aum.edu.vn/"}>
                <Image
                  src={"/timdoitac.jpg"}
                  width={150}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ borderRadius: "6px" }}
                />
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Mạng xã hội</ListHeader>
              <Stack direction={"row"} spacing={6}>
                <SocialButton
                  label={"Facebook"}
                  href={"https://www.facebook.com/TNUElearning"}
                >
                  <FaFacebook />
                </SocialButton>
                <SocialButton
                  label={"Tiktok"}
                  href={"https://www.tiktok.com/@tnuelearning?"}
                >
                  <FaTiktok />
                </SocialButton>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormPoup title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};

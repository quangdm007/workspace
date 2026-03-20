import { Heading, Text, VStack } from "@chakra-ui/react";

export const HeadSection = ({
  // eslint-disable-next-line no-unused-vars
  subtitle,
  title,
  desc,
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <VStack justify={"center"}>
      {/* <Text color={"#FA692E"}>{subtitle}</Text> */}
      <Heading
        as={"h2"}
        size={{ base: "sm", md: "lg" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"blue.800"}
      >
        {title}
      </Heading>
      <Text color={"gray.500"} fontWeight={"thin"}>
        {desc}
      </Text>
    </VStack>
  );
};

export const HeadSectionLight = ({
  // eslint-disable-next-line no-unused-vars
  subtitle,
  title,
  desc,
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <VStack justify={"center"}>
      {/* <Text color={"#FA692E"}>{subtitle}</Text> */}
      <Heading
        as={"h2"}
        size={{ base: "sm", md: "lg" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"whiteAlpha.900"}
      >
        {title}
      </Heading>
      <Text color={"whiteAlpha.900"} fontWeight={"sm"}>
        {desc}
      </Text>
    </VStack>
  );
};

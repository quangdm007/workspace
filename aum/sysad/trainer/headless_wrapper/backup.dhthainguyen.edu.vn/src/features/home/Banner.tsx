"use client";

import { Box } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Box
      bgImage={"url('/dai_hoc_thai_nguyen.jpg')"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      py={"48px"}
      h={"50vh"}
    />
  );
};

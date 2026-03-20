"use client";

import {
  Heading,
  IconButton,
  IconButtonProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";
import { BiPhone } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { FormPoup } from "./FormContact";

export const BtnPhone = (props: IconButtonProps) => {
  return (
    <Tooltip label={"0941.010.044"} placement="left" bg={"red.500"} hasArrow>
      <IconButton
        icon={<BiPhone />}
        rounded={"full"}
        color={"white"}
        bg={"red.500"}
        p={"8px"}
        as={"a"}
        href={"tel: 0914709118"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnZalo = (props: IconButtonProps) => {
  return (
    <Tooltip label={"Zalo chat"} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={<SiZalo />}
        rounded={"full"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        as={"a"}
        href={"https://zalo.me/0914709118"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnMes = (props: IconButtonProps) => {
  return (
    <Tooltip
      label={"Facebook messenger"}
      placement="left"
      bg={"blue.500"}
      hasArrow
    >
      <IconButton
        icon={<BsMessenger />}
        rounded={"full"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        transition={"width ease .4s"}
        as={"a"}
        href={"https://www.facebook.com/groups/800071498531146?locale=vi_VN"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnEmail = (props: IconButtonProps) => {
  return (
    <Popover placement="left" trigger="hover">
      <PopoverTrigger>
        <IconButton
          icon={<MdEmail />}
          rounded={"full"}
          color={"white"}
          bg={"orange.500"}
          p={"8px"}
          {...props}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader as={Heading} size={"md"} textAlign={"center"}>
          Để lại thông tin
        </PopoverHeader>
        <PopoverBody>
          <FormPoup />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

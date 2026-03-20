import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { BtnTheme } from "./BtnTheme";

interface IInputRes {
  placeholder?: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const InputRes = (props: IInputRes) => {
  const { placeholder, label, onClick } = props;
  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type="text" placeholder={placeholder} />
      <InputRightElement width="4.5rem" mr="4px">
        <BtnTheme
          h="2rem"
          size="md"
          colorScheme="red"
          fontSize="sm"
          fontWeight="bold"
          onClick={(e) => onClick && onClick(e)}
        >
          {label}
        </BtnTheme>
      </InputRightElement>
    </InputGroup>
  );
};

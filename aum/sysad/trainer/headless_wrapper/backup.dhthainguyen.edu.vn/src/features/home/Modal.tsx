import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FormPoup } from "../../components/FormContact";

interface IModalBase {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={"white"} pt={"12px"} rounded={"sm"} px={"12px"}>
          <ModalCloseButton />
          <ModalBody rounded={"sm"}>
            <FormPoup title="Để lại thông tin" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

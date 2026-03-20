import { CardSpecial } from "@/components/CardSpecial";
import {
  Box,
  Button,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { BiCalendar } from "react-icons/bi";

interface ICardPlace {
  school: string;
  label: string;
  startAt: string;
  endRes: string;
  includes: string;
  certi: string;
  selected: boolean;
  onCLick?: () => void;
}
export const CardPlace = (props: ICardPlace) => {
  const { label, startAt, endRes, includes, certi, school, onCLick } = props;

  return (
    <CardSpecial step={label} bg={"gray.100"}>
      <Box p="16px" pt="24px">
        <Heading size="md" pb={"16px"}>
          {school}
        </Heading>
        <List>
          <ListItem>
            <ListIcon as={BiCalendar} />
            <strong>Ngày thi: </strong> {`${startAt}`}
          </ListItem>
          <ListItem pt={"12px"}>
            <strong>Định dạng bài thi: </strong>
            {`${certi}`}
          </ListItem>
          <ListItem pt={"12px"}>
            <ListIcon as={BiCalendar} />
            <strong>Hạn cuối nộp hồ sơ: </strong> {`${endRes}`}
          </ListItem>
          <ListItem pt={"12px"}>
            <strong>Nội dung hồ sơ: </strong>
            {`${includes}`}
          </ListItem>
        </List>

        <HStack justify={"center"}>
          <Button colorScheme="blue" onClick={() => onCLick && onCLick()}>
            Đăng ký ngay
          </Button>
        </HStack>
      </Box>
    </CardSpecial>
  );
};

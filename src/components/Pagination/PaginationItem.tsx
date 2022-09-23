import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export default function PaginationItem({
  isCurrent,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  } else {
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>;
  }
}

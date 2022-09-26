import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export default function NotificationNav() {
  return (
    <HStack spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py='1'
      color='gray.300'
      borderRightWidth='1px'
      borderColor='gray.700'>
      <Icon as={RiNotificationLine} />
      <Icon as={RiUserAddLine} />
    </HStack>
  )
}
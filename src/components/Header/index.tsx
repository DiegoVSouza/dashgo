import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NotificationNav from "./NotificationsNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
export default function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth="1480px"
      height="20"
      mx="auto" 
      mt="4"
      px="6"
      align="center"
    >
      <Logo/>
      <SearchBox/>
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}

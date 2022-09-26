import { Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import Logo from "./Logo";
import NotificationNav from "./NotificationsNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
export default function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
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
      {!isWideVersion && (
        <IconButton icon={<Icon as={RiMenuLine} />}
          aria-label='Open Navegation'
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}

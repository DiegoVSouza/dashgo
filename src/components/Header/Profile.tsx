import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

interface ProfileProps {
  showProfileData?: boolean
}
export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center" >
      {showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Diego Vieria</Text>
          <Text color="gray.300" fontSize="small">
            diego@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Diego Viera" />
    </Flex>
  );
}

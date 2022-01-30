import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Michael</Text>
          <Text color="gray.300" fontSize="small">
            igormichael120@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Igor Michael"
        bg="pink.300"
        src="https://github.com/igoormichaeel.png"
      />
    </Flex>
  );
}

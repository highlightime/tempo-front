import { Box, Flex } from "@chakra-ui/react";

const Error = () => {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="center" h="90vh" fontSize="3xl">
        잘못된 접근입니다.
      </Flex>
    </Box>
  );
};

export default Error;

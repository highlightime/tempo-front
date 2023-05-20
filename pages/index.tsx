import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tempo | Find your Lover</title>
        <meta name="description" content="Find your Lover with Tempo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box w="100%">
        <Flex
          height="90vh"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Box fontSize="6xl">Tempo</Box>
          <Text fontSize="2xl">Where you can find your lover</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Home;

import chromeStoreLogo from "../images/ChromeStoreIcon.png";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const CoreNotFoundError = () => {
  return (
    <Box>
      <Text color="red.400">Core Extension not found.</Text>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://chrome.google.com/webstore/detail/core/agoakfejjabomempkjlepdflaleeobhb"
      >
        <Image
          src={chromeStoreLogo}
          alt="Chrome Web Store Logo"
          width="32"
          height="32"
        />
        <span>Download Core</span>
      </Link>
    </Box>
  );
};

export default CoreNotFoundError;

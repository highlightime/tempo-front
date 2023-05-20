import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { BsFillSuitHeartFill, BsArrowRightCircle } from "react-icons/bs";
import { UserInfo } from "../types/UserInfo";
import Profile from "../components/Profile";

const Find = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const getUserInfo = async () => {
    const { data } = await axios("/api/find", {
      method: "get",
    });

    setIsFlipped(false);
    setUserInfo(data);
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <Box w="100%">
      <Flex
        flexDir="column"
        h="90vh"
        alignItems="center"
        justifyContent="center"
      >
        {userInfo ? (
          <Box>
            <Box _hover={{ cursor: "pointer" }}>
              <Profile
                userInfo={userInfo!}
                isFlipped={isFlipped}
                handleFlip={handleFlip}
              />
            </Box>
            <Flex
              width="full"
              justifyContent={"space-between"}
              fontSize="xx-large"
              mt="5"
              px="3"
            >
              <Icon
                as={BsFillSuitHeartFill}
                color="red"
                _hover={{ cursor: "pointer" }}
              />
              <Icon
                as={BsArrowRightCircle}
                onClick={getUserInfo}
                _hover={{ cursor: "pointer" }}
              />
            </Flex>
          </Box>
        ) : (
          <Button onClick={getUserInfo}>Let&apos;s Find Your Lover</Button>
        )}
      </Flex>
    </Box>
  );
};

export default Find;

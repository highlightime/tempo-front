import {
  Box,
  Button,
  Flex,
  Icon,
  useColorModeValue,
  Image,
  AbsoluteCenter,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BsFillSuitHeartFill, BsArrowRightCircle } from "react-icons/bs";
import { UserInfo } from "../types/UserInfo";
import { MdHealthAndSafety } from "react-icons/md";

const Find = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const getUserInfo = async () => {
    const { data } = await axios("/api/find", {
      method: "get",
    });

    setImageSrc(`https://fastly.picsum.photos/${data.imageSrc}`);
    setIsFlipped(false);
    setUserInfo(data.userInfo);
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
        {imageSrc ? (
          <Box>
            <Box _hover={{ cursor: "pointer" }}>
              <ReactCardFlip isFlipped={isFlipped}>
                <Box
                  onClick={handleFlip}
                  shadow="2xl"
                  borderRadius="10px"
                  width="300px"
                  height="400px"
                >
                  <Image
                    src={imageSrc}
                    alt="profileImage"
                    width="300"
                    height="400"
                    borderRadius="10px"
                  />
                </Box>
                <Box
                  width="300px"
                  height="400px"
                  onClick={handleFlip}
                  bgColor={useColorModeValue("gray.100", "gray.300")}
                  borderRadius="10px"
                  shadow="2xl"
                  position="relative"
                >
                  <AbsoluteCenter>
                    <Icon
                      as={MdHealthAndSafety}
                      color="blue.500"
                      fontSize="300px"
                      zIndex="-1"
                      opacity="0.1"
                    />
                  </AbsoluteCenter>
                  <Flex
                    flexDir="column"
                    justifyContent="center"
                    height="full"
                    zIndex="1"
                    color={useColorModeValue("black", "black")}
                  >
                    <Box fontSize="3xl" textAlign="center" mb="10">
                      {userInfo?.nickname}
                    </Box>
                    <Box pl="10">Age : {userInfo?.age}</Box>
                    <Box pl="10">Gender: {userInfo?.gender}</Box>
                    <Box pl="10">Message</Box>
                  </Flex>
                </Box>
              </ReactCardFlip>
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
          <Button onClick={getUserInfo}>Let's Find Your Lover</Button>
        )}
      </Flex>
    </Box>
  );
};

export default Find;

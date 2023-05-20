import {
  Box,
  Flex,
  Text,
  Image,
  useColorModeValue,
  AbsoluteCenter,
  Icon,
} from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";
import { MdHealthAndSafety } from "react-icons/md";
import { UserInfo } from "../types/UserInfo";

interface Props {
  userInfo: UserInfo;
  isFlipped: boolean;
  handleFlip: () => void;
}

const Profile = ({ userInfo, isFlipped, handleFlip }: Props) => {
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Box
        onClick={handleFlip}
        shadow="2xl"
        borderRadius="10px"
        width="300px"
        height="400px"
        _hover={{ cursor: "pointer" }}
      >
        <Image
          src={userInfo.profileImage}
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
        _hover={{ cursor: "pointer" }}
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
            {userInfo.nickname}
          </Box>
          <Box pl="10">Birth : {userInfo.birth}</Box>
          <Box pl="10">Gender: {userInfo.gender}</Box>
        </Flex>
      </Box>
    </ReactCardFlip>
  );
};

export default Profile;

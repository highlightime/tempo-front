import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Profile from "../components/Profile";
import { useState } from "react";

const ApproveAppointment = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // todo
  const appointment = {
    address: "인천광역시 서구 청라동 8-122",
    time: "2023-05-21/11:00:00",
    lover: {
      nickname: "Avalanche",
      profileImage:
        "https://assets-global.website-files.com/606f63778ec431ec1b930f1f/614bc8f4ff06e8806e2adc05_og_ava.png",
      birth: "1996-03-06",
      gender: "female",
      isHealthy: true,
    },
  };

  const handleApprove = () => {
    console.log("approve!");
  };

  return (
    <Box w="100%">
      <Flex
        h="90vh"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text fontSize="3xl" mb="4">
          Approve Appointment
        </Text>
        <Profile
          userInfo={appointment.lover}
          isFlipped={isFlipped}
          handleFlip={handleFlip}
        />
        <Text mt="4">{appointment.address}</Text>
        <Text>{appointment.time}</Text>
        <Button mt="4" onClick={handleApprove}>
          Approve
        </Button>
      </Flex>
    </Box>
  );
};

export default ApproveAppointment;

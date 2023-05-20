import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Profile from "../components/Profile";

const ViewAppointment = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

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

  return (
    <Box>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <Text fontSize="3xl" mb="4">
          Appointment
        </Text>
        <Profile
          userInfo={{ ...appointment.lover }}
          isFlipped={isFlipped}
          handleFlip={handleFlip}
        />

        <Text mt="4">{appointment.address}</Text>
        <Text>{appointment.time}</Text>
      </Flex>
    </Box>
  );
};

export default ViewAppointment;

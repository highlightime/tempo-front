import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Profile from "../components/Profile";
import { useState } from "react";
import { AppointmentContractAddr } from "../contracts/ContractAddress";
import contract from "../contracts/AppointmentContract.json";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = AppointmentContractAddr();
const CONTRACT_ABI = contract.abi;


const ApproveAppointment = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // todo
  const appointment = {
    location: "인천광역시 서구 청라동 8-122",
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

  // TODO
  const [receiver, sender] = [
    "0x7eB20590eF39cea2041B7570233607f15da82a3b",
    "sender",
  ];

  const handleApprove = () => {
    console.log("approve!");

    checkWalletIsConnected();

  };

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum || !ethereum.request) {
      alert("Please install MetaMask!");
    }

    // @ts-ignore
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length !== 0) {
      // wallet connect
      const account = accounts[0];

      // createAppointment
      approveAppointment();
    } else {
      console.log("No Authrized Account.");
    }
  };

  async function approveAppointment() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //console.log(CONTRACT_ADDRESS,currentAccount);

        const appointmentContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          signer
        );

        let depositAmount = ethers.utils.parseEther("0.1");
        let createAppointmentTxn = await appointmentContract.giveConsent(receiver, { value: depositAmount });
        // wait transaction mined
        await createAppointmentTxn.wait();
      } else {
        console.log("Ether obj not exists");
      }
    } catch (e) {
      console.log(e);
    }
  }


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
        <Text mt="4">{appointment.location}</Text>
        <Text>{appointment.time}</Text>
        <Button mt="4" onClick={handleApprove}>
          Approve
        </Button>
      </Flex>
    </Box>
  );
};

export default ApproveAppointment;

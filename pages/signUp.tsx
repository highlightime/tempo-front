import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
// import contract from "../contracts/UserAuth.json";
import { UserAuthContractAddr } from "../contracts/ContractAddress";
import Web3 from 'web3'
// import * as ethUtil from 'ethereumjs-util'
import { ethers } from "ethers";
import { AbiItem } from 'web3-utils';
import UserAuth from "../contracts/UserAuth.json";

// const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;
const CONTRACT_ADDRESS = UserAuthContractAddr();
const CONTRACT_ABI = UserAuth.abi;
// const CONTRACT_ABI: AbiItem[] = UserAuth.abi as AbiItem[];

interface UserProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

const provider = new ethers.providers.JsonRpcProvider(process.env.API_URL || "");
const signer = provider.getSigner();
const myContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
// const web3 = new Web3(new Web3.providers.HttpProvider(process.env.API_URL || ""))
// const myContract = new web3.eth.Contract(CONTRACT_ABI, process.env.GASLESS_COUNTER_RECIPIENT_CONTRACT_ADDRESS)


// const signer = new ethers.Wallet(process.env.PRIVATE_KEY || "", web3);

const SignUp = () => {
  const { register, handleSubmit } = useForm<UserProps>();

  const onSubmit = async (data: UserProps) => {
    try {
      // const emailHash = ethers.utils.keccak256(data.email);
      // const passwordHash = ethers.utils.keccak256(data.password);

      console.log(data);
      console.log(myContract);
      const tx = await myContract.registerUser(data.email, data.password);
      // Send the transaction and wait for confirmation
      // const receipt = await tx.send({ from: signer.getAddress() });
      
      // Wait for the transaction to be mined
      await tx.wait();

      console.log("User registered successfully!");
      
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <Box w="100%">
      <Flex
        flexDir="column"
        h="90vh"
        alignItems="center"
        justifyContent="center"
      >
        <form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          style={{ width: "50vw" }}
        >
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Input Email."
              {...register("email")}
            />
          </FormControl>
          <FormControl isRequired my="10">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Input Password."
              {...register("password")}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password Confirm</FormLabel>
            <Input
              type="password"
              placeholder="Repeat Password."
              {...register("passwordConfirm")}
            />
          </FormControl>
          <Button type="submit" mt="10">
            Sign Up
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default SignUp;

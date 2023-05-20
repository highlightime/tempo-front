import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import UserAuth from "../contracts/UserAuth.json";
import { UserAuthContractAddr } from "../contracts/ContractAddress";
import { userState } from "../components/states";
import { useRecoilState } from "recoil";

interface UserProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignIn = () => {
  const { register, handleSubmit } = useForm<UserProps>();
  const [email, setEmail] = useRecoilState(userState);

  const router = useRouter();

  const signIn = async ({ email, password }) => {
    try {
      const provider = getProvider();
      const signer = await getSigner(provider);

      const CONTRACT_ADDRESS = UserAuthContractAddr();
      const CONTRACT_ABI = UserAuth.abi;

      const emailBytes = ethers.utils.formatBytes32String(email);
      const passwordBytes = ethers.utils.formatBytes32String(password);

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      const authenticateUserContract = await contract.authenticateUser(
        emailBytes,
        passwordBytes
      );

      if (authenticateUserContract) {
        setEmail(email);
        router.push("/");
      } else {
        alert("Invalid Email or password");
      }
    } catch (error) {
      alert("login failed...");
    }
  };

  const onSubmit = async (data: UserProps) => {
    await signIn({ ...data });
  };

  const getProvider = () => {
    return new ethers.providers.Web3Provider(window.ethereum);
  };

  const getSigner = async (provider: ethers.providers.Web3Provider) => {
    await provider.send("eth_requestAccounts", []);

    return provider.getSigner();
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
          <Button type="submit" mt="10">
            Sign In
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default SignIn;

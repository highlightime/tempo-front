import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ethers } from "ethers";
import { useRouter } from "next/router";

interface UserProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignIn = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<UserProps>();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>();

  const [walletAddress, setWalletAddress] = useState<string>();
  const [currentBalance, setCurrentBalance] = useState<number>();
  const [chainId, setChainId] = useState<number>();

  const onSubmit = async (data: UserProps) => {
    const result = await axios("/api/connect", {
      method: "post",
      data: { ...data, walletAddress },
    });
  };

  const connectWallet = useCallback(async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        alert("Please Install Metamask");
        router.push(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
        );
      }

      const _provider = await getProvider();
      const _signer = await getSigner(_provider);
      await getWalletData(_signer);
    } catch (error) {
      console.log("error!");
    }
  }, []);

  const getProvider = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);

    setProvider(provider);

    return provider;
  };

  const getSigner = async (provider: ethers.providers.Web3Provider) => {
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    setSigner(signer);

    return signer;
  };

  const getWalletData = async (signer: ethers.providers.JsonRpcSigner) => {
    const result = await Promise.all([
      signer.getAddress(),
      signer.getBalance(),
      signer.getChainId(),
    ]);

    setWalletAddress(result[0]);
    setCurrentBalance(Number(result[1]));
    setChainId(result[2]);
  };

  return (
    <Box w="100%">
      <Flex
        flexDir="column"
        h="90vh"
        alignItems="center"
        justifyContent="center"
      >
        {walletAddress ? (
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
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )}
      </Flex>
    </Box>
  );
};

export default SignIn;

import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import UserAuth from "../contracts/UserAuth.json";
import { UserAuthContractAddr } from "../contracts/ContractAddress";
import { userState, walletState } from "../components/states";
import { useRecoilState, useRecoilValue } from "recoil";

interface UserProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignIn = () => {
  const router = useRouter();

  const [walletAddress, setWalletAddress] = useRecoilState(walletState);
  const email = useRecoilValue(userState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>();

  const [currentBalance, setCurrentBalance] = useState<number>();
  const [chainId, setChainId] = useState<number>();

  const CONTRACT_ADDRESS = UserAuthContractAddr();
  const CONTRACT_ABI = UserAuth.abi;

  useEffect(() => {
    if (email) router.push("/");
  }, []);

  const onSubmit = async (data: UserProps) => {
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    const emailBytes = ethers.utils.formatBytes32String(data.email);
    const passwordBytes = ethers.utils.formatBytes32String(data.password);

    try {
      const registerUserContract = await contract.registerUser(
        emailBytes,
        passwordBytes
      );

      alert("Sign Up Success!");
      router.push("/signIn");
    } catch (e) {
      alert("Sign Up Failed... Try Again");
    }
  };

  const checkIsRegistered = async (
    signer: ethers.providers.JsonRpcSigner,
    walletAddress: string
  ): Promise<boolean> => {
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    const isRegisteredContract = await contract.isRegistered(walletAddress);

    return isRegisteredContract;
  };

  const connectWallet = useCallback(async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        alert("Please Install Metamask");
        router.push(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
        );
      }

      const _provider = getProvider();
      const _signer = await getSigner(_provider);
      getWalletData(_signer)
        .then((walletAddress) => {
          return checkIsRegistered(_signer, walletAddress);
        })
        .then((result) => {
          if (result) {
            router.push("/signIn");
          }
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getProvider = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

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

    return result[0];
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
                {...register("password", {
                  pattern: {
                    value:
                      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                    message:
                      "Please enter at least one letter each for English, special, and number.",
                  },
                  minLength: {
                    value: 8,
                    message: "Password is at least 8 digits long.",
                  },
                  maxLength: {
                    value: 15,
                    message: "The password can be up to 15 digits.",
                  },
                })}
              />
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
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

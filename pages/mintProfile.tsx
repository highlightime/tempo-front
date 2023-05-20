import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SignUpFormProps } from "../types/SignUpType";
import { NFTStorage } from "nft.storage";
import { MintContractAddr } from "../contracts/ContractAddress";
import contract from "../contracts/MintNFT.json";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = MintContractAddr();
const CONTRACT_ABI = contract.abi;

const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpFormProps>();

  const genderOptions: String[] = [
    "Male",
    "Female",
    "Intersex",
    "Trans",
    "Non-Conforming",
    "Personal",
    "Eunuch",
  ];

  const areaOptions: String[] = [
    "Seoul",
    "Daegu",
    "Daejeon",
    "Busan",
    "Gwangju",
    "Ulsan",
    "Incheon",
    "Etc...",
  ];

  const onSubmit = async (data: SignUpFormProps) => {
    handleImg(data);
  };

  const handleImg = async (data: SignUpFormProps) => {
    const img = data.profileImage[0] as File;
    const nft = {
      image: img, // use image Blob as `image` field
      name: "Test Name",
      description: "Test Desc",
      properties: {
        authors: data.nickname,
      },
    };

    const client = new NFTStorage({
      token: process.env.NFT_STORAGE_API_KEY || "",
    });
    //console.log(process.env.NFT_STORAGE_API_KEY)
    const metadata = await client.store(nft);

    // NFT data stored
    console.log("Metadata URI: ", metadata.url);

    checkWalletIsConnected(metadata.url);
  };

  const checkWalletIsConnected = async (metadataUrl) => {
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

      // mint image we made
      mintNftHandler(metadataUrl, account);
    } else {
      console.log("No Authrized Account.");
    }
  };

  async function mintNftHandler(metadataUrl, currentAccount) {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //console.log(CONTRACT_ADDRESS,currentAccount);

        const nftContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          signer
        );

        let nftTxn = await nftContract.mintProfile(currentAccount, metadataUrl);
        // wait transaction mined
        await nftTxn.wait();
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
        flexDir="column"
        h="90vh"
        alignItems="center"
        justifyContent="center"
      >
        <form
          onSubmit={handleSubmit(async (data) => onSubmit(data))}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FormControl w="50vw" isRequired>
            <FormLabel>Profile Image</FormLabel>
            <Input
              type="file"
              variant="unstyled"
              {...register("profileImage")}
            />
            <FormHelperText>Only jpg, png</FormHelperText>
          </FormControl>
          <FormControl w="50vw" mt="5" isRequired>
            <FormLabel>Nickname</FormLabel>
            <Input
              type="text"
              {...register("nickname")}
              placeholder="Input Nickname."
            />
          </FormControl>
          <FormControl w="50vw" mt="5" isRequired>
            <FormLabel>Birth</FormLabel>
            <Input type="date" {...register("birth")} />
          </FormControl>
          <FormControl w="50vw" mt="5" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Select Gender" {...register("gender")}>
              {genderOptions.map((gender) => (
                <option value={`${gender}`} key={`${gender}`}>
                  {gender}
                </option>
              ))}
            </Select>
          </FormControl>
          {/* <FormControl w="50vw" mt="5">
            <FormLabel>Area</FormLabel>
            <Select placeholder="Select Area" {...register("area")}>
              {areaOptions.map((area) => (
                <option value={`${area}`} key={`${area}`}>
                  {area}
                </option>
              ))}
            </Select>
          </FormControl> */}
          <FormControl w="50vw" mt="5">
            <FormLabel>Inspection Result</FormLabel>
            <Input
              type="file"
              variant="unstyled"
              {...register("inspectionResult")}
            />
          </FormControl>
          <Button type="submit" mt="8">
            Mint!
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default SignUp;

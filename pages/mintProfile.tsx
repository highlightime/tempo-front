import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SignUpFormProps } from "../types/SignUpType";
import axios from "axios";
import { useRouter } from "next/router";
import { NFTStorage } from "nft.storage";
import contract from "../contracts/MintNFT.json";
import { ContractAddress } from "../contracts/ContractAddress";
import Web3 from 'web3'
import * as ethUtil from 'ethereumjs-util'

// const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;
const CONTRACT_ADDRESS = ContractAddress();
const CONTRACT_ABI = contract.abi;

const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpFormProps>();
  const router = useRouter();

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
    const formData = new FormData();

    formData.append("file", data.profileImage);
    formData.append("text", data.firstName);
    formData.append("text", data.lastName);
    formData.append("text", data.birth);
    formData.append("text", data.gender);
    formData.append("text", data.area);
    // if (data.inspectionResult) formData.append("file2", data.inspectionResult);

    const result = await axios(`/api/signUp`, {
      method: "POST",
      data: formData,
    });

    router.push("/mintProgress")

    handleImg(data)
  };

  const handleImg = async (data: SignUpFormProps) => {
    const img = data.profileImage[0] as File;
    const nft = {
      image: img, // use image Blob as `image` field
      name: "Test Name",
      description: "Test Desc",
      properties: {
        category: data.firstName,
        authors: data.lastName,
      },
    };

    const client = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY || "" });
    //console.log(process.env.NFT_STORAGE_API_KEY)
    const metadata = await client.store(nft);

    // NFT data stored
    console.log("Metadata URI: ", metadata.url);

    mintProfileHandler(metadata.url, process.env.MY_WALLET_EVM_ADDRESS || "");
  }

  async function mintProfileHandler(metadataUrl: string, account: string) {
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider(process.env.EVM_CHAIN_RPC_URL || ""))
      const counterContract = new web3.eth.Contract(CONTRACT_ABI, process.env.GASLESS_COUNTER_RECIPIENT_CONTRACT_ADDRESS)
      const callData = counterContract.methods.increment().encodeABI()

      const domain = {
        name: process.env.DOMAIN_NAME,
        version: process.env.DOMAIN_VERSION,
        chainId: ethUtil.bnToHex(await web3.eth.getChainId()),
        verifyingContract: process.env.TRUSTED_FORWARDER_CONTRACT_ADDRESS,
        salt:null
      };

      const types = {
        EIP712Domain: [
            {name: 'name',type: 'string',},
            {name: 'version',type: 'string',},
            {name: 'chainId',type: 'uint256'},
            {name: 'verifyingContract',type: 'address',},
        ],
        Message: [
            { name: 'from', type: 'address' },
            { name: 'to', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'gas', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'data', type: 'bytes' },
            { name: 'validUntilTime', type: 'uint256' },
            { name: 'typeSuffixDatadatadatada', type: 'bytes32'},
        ]
      };

      const estimateGas = '4000000';
      const primaryType = 'Message';

      const message = {
        data: callData,
        from: process.env.MY_WALLET_EVM_ADDRESS,
        gas: ethUtil.bnToHex(Number(estimateGas)),
        nonce: ethUtil.bnToHex(Number(await forwarderContract.methods.getNonce(process.env.MY_WALLET_EVM_ADDRESS).call())),
        to: process.env.GASLESS_COUNTER_RECIPIENT_CONTRACT_ADDRESS,
        validUntilTime: String('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
        value: String('0x0'),
      };

      const dataToSign =  {
        domain,
        types,
        primaryType,
        message: {
            ...message,
            typeSuffixDatadatadatada: Buffer.from(process.env.TYPE_SUFFIX_DATA, 'utf8'),
        },
      };

      const sig = ethSigUtil.signTypedData(
        {
            privateKey: Buffer.from(FROM_ADDRESS_PK, 'hex'),
            data: dataToSign,
            version: ethSigUtil.SignTypedDataVersion.V4,
        }
      );

      // optional, to double check the signature
      const ecRecover = ethSigUtil.recoverTypedSignature(
        {
            data: dataToSign,
            signature: sig,
            version: ethSigUtil.SignTypedDataVersion.V4,
        }
      );
  }

  return (
    <Box w="100%">
      <Flex
        flexDir="column"
        h="90vh"
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit(async (data) => onSubmit(data))}>
          <FormControl w="50vw" /*isRequired*/>
            <FormLabel>Profile Image</FormLabel>
            <Input
              type="file"
              variant="unstyled"
              {...register("profileImage")}
            />
            <FormHelperText>Only jpg, png</FormHelperText>
          </FormControl>
          <FormControl w="50vw" mt="5" /*isRequired*/>
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <InputLeftAddon children="First Name" />
              <Input type="text" {...register("firstName")} />
              <Box mx="2" />
              <InputLeftAddon children="Last Name" />
              <Input type="text" {...register("lastName")} />
            </InputGroup>
          </FormControl>
          <FormControl w="50vw" mt="5" /*isRequired*/>
            <FormLabel>Birth</FormLabel>
            <Input type="date" {...register("birth")} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl w="50vw" mt="5" /*isRequired*/>
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Select Gender" {...register("gender")}>
              {genderOptions.map((gender) => (
                <option value={`${gender}`} key={`${gender}`}>
                  {gender}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl w="50vw" mt="5" /*isRequired*/>
            <FormLabel>Area</FormLabel>
            <Select placeholder="Select Area" {...register("area")}>
              {areaOptions.map((area) => (
                <option value={`${area}`} key={`${area}`}>
                  {area}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl w="50vw" mt="5">
            <FormLabel>Inspection Result</FormLabel>
            <Input
              type="file"
              variant="unstyled"
              {...register("inspectionResult")}
            />
          </FormControl>
          <Button type="submit">Sign Up</Button>
        </form>
      </Flex>
    </Box>
  );
};

export default SignUp;

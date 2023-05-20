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

// const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;

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
    console.log(process.env.NFT_STORAGE_API_KEY)
    const metadata = await client.store(nft);

    // NFT data stored
    console.log("Metadata URI: ", metadata.url);
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

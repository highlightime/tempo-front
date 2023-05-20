import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface UserProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<UserProps>();

  const onSubmit = async (data: UserProps) => {
    console.log(data);
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

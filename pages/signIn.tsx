import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { auth } from "../lib/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

interface UserProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignIn = () => {
  const { register, handleSubmit } = useForm<UserProps>();

  const router = useRouter();

  const onSubmit = async (data: UserProps) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      router.push("/");
    } catch (error) {}
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

import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import QRCode from "react-qr-code";
import { useForm } from "react-hook-form";
import { decrypt, encrypt } from "../lib/Crypto";

interface QrInputProps {
  sender: string;
  receiver: string;
}

const GenQr = () => {
  const { register, handleSubmit } = useForm<QrInputProps>();
  const [qrValue, setQrValue] = useState("");

  const generateQr = (data: QrInputProps) => {
    const encrypted = encrypt(JSON.stringify(data));

    const decrypted = decrypt(encrypted);

    console.log("encrypted : ", encrypted);
    console.log("decrypted : ", decrypted);

    setQrValue(encrypt(JSON.stringify(data)));
  };

  return (
    <Box>
      <Flex
        height="90vh"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Box mb="4">{qrValue && <QRCode value={qrValue} />}</Box>
        <form onSubmit={handleSubmit((data) => generateQr(data))}>
          <FormControl>
            <FormLabel>Sender</FormLabel>
            <Input type="text" {...register("sender")} />
          </FormControl>
          <FormControl>
            <FormLabel>Receiver</FormLabel>
            <Input type="text" {...register("receiver")} />
          </FormControl>
          <Button type="submit" mt="4">
            Generate QR
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default GenQr;

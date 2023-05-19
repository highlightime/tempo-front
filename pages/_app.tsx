import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Web3ConnectionContextProvider } from "../context/web3Connection";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Web3ConnectionContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </Web3ConnectionContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;

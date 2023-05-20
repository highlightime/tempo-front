import { useWeb3ConnectionContext } from "../context/web3Connection";
// import styled from 'styled-components';
import { NoCoreWalletError } from "@avalabs/web3-react-core-connector";
import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import CoreNotFoundError from "../components/CoreNotFoundError";

const SignIn = () => {
  const { connector, useIsActive, useAccount } = useWeb3ConnectionContext();
  const isActive = useIsActive();
  const activeAccount = useAccount();
  const [activationError, setActivationError] = useState<Error>();

  if (activationError instanceof NoCoreWalletError) {
    return (
      <Flex justifyContent="center" alignItems="center" height="90vh">
        <CoreNotFoundError />
      </Flex>
    );
  }

  if (!isActive) {
    return (
      <Flex justifyContent="center" alignItems="center" height="90vh">
        <Button
          onClick={() =>
            connector.activate().catch((e) => setActivationError(e))
          }
        >
          <Text>Connect with Core</Text>
        </Button>
      </Flex>
    );
  }

  return (
    <div>
      <strong>Connected:</strong>
      <br />
      {activeAccount}
    </div>
  );
};

export default SignIn;

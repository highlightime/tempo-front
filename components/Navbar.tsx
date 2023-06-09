import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavItem } from "../types/NavItem";
import { useRouter } from "next/router";
import Link from "next/link";
import { userState, walletState } from "./states";
import { useRecoilState } from "recoil";

const navItems: NavItem[] = [
  { name: "Tempo", to: "/", requireLogin: false },
  { name: "Connect Wallet", to: "/connectWallet", requireLogin: false },
  { name: "Mint Profile", to: "/mintProfile", requireLogin: true },
  { name: "Find", to: "/find", requireLogin: true },
  { name: "appointment", to: "/appointment", requireLogin: true },
  { name: "approve", to: "/approveAppointment", requireLogin: true },
  { name: "view appointment", to: "/viewAppointment", requireLogin: true },
  { name: "QR", to: "/genQr", requireLogin: true },
];

const NavLink = (item: NavItem) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={item.to}>{item.name}</Link>
  </Box>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  const [email, setEmail] = useRecoilState(userState);
  const [walletAddress, setWalletAddress] = useRecoilState(walletState);

  const signOut = () => {
    setEmail("");
    setWalletAddress("");
    router.push("/");
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            {navItems
              .filter((item) => {
                if (email) return item.requireLogin;
                else return !item.requireLogin;
              })
              .map((item) => (
                <NavLink key={item.name} {...item} />
              ))}
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {email && (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{email}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={signOut}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;

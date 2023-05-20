import { atom } from "recoil";
import { UserInfo } from "../types/UserInfo";

export const walletState = atom({
  key: "walletState",
  default: "",
});

export const userState = atom({
  key: "userState",
  default: "",
});

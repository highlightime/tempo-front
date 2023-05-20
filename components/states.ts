import { atom } from "recoil";
import { v4 } from "uuid";

export const walletState = atom({
  key: `walletState/${v4()}`,
  default: "",
});

export const userState = atom({
  key: `userState/${v4()}`,
  default: "",
});

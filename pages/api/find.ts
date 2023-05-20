import { NextApiRequest, NextApiResponse } from "next";
import Handler from "../../lib/handler";
import axios from "axios";
import { UserInfo } from "../../types/UserInfo";

const FindHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await axios.get("https://picsum.photos/300/400/?random");

  const userInfo: UserInfo = {
    nickname: "Welchs",
    age: 25,
    gender: "male",
    isHealthy: true,
    oneLine: "I like to drink Welch's. Would you like to drink with me?",
  };

  res.status(200).json({ imageSrc: result.request.path, userInfo });
};

export default Handler("GET", FindHandler);

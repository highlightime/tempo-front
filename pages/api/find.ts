import { NextApiRequest, NextApiResponse } from "next";
import Handler from "../../lib/handler";
import axios from "axios";
import { UserInfo } from "../../types/UserInfo";

const FindHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await axios.get("https://picsum.photos/300/400/?random");

  const userInfo: UserInfo = {
    nickname: "Welchs",
    birth: "1997-04-18",
    gender: "male",
    isHealthy: true,
  };

  res
    .status(200)
    .json({
      profileImage: `https://fastly.picsum.photos/${result.request.path}`,
      ...userInfo,
    });
};

export default Handler("GET", FindHandler);

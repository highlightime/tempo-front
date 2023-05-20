import { NextApiRequest, NextApiResponse } from "next";
import Handler from "../../lib/handler";

const ConnectWalletHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(200).send("hi");
};

export default Handler("POST", ConnectWalletHandler);

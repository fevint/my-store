import { retrievData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await retrievData("users");
    console.log(users);
    const data = users.map((user: any) => {
      delete user.password;
      return user;
    });
    res
      .status(200)
      .json({ status: true, message: "Success", statusCode: 200, data });
  }
}

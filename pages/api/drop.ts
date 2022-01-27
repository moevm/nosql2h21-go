import { connection } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    result: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    await connection.db.dropDatabase();
    res.status(200).json({ result: "yolo"});
}

import dbConnect from "db/dbConnect";
import { PointModel } from "db/scheme";
import type { NextApiRequest, NextApiResponse } from "next";
import { Point } from "types";

type Data = {
    success: boolean,
    payload?: Point[]
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        await dbConnect();
        const payload = await PointModel.find();
        res.status(200).json({ success: true, payload: payload });
    } catch (error) {
        res.status(200).json({ success: false });
    }
}

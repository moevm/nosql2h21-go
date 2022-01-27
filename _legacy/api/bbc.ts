import { PointModel } from "core/mongo/scheme";
import type { NextApiRequest, NextApiResponse } from "next";
import { Point } from "core/types";

type Data = {
    success: boolean,
    payload?: Point[]
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        const payload = await PointModel.find();
        res.status(200).json({ success: true, payload: payload });
    } catch (error) {
        res.status(200).json({ success: false });
    }
}

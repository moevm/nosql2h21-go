import { PointModel } from "core/mongo/scheme";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    success: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        await PointModel.create({
            x: Math.random(),
            y: Math.random(),
        });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(200).json({ success: false });
    }
}

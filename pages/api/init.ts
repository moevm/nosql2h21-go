import { MatchModel, PlayerModel } from "core/mongo/scheme";
import { Match, Player, TeamType, Turn } from "core/types";
import type { NextApiRequest, NextApiResponse } from "next";
const sgf = require("smartgame");
const fs = require("fs");

type Data = {
    result: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
   
}

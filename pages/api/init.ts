import { MatchModel, PlayerModel } from "core/mongo/scheme";
import { Match, Player, TeamType, Turn } from "core/types";
import type { NextApiRequest, NextApiResponse } from "next";
const sgf = require("smartgame");
const fs = require("fs");

type Data = {
    result: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const fileObjs = fs.readdirSync("dataset/", { withFileTypes: true });
    const promises = fileObjs.map(async (file: any) => {
        const path = "dataset/" + file.name;
        const example = fs.readFileSync(path, { encoding: "utf8" }); // string (.sgf)
        // TODO broken encoding
        const collection = sgf.parse(example); // js object
        const collectionSGF = sgf.generate(collection); // string (.sgf)

        const matchData = collection.gameTrees[0].nodes;
        const metaData = matchData[0];
        const turnsData = matchData.slice(1);

        
        
    });

    await Promise.all(promises);

    res.status(200).json({ result: "ok" });
}

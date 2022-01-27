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

        const whitePlayer = {
            name: metaData.PW.includes(" ") ? metaData.PW.split(" ")[0] : metaData.PW,
            lastName: metaData.PW.includes(" ") ? metaData.PW.split(" ")[1] : "",
            rank: metaData.WR,
        };
        const whitePlayerRef =
            (await PlayerModel.findOne({ name: whitePlayer.name, lastName: whitePlayer.lastName })) ||
            (await PlayerModel.create(whitePlayer));

        const blackPlayer = {
            name: metaData.PB.includes(" ") ? metaData.PB.split(" ")[0] : metaData.PB,
            lastName: metaData.PB.includes(" ") ? metaData.PB.split(" ")[1] : "",
            rank: metaData.BR,
        };
        const blackPlayerRef =
            (await PlayerModel.findOne({ name: blackPlayer.name, lastName: blackPlayer.lastName })) ||
            (await PlayerModel.create(blackPlayer));
        const turns: Turn[] = turnsData.map((turn: any) => {
            return {
                x: turn["B" in turn ? "B" : "W"][0].charCodeAt(0) - "a".charCodeAt(0),
                y: turn["B" in turn ? "B" : "W"][1].charCodeAt(0) - "a".charCodeAt(0),
                team: "B" in turn ? TeamType.Black : TeamType.White,
            };
        });
        
    });

    await Promise.all(promises);

    res.status(200).json({ result: "ok" });
}

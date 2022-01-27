import { MatchModel } from "core/mongo/scheme"
import { ObjectId } from "mongoose";



export default async function handler(req, res) {
  const { id } = req.query;

  const data = await MatchModel.findOne({ _id: id })
    .populate("whitePlayer")
    .populate("blackPlayer")
    .catch(() => (null))


    if (data !== null)
    {
      const moves = data.turns.map((turn) => `${turn.team === 0 ? "W" : "B"}[${ String.fromCharCode(+turn.x +  + "a".charCodeAt(0))}${String.fromCharCode(+turn.y + "a".charCodeAt(0))}]`).join(";");

      const sgfData = `(;
         FF[3]
         EV[${data.event}]
         PB[${data.blackPlayer.name} ${data.blackPlayer.lastName}]
         BR[${data.blackPlayer.rank}]
         PW[${data.whitePlayer.name} ${data.whitePlayer.lastName}]
         WR[${data.whitePlayer.rank}]
         KM[${data.komi}]
         RE[${data.result}]
         DT[${data.date}]
         ;${moves})`
        
      res.status(200).json({ sgf: sgfData })
    }
    else
    {
      res.status(200).json({sgf: "" })
    }

}

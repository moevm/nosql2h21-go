import { MatchModel } from "core/mongo/scheme"



export default async function handler(req, res) {
  const data = await MatchModel.findOne()
    .populate("whitePlayer")
    .populate("blackPlayer")

  res.status(200).json({ data })
}

import { MatchModel } from "core/mongo/scheme"


const filterToMatch = (filters) => {

  if (!filters) return {};
  const matches = {};

  if (filters.event) {
    matches.event = new RegExp(`${filters.event}`, "i");
  }
  if (filters.whiteName) {
    matches["whitePlayer.name"] = new RegExp(`${filters.whiteName}`, "i");
  }
  if (filters.whiteLastName) {
    matches["whitePlayer.lastName"] = new RegExp(`${filters.whiteLastName}`, "i");
  }
  if (filters.blackName) {
    matches["blackPlayer.name"] = new RegExp(`${filters.blackName}`, "i");
  }
  if (filters.blackLastName) {
    matches["blackPlayer.lastName"] = new RegExp(`${filters.blackLastName}`, "i");
  }

  if (filters.komiMin !== "") {
    matches.komi = matches.komi || {}
    matches.komi.$gte = filters.komiMin
  }
  if (filters.komiMax !== "") {
    matches.komi = matches.komi || {}
    matches.komi.$lte = filters.komiMax
  }
  return matches
}

export default async function handler(req, res) {
  const matches = filterToMatch(req.body.filter)
  const data = await MatchModel.aggregate([
    { $lookup: { from: "players", localField: "whitePlayer", foreignField: "_id", as: "whitePlayer" } },
    { $set: { whitePlayer: { $first: "$whitePlayer" } } },
    { $lookup: { from: "players", localField: "blackPlayer", foreignField: "_id", as: "blackPlayer" } },
    { $set: { blackPlayer: { $first: "$blackPlayer" } } },

    { $match: matches },
  ])
  // const data = await MatchModel.find()
  //   .populate("whitePlayer")
  //   .populate("blackPlayer")

  res.status(200).json({ data })
}

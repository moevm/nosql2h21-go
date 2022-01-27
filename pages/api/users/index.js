import { PlayerModel } from "core/mongo/scheme"


const filterToMatch = (filters) => {

  if (!filters) return {};
  const matches = {};

  if (filters.name) {
    matches.name = new RegExp(`${filters.name}`, "i");
  }
  if (filters.lastName) {
    matches.lastName = new RegExp(`${filters.lastName}`, "i");
  }
  if (filters.rank) {
    matches.rank = new RegExp(`${filters.rank}`, "i");
  }

  return matches
}


export default async function handler(req, res) {
  const matches = filterToMatch(req.body.filter)
  const data = await PlayerModel.aggregate([{ $match: matches }])
  res.status(200).json({ data })
}

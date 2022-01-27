import { Schema, model, models, Model } from "mongoose";
import { TeamType, Player, Match, Turn } from "core/types";

const PlayerSchema = new Schema<Player>(
    {
        name: String,
        lastName: String,
        rank: String
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);
export const PlayerModel: Model<Player> = models.Player || model("Player", PlayerSchema);
const TurnSchema = new Schema<Turn>(
    {
        x : String,
        y : String,
        team: {
            type: Number,
            enum : [0, 1],
            default: 0
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: false,
    }
);

const MatchSchema = new Schema<Match>(
    {
        event: String,
        date: String,
        place: String,
        komi: String,
        whitePlayer: { type: Schema.Types.ObjectId, ref: "Player" },
        blackPlayer: { type: Schema.Types.ObjectId, ref: "Player" },
        result: String,
        turns: [TurnSchema]
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);
export const MatchModel: Model<Match> = models.Match || model("Match", MatchSchema);
import { Schema, model, models } from "mongoose";
import { TeamType, Point, GoBoardTurn } from "types";

const PointShema = new Schema<Point>(
    {
        x: Number,
        y: Number,
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);
delete models.PointModel;
export const PointModel = model<Point>("PointModel", PointShema);

const GoBoardTurnShema = new Schema<GoBoardTurn>(
    {
        sourcePoint: { type: Schema.Types.ObjectId, ref: "Point" },
        destinationPoint: { type: Schema.Types.ObjectId, ref: "Point" },
        team: {type: Number, enum: TeamType}
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);
delete models.GoBoardTurnModel;
export const GoBoardTurnModel = model<GoBoardTurn>("GoBoardTurnModel", GoBoardTurnShema);

export enum TeamType {
    White = 0,
    Black = 1
}

export type Point = {
    _id: string,
    x : number,
    y : number
}

export type GoBoardTurn = {
    _id: string,
    sourcePoint : Point,
    destinationPoint : Point,
    team : TeamType
}


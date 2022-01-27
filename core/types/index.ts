export type Player = {
    _id: string;
    name: string;
    lastName: string;
    rank: string;
};

export enum TeamType {
    White = 0,
    Black = 1
}

export type Turn = {
    x : string,
    y : string
    team: TeamType;
};

export type Match = {
    _id: string;
    event: string; // EV // TODO table with events
    date: string; // DT
    place: string; // PC
    komi: string; // KM
    whitePlayer: Player;
    blackPlayer: Player;
    result: string; // RE
    turns: Turn[];
};

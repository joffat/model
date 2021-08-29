import { Game } from "./Game";
import { Player } from "./Player";
export declare type MatchId = string;
export declare type Match = {
    matchID: MatchId;
    options: MatchOptions;
    players: Player[];
    games: Game[];
    messages: string[];
    state: "playing" | "finished" | "upcoming";
    winner: number;
    stats: MatchStats;
};
export declare type MatchStats = {
    gamesCompleted: number;
    gamesTied: number;
    wins: number[];
};
export interface IStats {
    winner?: number;
    total?: number;
    max?: number;
    avg?: number;
    min?: number;
    winPercentages?: string[];
    tiePercentage?: string;
}
export declare type MatchOptions = {
    maxGames: number;
    timeout: number;
    autoPlay: boolean;
};

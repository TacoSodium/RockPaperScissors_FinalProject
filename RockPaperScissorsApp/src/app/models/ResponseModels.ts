import { Round } from "./Round";

export interface RoundResponse {
    username: string;
    turnNo: number;
    playerChoice: string;
    cpuChoice: string;
    result: string;
}

export interface GameResponse {
    username: string;
    noTurns: number;
    dateStarted: Date;
    winTracking: number;
    rounds: Round[];
    result: string;
}
export class Score {
    Username: string;
    Ratio: number;
    Plays: number;

    constructor(username: string, ratio: number , plays: number) {
        this.Username = username;
        this.Ratio = ratio;
        this.Plays = plays;
    }
}
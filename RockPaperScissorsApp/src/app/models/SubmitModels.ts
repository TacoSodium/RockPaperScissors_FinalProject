export interface PlayRequest {
    username: string;
    roundChoice: number;
}

export interface PickRequest {
    username: string;
    playerChoice: string;
    turnNo: number;
}

export interface DisplayRequest {
    username: string;
}

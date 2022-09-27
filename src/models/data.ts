export interface Player {
    name: string;
    result: string;
}
export interface Games {
    game: string;
    date: string;
    result: string;
    players: Player[];
    ID: number;
}

export interface PlayerData {
    name: string;
    wins: number;
    losses: number;
    matches: number;
    ID: number;
}

export interface FormData {
    game: boolean;
    date: string;
    playerOne: string;
    playerTwo: string;
    playerThree: string;
    playerFour: string;
    teamOne: number;
    teamTwo: number;
}
export interface Player {
    name: string;
    result: string;
}
export interface Games {
    game: string;
    date: string;
    result: string;
    players: Player[];
    gameID: number;
}

export interface PlayerData {
    name: string;
    wins: number;
    losses: number;
    matches: number;
    playerID: number;
}
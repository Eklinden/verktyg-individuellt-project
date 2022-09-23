import { createContext, useContext, useState } from 'react';
import { Games, Player, PlayerData } from '../models/data';
export const GamesContext = createContext<any | null>(null);

const GamesContextProvider = (props:any) => {
    const [games, setgames] = useState<Games[]>([
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 0
        },
        {
            game: "double",
            date: "2022-07-25",
            result: "1-2",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Malin", result: "Lost" },
            ],
            gameID: 1
        },
        {
            game: "double",
            date: "2022-07-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 2
        },
        {
            game: "double",
            date: "2022-06-20",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 3
        },
        {
            game: "double",
            date: "2022-06-16",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Malin", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 4
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 5
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 6
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 7
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 8
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 9
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 10
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 11
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 12
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 13
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 14
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 15
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 16
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 17
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 18
        },
        {
            game: "double",
            date: "2022-06-25",
            result: "0-3",
            players: [
               { name: "Linus", result: "won" },
               { name: "Ida", result: "won" },
               { name: "Hans", result: "Lost" },
               { name: "Felicia", result: "Lost" },
            ],
            gameID: 19
        }
    ])

  return (
    <GamesContext.Provider value={{games, setgames}}>
        {props.children}
    </GamesContext.Provider>
  )
}

export default GamesContextProvider
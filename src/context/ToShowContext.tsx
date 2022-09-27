import { createContext, useContext, useState } from 'react';
import { Games, Player, PlayerData } from '../models/data';
import { GamesContext } from './GamesContext';

export const ToShowContext = createContext<any | null>(null);

const ToShowContextProvider = (props:any) => {
    const {games} = useContext(GamesContext)
    const [whatToShow, setwhatToShow] = useState<Games[] | PlayerData[]>([...games])

    function showAllMatches() {
        const allGames = [...games]
        setwhatToShow(allGames)
    }
    function showAllPlayers() {
        let allPlayers: Player[] = [];
        const allPlayerData: PlayerData[] = [];
        let playerObj: PlayerData = {
            name: "",
            wins: 0,
            losses: 0,
            matches: 0,
            ID: 0
        };
        let playerExists = false;

        games.filter((e) => {
            let matchPlayers = e.players
            matchPlayers.map(p => allPlayers.push(p))
        })
        allPlayers.map((e) => {
            if(allPlayerData.length < 1) {
                if(e.result === "Lost") {
                    playerObj = {
                        name: e.name,
                        wins: 0,
                        losses: 1,
                        matches: 1,
                        ID: 0
                    }
                    allPlayerData.push(playerObj);
                } else {
                    playerObj = {
                        name: e.name,
                        wins: 1,
                        losses: 0,
                        matches: 1,
                        ID: 0
                    }
                    allPlayerData.push(playerObj);
                }
            } else {
                allPlayerData.map((p) => {
                    if(p.name === e.name) {
                        playerExists = true;
                        if(e.result === "Lost") {
                            p.losses++
                            p.matches++
                        } else {
                            p.wins++
                            p.matches++
                        } 
                    }
                })
                if(!playerExists) {
                    if(e.result === "Lost") {
                        playerObj = {
                            name: e.name,
                            wins: 0,
                            losses: 1,
                            matches: 1,
                            ID: allPlayerData.length
                        }
                        allPlayerData.push(playerObj);
                    } else {
                        playerObj = {
                            name: e.name,
                            wins: 1,
                            losses: 0,
                            matches: 1,
                            ID: allPlayerData.length
                        }
                        allPlayerData.push(playerObj);
                    } 
                }
                playerExists = false;
            }
        })
        setwhatToShow(allPlayerData)
    }


  return (
    <ToShowContext.Provider value={{showAllMatches, showAllPlayers, whatToShow}}>
        {props.children}
    </ToShowContext.Provider>
  )
}

export default ToShowContextProvider
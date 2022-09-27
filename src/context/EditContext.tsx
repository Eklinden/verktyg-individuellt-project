import { createContext, useContext, useState } from 'react';
import { FormData, Games, Player, PlayerData } from '../models/data';
import { GamesContext } from './GamesContext';

export const EditContext = createContext<any | null>(null);

const EditContextProvider = (props:any) => {
    const {games} = useContext(GamesContext)

    function addGame(formData: FormData) {
        if (games) {

        }
    }

  return (
    <EditContext.Provider value={{addGame}}>
        {props.children}
    </EditContext.Provider>
  )
}

export default EditContextProvider
import { createContext, useState } from "react";
import { Games } from "../models/data";
export const GamesContext = createContext<any | null>(null);

const GamesContextProvider = (props: any) => {
  const [games, setgames] = useState<Games[]>([]);

  games.sort((a: Games, b: Games) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });

  return (
    <GamesContext.Provider value={{ games, setgames }}>
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;

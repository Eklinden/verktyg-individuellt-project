import { useContext, useEffect, useState } from 'react';
import GameList from '../../components/chart/GameList';
import { ToShowContext } from '../../context/ToShowContext';
import { Games, PlayerData } from '../../models/data';
import './Home.scss';

interface Props {
  games: Games;
  whatToSHow: Games[] | PlayerData[];
  selectValue: boolean;
}

const Home = () => {
  const {showAllMatches, showAllPlayers, whatToShow} = useContext(ToShowContext);
  const [selectValue, setselectValue] = useState<boolean>(true)


  function toggleGamesToShow() {
    setselectValue(!selectValue)
  }

  useEffect(() => {
    if(selectValue) {
      showAllMatches();
    }
    else if (!selectValue) {
      showAllPlayers();
    }
  }, [selectValue])

  return (
    <main className="home">
      <select className="home-select" onChange={(e) => toggleGamesToShow()}>
        <option value="games">Alla Matcher</option>
        <option value="players">Alla Spelare</option>
      </select>
      <table>
          <thead>
            {
              selectValue? (
              <tr>
                <th>Lag</th>
                <th>Resultat</th>
                <th>Datum</th>
              </tr>
              ):(
              <tr>
                <th>Namn</th>
                <th>Vinster</th>
                <th>Matcher</th>
              </tr>
              )
            }
          </thead>
          {
            whatToShow.map((toShow:Games | PlayerData) => {
              <GameList toShow={toShow} selectValue={selectValue} />
            })
          }
      </table>
    </main>
  )
}

export default Home
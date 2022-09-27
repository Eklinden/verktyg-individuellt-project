import { useContext, useEffect, useState } from 'react';
import GameList from '../../components/GameList/GameList';
import { ToShowContext } from '../../context/ToShowContext';
import { Games, PlayerData } from '../../models/data';
import './Home.scss';

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
  // console.log(whatToShow)
  return (
    <main className="home">
      <select className="home-select" onChange={(e) => toggleGamesToShow()}>
        <option value="games">Alla Matcher</option>
        <option value="players">Alla Spelare</option>
      </select>
      <article className="list">
        {
          selectValue? (
          <section className="list-head">
            <div>
              <p>Lag</p>
            </div>
            <p>Resultat</p>
            <p>Datum</p>
            <div></div>
          </section>
          ):(
          <section className="list-head">
            <div>
              <p>Namn</p>
            </div>
            <p>Vinster</p>
            <p>Matcher</p>
            <div></div>
          </section>
          )
        }
        {
          whatToShow.map((toShow:Games | PlayerData) => <GameList key={toShow.ID} toShow={toShow} selectValue={selectValue} />)
        }
      </article>
    </main>
  )
}

export default Home
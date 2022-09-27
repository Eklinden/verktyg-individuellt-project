import { useContext, useEffect, useState } from 'react';
import GameList from '../../components/GameList/GameList';
import { ToShowContext } from '../../context/ToShowContext';
import { gameModeWins, Games, PlayerData } from '../../models/data';
import './Home.scss';

const Home = () => {
  const {showAllMatches, showAllPlayers, whatToShow, selectValue, setselectValue, mostWins, showTieGames} = useContext(ToShowContext);
  const [singleWins, setsingleWins] = useState<string>("")
  const [doubleWins, setdoubleWins] = useState<string>("")
  function toggleGamesToShow(e:string) {
    if(e === "games"){
      setselectValue(true)
    } else if(e === "players"){
      setselectValue(false)
    } else if(e === "tie-games"){
      showTieGames()
      setselectValue(true)
    }
  }
  useEffect(() => {
      const mostDoubleWins = [...mostWins] 
      mostDoubleWins.sort((a: gameModeWins, b: gameModeWins ) => {
        if (a.doubleWins < b.doubleWins){
        return 1;
        }
        if (a.doubleWins < b.doubleWins){
        return -1;
        }
        return 0;
      })
      const mostSingleWins = [...mostWins] 
      console.log(mostSingleWins)
      mostSingleWins.sort((a: gameModeWins,b: gameModeWins ) => {
        if (a.singleWins < b.singleWins){
        return 1;
        }
        if (a.singleWins < b.singleWins){
        return -1;
        }
        return 0;
      })
      if (mostWins.length > 1) {
        setdoubleWins(mostDoubleWins[0].name)
        setsingleWins(mostSingleWins[0].name)
      }
  }, [mostWins])
  

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
      <select className="home-select" onChange={(e) => toggleGamesToShow(e.target.value)}>
        <option value="games">Alla Matcher</option>
        <option value="players">Alla Spelare</option>
        <option value="tie-games">Oavgjorda Matcher</option>
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
          <div>
            <h2>Mest Vinster i DubbelSpel: {singleWins}</h2>
            <h2>Mest Vinster i SingelSpel: {doubleWins}</h2>
            <section className="list-head">
              <div>
                <p>Namn</p>
              </div>
              <p>Vinster</p>
              <p>Matcher</p>
              <div></div>
            </section>
          </div>
          )
        }
        {
          whatToShow.map((toShow:Games | PlayerData) => <GameList key={toShow.ID} toShow={toShow} />)
        }
      </article>
    </main>
  )
}

export default Home
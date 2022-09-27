import { useContext } from "react";
import { EditContext } from "../../context/EditContext";
import cross from "../../images/cross.svg";
import { FormData } from "../../models/data";
import "./Form.scss";

interface Props {
    formData: FormData;
    gameMode: boolean;
    setgameMode: any;
    setformData: any;
}

const Form = ({formData, setformData, setgameMode, gameMode}: Props) => {
    const {addGame} = useContext(EditContext)

    function toggleGameMode() {
        setgameMode(!gameMode)
    }

    function formSubmit(event: any) {
        event.preventDefault();
        addGame(formData)
    }
    
    const changeForm = (event: any) => {
        setformData({ ...formData, [event.target.id]: event.target.value });
    }

  return (
    <form className="form" onSubmit={formSubmit}>
        <section className="team-section">
          <div>
            <h2>Namn på ALLA spelare:</h2>
            <aside className="singel-spel">
              <p>Singel Spel: </p>
              <input type="checkbox" onChange={toggleGameMode} />
            </aside>
          </div>
          <div className="team-input">
            <h3>lag 1</h3>
            <label htmlFor="playerOne">Player 1</label>
            <input type="text" id="playerOne" onChange={changeForm} value={formData.playerOne} required/>
            {
              gameMode? (
                <>
                  <label htmlFor="playerTwo">Player 2</label>
                  <input type="text" id="playerTwo" value={formData.playerTwo} onChange={changeForm}/>
                </>
              ):(
                <></>
              )
            }
          </div>
          <div className="team-input">
            <h3>lag 2</h3>
            {
              gameMode? (
                <>
                  <label htmlFor="playerThree">Player 3</label>
                  <input type="text" id="playerThree" onChange={changeForm} value={formData.playerThree} required/>
                  <label htmlFor="playerFour">Player 4</label>
                  <input type="text" id="playerFour" onChange={changeForm} value={formData.playerFour}/>
                </>
              ):(
                <>
                  <label htmlFor="playerThree">Player 2</label>
                  <input type="text" id="playerThree" onChange={changeForm} value={formData.playerThree} required/>
                </>
              )
            }
          </div>
        </section>
        <section className="result-section">
          <h2>Resultat:</h2>
          <div className="result-wrapper">
            <div>
              <label htmlFor="teamOne">Lag 1</label>
              <select id="teamOne" onChange={changeForm} value={formData.teamOne} required>
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <label htmlFor="teamTwo">Lag 2</label>
              <select id="teamTwo" onChange={changeForm} value={formData.teamTwo} required>
                <option value="1">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </section>
        <section className="date-section">
          <label htmlFor="date">Datum:</label>
          <input type="date" id="date" onChange={changeForm} value={formData.date} required/>
        </section>
        <input type="submit" className="btn-submit" value="Lägg Till"/>
      </form>
  )
}

export default Form
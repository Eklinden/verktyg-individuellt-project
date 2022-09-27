import { useState } from "react";
import Form from "../../components/form/Form";
import cross from "../../images/cross.svg";
import { FormData } from "../../models/data";
import "./AddScore.scss";

const AddScore = () => {
  const [gameMode, setgameMode] = useState<boolean>(true)
  const [formData, setformData] = useState<FormData>({
    game: true,
    date: "",
    playerOne: "",
    playerTwo: "",
    playerThree: "",
    playerFour: "",
    teamOne: 0,
    teamTwo: 0
  })

  return (
    <main className="addScore">
      <h1>Lägg till resultat</h1>
      <span className="return-btn">Gå tillbaka 
        <img src={cross} alt="" />
      </span>
      <Form formData={formData} setformData={setformData} setgameMode={setgameMode} gameMode={gameMode} />
    </main>
  )
}

export default AddScore
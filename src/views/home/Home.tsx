import { useEffect, useState } from 'react'
import Chart from '../../components/chart/Chart'
import './Home.scss'

const Home = () => {
  const [selectValue, setselectValue] = useState<string>("games")


  function toggleSelectValue(value: string) {
    console.log(value)
    setselectValue(value)
  }

  return (
    <main className="home">
      <select className="home-select" onChange={(e) => toggleSelectValue(e.target.value)}>
        <option value="games">Alla Matcher</option>
        <option value="players">Alla Spelare</option>
      </select>
      <Chart selectValue={selectValue} />
    </main>
  )
}

export default Home
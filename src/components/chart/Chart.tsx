import { useState } from 'react';
import './Chart.scss';


interface Props {
    selectValue: string;
}

const Chart = ({selectValue}: Props) => {
    const [first, setfirst] = useState(second)
    return (
        <div className="chart-wrapper">
            <section>
                
            </section>
        </div>
    )
}

export default Chart
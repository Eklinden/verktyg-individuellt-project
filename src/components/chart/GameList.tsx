import { useContext } from 'react';
import { Games, Player, PlayerData } from '../../models/data';
import './GameList.scss';

interface Props {
    toShow: Games | PlayerData;
    selectValue: boolean;
}

const Chart = ({toShow, selectValue}: Props) => {
    return (
        <tbody>
            {
                selectValue ? (
                    <tr>
                        <th>{
                            
                        }</th>
                        <th>{}</th>
                        <th>{}</th>
                        <th></th>
                    </tr>
                ) : (
                    <tr>

                    </tr>
                )
            }
        </tbody>
        // <tr className="chart-wrapper">
        // </tr>
    )
}

export default Chart
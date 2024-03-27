import CardsWrapper from "./CardsWrapper";
import { DDragon } from '@fightmegg/riot-api';
const ddragon = new DDragon();
const champsData = await ddragon.champion.all();
export default function Container(){
    return(
        <div>
            <CardsWrapper champsData={champsData}/>
        </div>
    )
}
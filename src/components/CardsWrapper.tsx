import { DDragon } from '@fightmegg/riot-api';
import ChampCard from './ChampCard';

const ddragon = new DDragon();
const champs = async () => await ddragon.champion.all();

export default function CardsWrapper(){
    return(
        <ul className="flex overflow-scroll">
            {Object.values(champs.data).map(champ => (
                <ChampCard name={champ.name}
                title={champ.title}
                image={champ.image}
                blurb={champ.blurb}/>
                
            ))}    
        </ul>
    )
}
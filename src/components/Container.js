import CardsWrapper from "./CardsWrapper";

export default function Container(){
    const ddragon = new DDragon();
    const fetchChamps = async () => {
        const champsData = await ddragon.champion.all();
        setChamps(champsData.data);
    };
    fetchChamps();
    console.log(champsData);
    return(
        <div>
            hola
        </div>
    )
}
export default function ChampCard({name, title, image, blurb}){
    return(
        <li class="h-96 w-52 rounded-md flip-card flex-shrink-0">
            <div class="flip-card-inner">
                <div 
                    className="rounded-md overflow-hidden h-full bg-cover bg-center flex items-end flip-card-front" 
                    style={{
                        backgroundImage: `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${image.full.replace('.png', '')}_0.jpg')`
                    }}
                >
                    <div class="w-full bg-gradient-to-t from-black to-white-0">
                        <h2>{name}</h2>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div class="rounded-md overflow-hidden flip-card-back bg-black">
                    <h2>{name}</h2>
                    <h3>{title}</h3>
                    <p>
                        {blurb}
                    </p>
                </div>
            </div>
        </li>   
    )
}
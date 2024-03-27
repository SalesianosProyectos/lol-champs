"use client"
import { useState, useEffect } from 'react';
import ChampCard from './ChampCard';

export default function CardsWrapper(champsData){
    const [filter, setFilter] = useState('');
    console.log(champsData.champsData.data);
    return(
        <div>
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter by name" />
            <ul class="flex overflow-scroll">
            {Object.values(champsData.champsData.data).filter(champ => champ.name && champ.name.toLowerCase().includes(filter.toLowerCase())).map(champ => (
                <ChampCard name={champ.name}
                title={champ.title}
                image={champ.image}
                blurb={champ.blurb}/>
            ))}  
            </ul>
        </div>
    )
}
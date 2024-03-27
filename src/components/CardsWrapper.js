"use client"
import { DDragon } from '@fightmegg/riot-api';
import { useState, useEffect } from 'react';
import ChampCard from './ChampCard';

export default function CardsWrapper(){

    return(
        <div>
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter by name" />
            <ul class="flex overflow-scroll">
                {Object.values(champs).filter(champ => champ.name.toLowerCase().includes(filter.toLowerCase())).map(champ => (
                    <ChampCard name={champ.name}
                    title={champ.title}
                    image={champ.image}
                    blurb={champ.blurb}/>
                ))}    
            </ul>
        </div>
    )
}
// File: pages/api/champions.js
import { DDragon } from '@fightmegg/riot-api';

export default async function handler(req, res) {
    const ddragon = new DDragon();
    const champsData = await ddragon.champion.all();
    res.status(200).json(champsData.data);
}
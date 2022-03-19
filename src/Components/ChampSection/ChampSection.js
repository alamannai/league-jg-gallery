import React, { useState, useEffect } from "react";
import ButtonChoice  from './ButtonChoice';
import ChampElement  from './ChampElement';


const API_URL = 'https://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json';

const ChampSection = () =>  {
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(response => response.json())
    .then(champs => setChamps(champs.data))
  }, [])

return (
    <div>
        <div className='p-3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 
                    lg:grid-cols-7 xl:grid-cols-7 gap-3'>
            <ButtonChoice name={'All'} />
            <ButtonChoice name={'Fighter'}/>
            <ButtonChoice name={'Assassin'}/>
            <ButtonChoice name={'Mage'}/>
            <ButtonChoice name={'Marksman'}/>
            <ButtonChoice name={'Support'}/>
            <ButtonChoice name={'Tank'}/>
        </div>
        <hr />

        <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-2 xl:grid-cols-3 gap-3">
        
        <ChampElement item={champs.Elise}/>
        <ChampElement item={champs.Graves}/>
        <ChampElement item={champs.Viego}/>
        <ChampElement item={champs.Shaco}/>
        <ChampElement item={champs.Nidalee}/>
        <ChampElement item={champs.Diana}/>
        </div>
    </div> 
    )};

export default ChampSection;
import React, { useState, useEffect } from "react";
import ButtonChoice  from './ButtonChoice';
import ChampElement  from './ChampElement';

const API_URL = 'http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json';

const ChampSection = () =>  {
  
  const [champs, setChamps] = useState([]);

  const [fighter, setFighter] = useState(false);
  const fighterToParent = (childdata) => {
    setFighter(childdata);
  }

  const [assassin, setAssassin] = useState(false);
  const assassinToParent = (childdata) => {
    setAssassin(childdata);
  }

  const [mage, setMage] = useState(false);
  const mageToParent = (childdata) => {
    setMage(childdata);
  }

  const [marksman, setMarksman] = useState(false);
  const marksmanToParent = (childdata) => {
    setMarksman(childdata);
  }

  const [support, setSupport] = useState(false);
  const supportToParent = (childdata) => {
    setSupport(childdata);
  }

  const [tank, setTank] = useState(false);
  const tankToParent = (childdata) => {
    setTank(childdata);
  }


 const searchChamps = async () => {
   const response = await fetch(API_URL);
   const data = await response.json();
   setChamps({ champions: Object.values(data.data) });
  };

 useEffect(() => {
  searchChamps();
}, []);

  //useEffect(() => {
    //fetch(API_URL).then(response => response.json())
    //.then(data => setChamps({ champions: Object.values(data.data) }))
  //}, [])

return (
    <>
        <div className='p-3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 
                    lg:grid-cols-6 xl:grid-cols-6 gap-3'>
            <ButtonChoice key={'Fighter'} name={'Fighter'} 
            dis={ tank === 'Tank'  || assassin === 'Assassin'  || support === 'Support'  || 
            marksman === 'Marksman'|| mage ==='Mage' ? "opacity-50 cursor-not-allowed" : ""} 
             dataToParent={fighterToParent} />

            <ButtonChoice key={'Assassin'} name={'Assassin'} 
            dis={ tank === 'Tank'  || fighter === 'Fighter'  || support === 'Support'  || 
            marksman === 'Marksman'|| mage === 'Mage' ? "opacity-50 cursor-not-allowed" : ""} 
              dataToParent={assassinToParent} />

            <ButtonChoice key={'Mage'} name={'Mage'} 
            dis={ tank === 'Tank'  || assassin === 'Assassin'  || support === 'Support'  || 
            marksman === 'Marksman'|| fighter === 'Fighter' ? "opacity-50 cursor-not-allowed" : "" } 
            dataToParent={mageToParent} />

            <ButtonChoice key={'Marksman'} name={'Marksman'} 
            dis={ tank === 'Tank'  || assassin === 'Assassin'  || support === 'Support'  || 
            mage === 'Mage'|| fighter === 'Fighter' ? "opacity-50 cursor-not-allowed" : "" } 
             dataToParent={marksmanToParent} />

            <ButtonChoice key={'Support'} name={'Support'} 
            dis={ tank === 'Tank'  || assassin === 'Assassin'  || mage === 'Mage'  || 
            marksman === 'Marksman'|| fighter === 'Fighter' ? "opacity-50 cursor-not-allowed" : "" } 
             dataToParent={supportToParent} />

            <ButtonChoice key={'Tank'} name={'Tank'} 
            dis={ mage === 'Mage'  || assassin === 'Assassin'  || support === 'Support'  || 
            marksman === 'Marksman'|| fighter === 'Fighter' ? "opacity-50 cursor-not-allowed" : "" } 
             dataToParent={tankToParent} />
        </div>

        <hr />


        {champs.champions?.length > 0 ? (
        <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
        lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {champs.champions.map(champ => 
            fighter === false && assassin === false &&
            mage === false && marksman === false &&
            support === false && tank === false? 
            <ChampElement key={champ.id} item={champ}/> :
            champ.tags.map(tag => tag === fighter ?  
            <ChampElement key={champ.id} item={champ}/> : tag === assassin?
            <ChampElement key={champ.id} item={champ}/> : tag === mage?
            <ChampElement key={champ.id} item={champ}/> : tag === marksman?
            <ChampElement key={champ.id} item={champ}/> : tag === support?
            <ChampElement key={champ.id} item={champ}/> : tag === tank?
            <ChampElement key={champ.id} item={champ}/> : null
            )
           
          
            )}
        </div>
      ) : (
          <h2>No Champion found</h2>
      )}

    </> 
    )};

export default ChampSection;
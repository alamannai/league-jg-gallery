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

  useEffect(() => {
    fetch(API_URL).then(response => response.json())
    .then(data => setChamps({ champions: Object.values(data.data) }))
  }, [])


 // const searchChamps = async () => {
   // const response = await fetch(API_URL);
   // const data = await response.json();
   // setChamps({ champions: Object.values(data.data) });
   // console.log(champs);
 // };

return (
    <>
        <div className='p-3 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 
                    lg:grid-cols-6 xl:grid-cols-6 gap-3'>
            <ButtonChoice key={'Fighter'} name={'Fighter'} dataToParent={fighterToParent} />
            <ButtonChoice key={'Assassin'} name={'Assassin'}  dataToParent={assassinToParent} />
            <ButtonChoice key={'Mage'} name={'Mage'} fighterToParent={fighterToParent} />
            <ButtonChoice key={'Marksman'} name={'Marksman'} fighterToParent={fighterToParent} />
            <ButtonChoice key={'Support'} name={'Support'} fighterToParent={fighterToParent} />
            <ButtonChoice key={'Tank'} name={'Tank'} fighterToParent={fighterToParent} />
        </div>

        <hr />


        {champs.champions?.length > 0 ? (
        <div className="p-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
        lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {champs.champions.map(champ => 
            fighter === false && assassin === false? 
            <ChampElement key={champ.id} item={champ}/> :
            champ.tags.map(tag => tag === fighter ?  
            <ChampElement key={champ.id} item={champ}/> : tag === assassin?
            <ChampElement key={champ.id} item={champ}/> : console.log('gg')
            )
           
          
            )}
        </div>
      ) : (
          <h2>No Champion found</h2>
      )}

    </> 
    )};

export default ChampSection;
import React from 'react';

const ChampElement = (props) =>  {
    const ch = 'https://ddragon.leagueoflegends.com/cdn/11.21.1/img/champion/' + props.item.image.full
    return (
        <button className="w-lg min-w-lg  p-3 grid grid-cols-3 gap-2 rounded-lg hover:text-sky-200 hover:bg-sky-600 transition-all duration-250 ease-in-out
        overflow-hidden shadow-lg bg-sky-200">
            <img className="w-16 h-16 mt-4 ml-4 rounded-full " src={ch} alt={props.item.id} />
            <div className="col-start-2">
                <div className="font-bold text-xl  pt-3">{props.item.id}</div>
                <div className="font-bold text-sm pt-3">
                    {props.item.title.charAt(0).toUpperCase() + props.item.title.slice(1) }
                </div>
            </div>
            <div className="px-6 pt-4 pb-2 col-start-3 ">
                {props.item.tags.map((e) =><span className="inline-block bg-yellow-300 
                text-black-500 text-black rounded-full px-3 py-1 text-sm 
                font-semibold mr-2 mb-2">{e}</span> )}
            </div>

      </button>

)};

export default ChampElement;
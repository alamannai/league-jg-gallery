import React from 'react';

const ChampElement = (props) =>  {
    const ch = 'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' + props.item.image.full
    return (
        <>
            <button className="w-lg min-w-lg  p-3 grid grid-cols-3 gap-2 rounded-lg 
            hover:text-black hover:bg-sky-600 transition-all duration-250 ease-in-out
            overflow-hidden shadow-lg bg-gray-200">
                <div className="w-16 h-16 mt-4 ml-4 rounded-full">
                    <img className="rounded-full " src={ch} alt={props.item.id} />
                </div>

               
                <div className="col-start-2">
                    <div className="font-bold text-xl text-black pt-3">{props.item.name}</div>
                    <div className=" text-sm text-black pt-3">
                        {props.item.title.charAt(0).toUpperCase() + props.item.title.slice(1) }
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 col-start-3 ">
                    {props.item.tags.map((e) =><span key={e} className="inline-block bg-yellow-300 
                    text-black-500 text-black rounded-full px-3 py-1 text-sm 
                    font-semibold mr-2 mb-2">{e}</span> )}
                </div>

        </button>
      </>
)};

export default ChampElement;
import React ,{ useState }  from 'react';

const ButtonChoice = (props) =>  {
    const act = "bg-yellow-300 text-black rounded-lg"
    const  noact = "grow h-8 w-30 bg-sky-600 text-white rounded-full"
    const [def, setDef] = useState([noact]);

  
    return(
            <button className={def} onClick={() => ( def == noact ? setDef(act) : setDef(noact) )  }>
                {props.name}
            </button>
    )};

export default ButtonChoice;
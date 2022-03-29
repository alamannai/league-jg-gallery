import React ,{ useState }  from 'react';

const ButtonChoice = ({dataToParent ,name , dis }) =>  {
    const act = "bg-yellow-300 text-primary font-semibold text-center rounded-lg "
    const  noact = "grow h-8 w-30 bg-sky-400 text-primary font-semibold text-center rounded-full " 
    const [def, setDef] = useState([noact]);

    const data = name



    function hundleClicked(){
        def === noact ? setDef(act): setDef(noact) ;
        def === noact ? dataToParent(data) : dataToParent(false)  ;
        
    }

  
    return(
        <>
            <button className={def+ dis} onClick={hundleClicked}>
                {name}
            </button>
            </>
    )};

export default ButtonChoice;
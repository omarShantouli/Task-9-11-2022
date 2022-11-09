
// TASK
import React, {useState, useEffect} from "react";



const ControlledComponent = () => {

    const[motivate, setMotivate] = useState(true);

    function onBtnClicked(){
        setMotivate(!motivate);
    }

    
    const [name, setname] = useState("omar")

    function onTextChanged(e){
        setname(e.target.value)
    }

   return (
    <div>
        <div>
            <label htmlFor="#name">Your Name</label>
            <input value={name} onChange={onTextChanged} id="name" type="text" />
        </div>
        <div>
            {
                motivate ?
                <div>
                    Hi {name} How Are You?
                </div>
                :
                <div>
                    Hey {name} Keep Going
                </div>
            }
        </div>
        <button onClick={onBtnClicked}>Motivate</button>
    </div>
   )
}

export default ControlledComponent;


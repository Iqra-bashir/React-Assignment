import { useState } from "react";
function Count({ setState, state }) {

    const [button, setButton] = useState(false);
    
    function handleCount( ) {
        setState(state + 10);
        
    }
    function handleColor() {
        setButton(!button)
    }
    return (
      <>
        <div className="square">
            <div className={button ? "active circle" : "not-active circle"}>
                <h1> {state}</h1>
                <button  onClick={handleCount} >Click to increase count</button>
            </div>    
          
      </div>
            <button className={button ? "active" : "not-active"} onClick={handleColor}> ColorChange</button>  
            </>
  )
}

export default Count
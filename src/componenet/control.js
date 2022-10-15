import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import{
    faPlay,
    faPause,
    faForward,
    faBackward, 
} from "@fortawesome/free-solid-svg-icons";



function control (props){
    return(
        <div className="control">
            <button className="controlskip" onClick={()=>props.skipsong(true)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="playbutton" onClick={()=>props.setIsplaying(!props.isplaying)}>
                <FontAwesomeIcon icon= {props.isplaying ? faPause: faPlay} />

            </button>
            <button className="controlnext" onClick={()=>props.skipsong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>

        </div>
    );
}

export default control;
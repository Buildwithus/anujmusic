import React from "react";
function details(props){
    return(<>
       
       <div className="detailsimg">
        <img src={props.song.img_src}/>
       </div>
       <p className="p1">
       {props.song.title}
       </p>
       <p className="p2">
       {props.song.artist}
       </p>
       </>

    );

}
export default details;
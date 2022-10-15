import { useEffect, useRef, useState } from 'react';
import Control from './control';
import Details from './details';

import '../App.css'



function Player (props){
    const audioel=useRef(null);
    const [isplaying,setIsplaying]=useState(false);
   
    useEffect(()=>{
        if(isplaying){
            audioel.current.play()
        }else{
            audioel.current.pause()
            
        }

    });

    const skipsong=(forwards=true)=>{
        if(forwards){
            props.setCurentsongindex(()=>{
                let temp=props.curentsongindex;
                temp++;
                if(temp > props.songs.length -1){
                    temp=0;
                }
                return temp;
            });
        }else{
            props.setCurentsongindex(()=>{
                let temp=props.curentsongindex;
                temp--;
                if(temp < 0){
                    temp=props.songs.length-1;
                }
                return temp;
            });
        }
    };

 
    return(
     <div className='whole'>
        <h1 className='playing'>Playing Now</h1>
   
     <Details
     
     song={props.songs[props.curentsongindex]}
     />
       <Control
     isplaying={isplaying}
     setIsplaying={setIsplaying}
     skipsong={skipsong}
     />
     <audio 
    
     src={props.songs[props.curentsongindex].src}
     ref={audioel}
     controls></audio>
     <p className='p1last'><h1 className='p11'>Next up:{ " "}</h1> <span>{props.songs[props.nextsongindex].title}{" "}
      by {" "}
       {props.songs[props.nextsongindex].artist}</span></p>

       
     </div>
        
    )
}

export default Player;
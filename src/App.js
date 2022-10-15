import { useEffect, useState } from 'react';

import Player from './componenet/player';





function App() {
  const [songs]=useState([
    {
      title:"Bijlee Bijlee ",
      artist:"Harrdy Sandhu",
      img_src:"./images/img8.jpg",
      src:"./audios/song8.mp3" 
    },
   
    {
      title:"Tu Laung Main Elaachi",
      artist:"Tulsi Kumar",
      img_src:"./images/img3.jpg",
      src:"./audios/song3.mp3" 
    },
    
    {
      title:"Coka Cola Song",
      artist:"Neha Kakkar",
      img_src:"./images/img4.jpg",
      src:"./audios/song4.mp3" 
    },
    {
      title:"Vilayati Sharab ",
      artist:"Darshan Ravel",
      img_src:"./images/img5.jpg",
      src:"./audios/song5.mp3" 
    },
    {
      title:"Nit Khair Manga ",
      artist:"Rahat Fateh ",
      img_src:"./images/img6.jpg",
      src:"./audios/song6.mp3" 
    },
    {
      title:"Rang De Ranjheya ",
      artist:"Jyotica Tangri ",
      img_src:"./images/img7.jpg",
      src:"./audios/song7.mp3" 
    },
   
    {
      title:"Badami Rang Munda Young ",
      artist:" Avneet Kaur ",
      img_src:"./images/img9.jpg",
      src:"./audios/song9.mp3" 
    },
    {
      title:"Kehndi Hundi Si Chan Tak",
      artist:" AP Dhillon ",
      img_src:"./images/img10.jpg",
      src:"./audios/song10.mp3" 
    },
    
    {
      title:"Ankhein Ye Teri Kuch Keh",
      artist:"Raj Barman",
      img_src:"./images/img11.jpg",
      src:"./audios/song11.mp3"
    },
  

  ]);

  const [curentsongindex,setCurentsongindex]=useState(0);
  const [nextsongindex,setNextsongindex]=useState(0);
  useEffect(()=>{
    setNextsongindex(()=>{
      if(curentsongindex + 1>songs.length - 1){
        return 0
      }
      else{
        return curentsongindex + 1;
      }

    });

  },[curentsongindex,songs.length]);

  return (
    <div className='app'>
    <Player 
    curentsongindex={curentsongindex}
    setCurentsongindex={setCurentsongindex}
    nextsongindex={nextsongindex}
    songs={songs}
    />

    </div>
    
    
  );
}

export default App;

import React from "react";
import "./Videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Videofooter({name, description, music}) {
  return (
    <div className="Videofooter">
      <div className="Videofooter__text">
        <h5>@i{ name }</h5>
        <p>{ description }</p>
        <div className="Videofooter__music">
          <MusicNoteIcon className="Videofooter__icon"/>
          <div className="Videofootermusic__text">
          <p>{ music }</p>
          </div>
          
        </div>
      </div>
      <img 
      className="Videofooter__record"
      alt="Imagem deum vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      
      />



    </div>
  );
}

export default Videofooter;

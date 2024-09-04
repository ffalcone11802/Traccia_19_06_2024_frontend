import { useState } from "react"

export default function AudioPlayer({item}) {
  const [level, setLevel] = useState(100)

  const handleSlider = (e) => {
    setLevel(e.target.value)
  }

  return (
    <div id="audio-player-container">
        <div id="current-song">
          {item && 
            <>
              <img className="album" src={item.artwork} />
              <div className="song-info">
                  <h1>{item.item.title}</h1>
                  <h2>{item.subtitle}</h2>
              </div>
            </>
          }
        </div>
        <div id="audio-player">
            <audio src="song.mp3" preload="metadata" loop></audio>
            <div id="controllers-container">
                <button className="player-button"><i className="fa-solid fa-shuffle"></i></button>
                <button className="player-button"><i className="fa-solid fa-backward"></i></button>
                <button className="player-button"><i className="fa fa-circle-play fa-3x"></i></button>
                <button className="player-button"><i className="fa-solid fa-forward"></i></button>
                <button className="player-button"><i className="fa-solid fa-repeat"></i></button>
            </div>
            <div id="track-slider-container">
                <span id="current-time" className="time">0:00</span>
                <input type="range" id="seek-slider" max="100" value="0" />
                <span id="duration" className="time">{item ? item.item.length : 0}:00</span>
            </div>
        </div>
        <div id="volume-controller">
            <button id="mute-icon" className="player-button"><i className="fa fa-solid fa-volume-high"></i></button>
            <input type="range" id="volume-slider" onChange={handleSlider} max="100" value={level}/>
            <output id="volume-output">{level}</output>
        </div>
    </div>
  )
}
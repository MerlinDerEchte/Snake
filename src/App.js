import './App.scss';
import React, {useState, useEffect} from 'react';
import Settings from './Settings/Settings';
import Game from './Game/Game';
import diff from '../node_modules/jest-diff';
function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [difficulty, setDifficulty] = useState(1);
  const [mirroring, setMirroring] = useState(false)

  console.log(mirroring)
  return (
    <div id="mainContainer" > 
      
        {
        showSettings 
        ? 
        <Settings 
            difficulty={difficulty}
            setDifficulty = {setDifficulty}
            mirroring={mirroring}
            setMirroring = {setMirroring}
            setShowSettings = {setShowSettings}/>
        :
        <Game 
          difficulty = {difficulty}
          mirroring = {mirroring}
          setShowSettings = {setShowSettings}
        
        />
          }
    
    </div>
   
  );
}

export default App;

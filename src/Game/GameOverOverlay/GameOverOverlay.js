import React from 'react';


function GameOverOverlay(props){


    return(
        <div id="gameOverOverlay">
            <div id="gameOverOverlayCenter">
                <span id="gameOverText">GameOver</span>
                <span id="scoreText">Your score is: {props.score}</span>
                <button id="settingsButton" onClick = {props.setShowSettings}>Settings</button>
                <button id="newGameButton" onClick={props.resetGame}>newGame</button>
            </div>
        </div>
    )
}

export default GameOverOverlay;
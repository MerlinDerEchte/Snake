import React, {useState, useEffect} from 'react';
import GameOverOverlay from './GameOverOverlay/GameOverOverlay';
import Snake from './Snake/Snake';
import TwitterIcon from '@material-ui/icons/Twitter';
import Element from './Snake/Element';
import Directions from './Snake/Directions';
import { Dir } from 'fs';



const speedLevels = [150,100,50];
function Game(props){   
    
    const [gameOver, setGameOver] = useState(false);
    const [round,setRound] = useState(0);
    const [score, setScore] = useState(0);
    const [snake, setSnake] = useState(new Snake(Directions.RIGHT, [new Element(5,5), new Element(4,5) ], false ))
    const [newElement, setNewElement] = useState(new Element(2,2));
    const [addElements, setAddElements] = useState([]);
    const fieldWidth = 20;
    const fieldHeight = 20;
    const fields =[...Array(fieldWidth * fieldHeight)];

    console.log(props.mirroring)


    function checkAndAddTailElement(){
        if(addElements.length > 0 && addElements[0].x === snake.getTail().x && addElements[0].y === snake.getTail().y)
            {
                
                snake.addTailElement(addElements[0]);
               
                addElements.shift();
                if(addElements.length === 0){
                    snake.setEats(false);
                }
            }
    }
    function checkAndChangeSnakeDirection(){
        if(newDirection){
            snake.setDirection(newDirection);
        }
    }

    function checkAndEatElement(){
        if(snake.getHeadPosition().x === newElement.x &&
        snake.getHeadPosition().y === newElement.y)
        {
            snake.setEats(true);
                
            addElements.push(newElement)
            createNewElement(fieldHeight * fieldWidth);
               
            
            setScore(score +1);
        }
    }
    function checkMoveOrSetGameOver(){
        
        if(isInSnakeElements(snake.getHeadPosition().x + (snake.getHeadPosition().y * fieldHeight ), false))
                 {
                    console.log("hit snake")
                    setGameOver(true);
        }else if(   
                (snake.elements[0].x === 0 && snake.direction === Directions.LEFT) || 
                (snake.elements[0].x ===  fieldWidth -1 && snake.direction === Directions.RIGHT) || 
                (snake.elements[0].y === 0 && snake.direction === Directions.TOP) ||
                (snake.elements[0].y === fieldHeight-1 && snake.direction === Directions.BOTTOM))
                {
                if(props.mirroring){
                    snake.mirrorMove(fieldWidth, fieldHeight);
                }else{
                    setGameOver(true);
                }
        }else{             
            snake.move();
        }
    }

    function createNewElement(size){
        let i = 0;
        let possibleFieldIndizes = [];
        
        for(i; i < size; i++){
            if(isInSnakeElements(i,true) === false){
                possibleFieldIndizes.push(i);
            }
        }

        let newFieldIndex = possibleFieldIndizes[Math.floor(Math.random()*possibleFieldIndizes.length)];
        let newElement = new Element(newFieldIndex % fieldWidth, Math.floor(newFieldIndex / fieldHeight) )
        setNewElement(newElement);
       
    }
    function debounce(fn, delay) {  
        var timer = null;  
        return function() {  
          var self = this,  
              args = arguments;  
          clearTimeout(timer);  
          timer = setTimeout(function() {  
            fn.apply(self, args);  
          }, delay);  
        };  
      }

    function isInNewElement(index){
        let indexInElements = false;
        if(newElement.x === index % fieldWidth && newElement.y === Math.floor(index/fieldHeight))
        {
            return true;
        }else 
        {
            return false;
        }
    }
    function isInSnakeElements( index, headIncluded){

        if(headIncluded)
        {
            let indexInElements = false;
            snake.elements.forEach((el)=> {
          
            if(el.x === (index % fieldWidth) && el.y === Math.floor(index/fieldHeight)){
               indexInElements = true;
            }
        })
        return indexInElements; 
        }
        else
        {
            let indexInElements = false;
            snake.elements.forEach((el,i)=> {
          
                if(i > 0 && el.x === (index % fieldWidth) && el.y === Math.floor(index/fieldHeight))
                {
                indexInElements = true;
                }
            })
            return indexInElements; 
        }       
    }


    function isSnakeHead(index){
        const head = snake.elements[0];
        if(index % fieldWidth === head.x && Math.floor(index/fieldHeight) === head.y){
            return true;
        }else{
            return false;
        }
    }
    function onKeyPressed(e){
        if(!newDirection)
        
        {
            switch(e.key)
            {
                default: return;
                case "ArrowUp": newDirection = Directions.TOP;break;
                case "ArrowDown": newDirection = Directions.BOTTOM; break;
                case "ArrowRight": newDirection = Directions.RIGHT; break;
                case "ArrowLeft" : newDirection = Directions.LEFT; break;
            }
        }
    }
    function resetGame(){
        setScore(0);
        setGameOver(false);
        createNewElement(fieldWidth* fieldHeight);
        setSnake(new Snake(Directions.RIGHT, [new Element(5,5), new Element(4,5) ], false ));
        setAddElements([]);
        setRound(0);
    }
   
    var newDirection = null;
          

    document.addEventListener("keydown", (e)=> debounce(onKeyPressed(e),10));  

    
    useEffect(()=> {
        
        if(!gameOver)
        {   
           
            var myTimeout = setTimeout(()=> {
                
                checkAndChangeSnakeDirection()
                checkAndAddTailElement();
                checkAndEatElement();
                checkMoveOrSetGameOver();
                setRound(round+1);
            },speedLevels[props.difficulty-1])
           
           
        }
        return () => {
            clearTimeout(myTimeout)

             document.removeEventListener("keydown", (e)=> onKeyPressed(e)) 
        }
       
    }, [round])



    
    return(<>
            <div className="centerContainer">
                <div className="scoreContainer">
                Score: {score}
                </div>
                <div className="gameContainer">
                    {gameOver 
                    ?
                    <GameOverOverlay 
                        setShowSettings = {props.setShowSettings}
                        score={score}
                        resetGame = {resetGame}/>
                    :
                    ''
                    }
                    {fields.map((fields,index)=>{
                        if(isSnakeHead(index)){
                            return(<div key={index} id="snakeHead"></div>)
                        }else if(isInSnakeElements(index,false)){

                            if(snake.getLength() <10){
                                return(<div key={index} className="shortSnakeField"></div>)
                            }else if(snake.getLength() < 30){
                                return(<div key={index} className="middleSnakeField">o</div>)
                            }else{
                                return(<div key={index} className="longSnakeField">X</div>)
                            }
                           
                        }else if(isInNewElement(index)){

                            return(<div key={index} className="elementField">
                                        <TwitterIcon />
                                    </div>)

                        }else{

                            return(<div key={index} className="field"></div>)
                            
                        }
                    })}
                </div>
            </div>
    </>)
}


export default Game;
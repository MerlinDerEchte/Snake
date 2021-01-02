import Directions from './Directions';
import Element from './Element';
import getReverseDirection from './getReverseDirections';

class Snake {
    constructor(direction, elements,eats ){
        this.direction = direction;
        this.elements = elements;
        this.eats = eats;
        

    }
    addTailElement(el){
        this.elements = [...this.elements, el]
    }

    eatElement(element){
        this.elements = [element, ...this.elements];
    }
    getElements(){
        this.elements.map(el => el);
    }

    getTail(){
        return this.elements[this.elements.length-1];
    }

    getHeadPosition(){
        return this.elements[0];
    }

    getLength(){
        return this.elements.length;
    }

    move(){
        switch(this.direction){
            default: return;
            case Directions.RIGHT: {
                
                const newX = this.elements[0].x +1;
                const newY = this.elements[0].y;
                const newElement = new Element(newX, newY);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
            }
            case Directions.LEFT:
                {
                const newElement = new Element(this.elements[0].x -1, this.elements[0].y);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
                }
            case Directions.TOP:
                {
                const newElement = new Element(this.elements[0].x, this.elements[0].y -1);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
                }
            case Directions.BOTTOM:
                {
                const newElement = new Element(this.elements[0].x, this.elements[0].y +1);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
                }
        }
    }

    mirrorMove(width, height){
        switch(this.direction){

            default: return;
            case Directions.LEFT: 
                {
                const newX = width -1;
                const newY = this.elements[0].y;
                const newElement = new Element(newX, newY);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
                }
            case Directions.RIGHT:
                {
                const newX = 0;
                const newY = this.elements[0].y;
                const newElement = new Element(newX, newY);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
                } 
            case Directions.TOP :
                {
                const newX = this.elements[0].x;
                const newY = height-1;
                const newElement = new Element(newX,newY);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
                }
            case Directions.BOTTOM: 
                {
                const newX = this.elements[0].x;
                const newY = 0;
                const newElement = new Element(newX,newY);
                this.elements.pop();
                this.elements.unshift(newElement);
                break;
                }

        }

    }
    setEats(boolValue){
        this.eats = boolValue;
    }
    setDirection(newDirection){
        if(newDirection === getReverseDirection(this.direction)){
            return;
        }else{
            this.direction = newDirection;
        }
    }
}

export default Snake;
import Directions from './Directions';

const getReverseDirection= (direction) =>{

    switch(direction){

        case Directions.BOTTOM: return Directions.TOP;
        case Directions.TOP: return Directions.BOTTOM;
        case Directions.LEFT: return Directions.RIGHT;
        case Directions.RIGHT: return Directions.LEFT;
        default : return null;
    }
}


export default getReverseDirection;
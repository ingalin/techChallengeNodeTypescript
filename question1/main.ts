export function isValidWalk(walk: string[]) {

    // Function which can count the same strings in an array
    const countDirections = function (direction) {
        return (
            walk.filter(function (index) {
                return index === (direction);
            }).length
        );
    }
            
    // Run the function for each direction, count how many times walk was in each direction
    const wDirection = countDirections("w");
    const eDirection = countDirections("e");
    const sDirection = countDirections("s");
    const nDirection = countDirections("n");
    
    // If walk was less than 10 min, and south = north and west = east, return true:
    if (walk.length <= 10 && wDirection === eDirection && sDirection === nDirection){
        return true; 
    } 
    else 
        return false;
}
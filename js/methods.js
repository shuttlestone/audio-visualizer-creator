//MIT License - Copyright (c) 2020 Picorims

//USEFUL METHODS USED IN THE PROGRAM. THIS SHOULD ONLY CONTAIN GENERAL NON SPECIFIC METHODS, MANIPULATING ALL SORT OF DATA.


//Random values
//=============

function RandomInt(min, max) {//give a random integer between min and max.
    if (!IsANumber(min)) throw `RandomInt: ${min} is not a valid min value.`;
    if (!IsANumber(max)) throw `RandomInt: ${max} is not a valid max value.`;

    return Math.floor(Math.random() * (max - min + 1) ) + min;
}






//Arrays
//======

function MappedArray(array, new_length, min, max) {//function that remaps an array, within the given min and max, to a new length.

    //CHECK VARIABLES
    if ( !IsAnArray(array) )                    throw `MappedArray: ${array} is not an array!`;
    if ( !IsANumber(new_length) )               throw `MappedArray: ${new_length} is not a number!`;
    if ( !IsUndefined(min) && !IsANumber(min) ) throw `MappedArray: ${min} is not a number!`; //min and max are optional and undefined shouldn't
    if ( !IsUndefined(min) && !IsANumber(max) ) throw `MappedArray: ${max} is not a number!`; //trigger any error.
    for (var i=0; i< array.length; i++) {
        if ( IsUndefined(array[i]) ) throw `MappedArray: the value ${i} of the array is undefined or null!`
    }
    
    //DEFINITIONS
    if ( IsUndefined(min) || IsUndefined(max) ) {//if min or max not specified.
        min = 0;
        max = array.length-1;
    }

    var new_array = [];
    var step = (   (max-min+1) / new_length   ) * new_length / (new_length-1);//range length / new length.
    //Proportionality to one less equal part (* new_length / (new_length-1)) is here so the step goes up to the last
    //value of the array when dividing the range into equal parts. (as the final increment would otherwise stop 1 equal part before the last value).
    
    var increment = min;//we start a the minimum of the range
    
    //We want to take at equal distance a "new_length" number of values in the old array, from min to max.
    //In order to know how much we need to increment, we create a step.
    //If the range length is inferior than the new length, step < 1 since we have to get some values multiple times
    //to match the new length.
    //If the range length is superior than the new length, step > 1 since we have to skip some values to match the new length.

    


    //ARRAY CREATION
    for (var i = 0; i<new_length; i++) {
        if (increment === array.length) {     new_array.push(  array[ parseInt(increment-1) ]  )     }
            else                        {     new_array.push(  array[ parseInt(increment) ]    )     }
        increment += step;
    }

    //RETURN THE NEW ARRAY TO THE CALL
    return new_array;
}


function InInterval(value, interval, type) {//returns if the given value is in the interval [min,max] included or excluded;
    switch (type) {
        case "included":
            return (   (value >= interval[0]) && (value <= interval[1])   );
        case "excluded":
            return (   (value > interval[0])  && (value < interval[1])   );
        default:
            throw `InInterval: ${type} is not a valid interval type! (included or excluded)`
    }
}











//Variable type tests
//===================

function IsANumber(value) {//returns true if the given variable is a number.
    return (typeof value === "number");
}

function IsAnInt(value) {//returns true if the given variable is an integer. (IsANumber() included in it)
    return( (typeof value === "number") && Number.isInteger(value) );
}

function IsAString(value) {//returns true if the given variable is a string.
    return (typeof value === "string");
}

function IsABoolean(value) {//returns true if the given variable is a boolean. (true or false)
    return ( (value === true) || (value === false) )
}

function IsAnArray(value) {//returns true if the given variable is an array.
    return (  (typeof value === "object")    &&    ( (value instanceof Array) || (value instanceof Uint8Array) )  );
}

function IsAnObject(value) {//returns true if the given variable is an Object of any kind.
    return ( (typeof value === 'object') && (value !== null) )
}

function IsUndefined(value) {//returns true if the given variable is either undefined or null.
    return (  (value===undefined) || (value===null)  );
}

function IsAnElement(value) {//returns true if the given variable is an HTML DOM element.
    return value instanceof HTMLElement;
}
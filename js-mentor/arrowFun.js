// ex. 1. simple function 
let spect = () =>
{
    ring = 444444 ;
    calender = 55555555555 ;
    total = ring + calender ;
    console.log ("simple function in fat arrow function = " , total)
}
spect ();
//----------------------------------------------------------------
// ex. 2 argument function 
let magic = (left, right) =>
{
    console.log ("argument function in fat arrow function = " , +(left % right))
}
magic (222222222,22)
//---------------------------------------------------------------------
// ex. 3 return function 
let east = (west, north ) =>
{
    return west * north
}
console.log ("return function in fat arrow function = " , +east(333333,786))
east ()
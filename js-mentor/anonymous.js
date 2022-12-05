// ex. 1 simple function
let x = function ()
{
    let y = 888888 ;
    let z = 888 ;
    Total = y / z ;
    console.log ("simple function in anonymous function  = ",  Total)
}
x () ;
//-------------------------------------------------------------------------
// ex.2 . argument function
let m = function (n,o)
{
    n = 777777 ;
    o = 777 ;
    console.log ("argument function in anonymous function  = ",  +(n*o))
}
m ()
//----------------------------------------------------------
// ex . 3 return function
let pc = function (freez, lapi)
{
    return freez - lapi
}
console.log ("return function in anonymous function = " , +pc (500000000,652369845))
pc ()
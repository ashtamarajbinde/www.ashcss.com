// ex.1 simple function
let a = function fun ()
{
    let b = 50000 ;
    let c = 600000 ;
    let d = b * c ;
    console.log (" simple function in by expression = " , c)
}
a ()                       // ans = 30000000000
//-------------------------------------------------------------
// ex.2 . argument function
let e = function ash (f,g)
{

    console.log ("argument function in by expression = " , f % g)
}
e (10000,555)               // ans = 10
//-----------------------------------------------------------------
// ex.3 return function
let i = function ashu (j,k)
{
    return  j / k ;
}
console.log ('return function in by expression = ' ,+i(999,99))
i () ;                                   // ans = 10.090909090909092

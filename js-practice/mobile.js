
 document.getElementById("demo").innerHTML="hello dolly.";
 //--------------------------------------------------------------------------
 let x,y,z;
 x=5;
 y=6;
 z= x + y
 document.getElementById("demo").innerHTML="the value of z is " + z + ".";

 //---------------------------------------------------------------------------
 document.getElementById("demo").innerHTML=10.50;

 //----------------------------------------------------------------------
 "john doe"
 'john doe'
 document.getElementById("demo").innerHTML="john doe" ;
 //------------------------------------------------------------------------
 var m=10;
 {
    var m=2
 }
 document.getElementById("demo").innerHTML=m;
 //------------------------------------------------------------------------
 let w = 10 ;
 {
    let w = 10;
 }
document.getElementById("demo").innerHTML=w;
//------------------------------------------------------------
var q = 3 ;
var  q = 2;
document.getElementById("demo").innerHTML=q;
//----------------------------------------------------------------
let g= 2;
{
    let g=3;
}
{
    let g=4;
}
document.getElementById("demo").innerHTML=g;
//--------------------------------------------------------------------
carName = "volvo";
document.getElementById("demo").innerHTML=carName;
//--------------------------------------------------------------
try {
    const pi= 3.14425683332556;
    pi=3.14;
}
catch (err){
    document.getElementById("demo").innerHTML=err;

}
//----------------------------------------------------------------
const cars = ["saab", "volvo", "bmw"];
cars [0] = "toyoto";
cars.push("audi");
document.getElementById("demo").innerHTML=cars;

//---------------------------------------------------------------------
// constant object
 const car = {
    type:"fiat",
    model:"500",
    color:"red",
 }
 car.color = "red";
 car.owner = "johison"
 document.getElementById("demo").innerHTML="car owner is " + car.owner;
//-------------------------------------------------------------------------------
// block scope
const n=10;
{

    const n=2;
}
document.getElementById("demo").innerHTML="n is " + n;
//-----------------------------------------------------------------
var c=2;
var c=3;
c=4;
document.getElementById("demo").innerHTML=" c is " + c;
//--------------------------------------------------------------------
var v=2;
const v=2;
{
    let v=2;
    const v=2;
}                  // const variable in the same scope is not d.
{
    const v=2;
    const v=2;
}
document.getElementById("demo").innerHTML="v is " + v;
//-------------------------------------------------------------------
























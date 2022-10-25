//global variable declare outside the function
//global variable axcess by the all functions




let course='javascript';
//local or function
function sanket(){
console.log( 'sanket::'+course)
}

function pramod(){
    console.log('pramod::'+course)
}
sanket();
pramod();
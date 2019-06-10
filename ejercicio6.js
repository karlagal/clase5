let shot1
let shot2
let shot3
function apuesta (shot1, shot2, shot3) { 

if (shot1 === shot2 || shot2 === shot3 || shot1 === shot3) {
    console.log ("ganaste")
}
   
  else {   
  console.log ("perdiste") }
}

 apuesta (3,2,3)
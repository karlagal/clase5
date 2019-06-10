console.log ("Que me toca estudiar hoy?")
function horario (dia) {


    if (dia === "lunes" || dia === "miercoles") {
        console.log ("historia") 
    }else {
        if (dia === "martes") {

            console.log ("natacion")
        } else {
            if (dia === "jueves") {
                console.log ("esgrima")
            } else {
                console.log ("descanso")
            }   
                
            }
        }
    }
    
horario ("domingo")
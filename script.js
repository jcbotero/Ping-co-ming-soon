
show = document.getElementById("mail");


function fix() {
    if ( show == true) {
       document.getElementById("text").style.display = "none";
    } else {
        document.getElementById("text").style.display = "block";
        }
  }  // esta funcion me despliega en otro div el mensaje de error si la forma se llena mal //




function red()  {
    document.getElementById("b1").style.backgroundColor= "hsl(223, 70%, 59%)";
    document.getElementById("b1").style.color= "white";

}; /* para que me muestre el style cuando tengo el mouse sobre */

function out()  {
    document.getElementById("b1").style= " ";
} // asi que hago para cuando el mouse sale quede con el style css
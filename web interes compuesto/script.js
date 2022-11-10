function calculo(){

let montoInicial=document.getElementById("montoI").value;
let tasaInteres=document.getElementById("Interv").value;
let periodoTiempo=document.getElementById("interes").value;

    let montoFinal= montoInicial*(Math.pow((1+(tasaInteres/100)),periodoTiempo))
    document.getElementById("valueInput").innerHTML = montoFinal.toFixed(2); 
    console.log(montoFinal)
}
 
  
  const getValueInput = () =>{
    let inputValue = document.getElementById("domTextElement").value; 
    document.getElementById("valueInput").innerHTML = inputValue; 
  }
  

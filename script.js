//

var mi_variable;
mi_variable = 5;

let otro_var = 45;
otro_var="55";

console.log (typeof otro_var)

console.log(5+mi_variable);

const CONSTANTE= "10"

 console.log();


 let calificacion =1 ;
 let resultado;
  if ( calificacion > 2) {
    resultado= "aprobaste"
  }
  else {
    resultado= "reprobaste"
  }

 console.log("el resultado de tu evaluacion es ",resultado);

let n1 = 1 ;
let n2 = 2 ;
let n3 = 3 ;

console.log(Math.max(n1, n2, n3,));

if (n1>n2 && n1 > n2){
  console.log( "el mayor es" , n1);

}

 if (n1>n2 && n1 > n3){ 
   console.log( "el mayor es" , n2);
 }


  if (n1>n2 && n1 > n2){ 
    console.log( "el mayor es" , n3);
  }


  console.log(1);
  console.log(2);
  console.log("...");
  console.log(10);
  console.log("fin");


let contador = 1;
while (contador<= 10){
     console.log(contador);
    contador = contador +1;
}
  console.log("fuera del bucle")



  function suma(n1=2,n2=3){
      let resultado = n1+n2;
      console.log("resultado",resultado);
      return resultado ;
  }
  
  let resultado1  = suma();
  console.log("algo mas de codigo");
  suma(10,50);
  suma(8,9);
  console.log("otra suma",resultado1+10);





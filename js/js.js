/**Ejercicio
*Dado una palabra buscarla en una frase y devolver cuantas veces aparece en ella.
*La palabra y la frase deben ser parametros de la funcion 
*Ejemplo: 
*countCoincide("el multiverso de marvel es mejor que el multiverso de DC","multiverso")//devuelve: 2
*countCoincide("juan hace el paso de anita","anito")//devuelve:0
*/

function operacion(frase,palabra){
   
    let arrayFrase = frase.split(' ');
    console.log(arrayFrase);
    
    let cont = 0;
    for(let p in arrayFrase){
        if(arrayFrase[p] == palabra){
            cont++;
        }
    }
     return cont;
}

function functionFrase(){
    let frase = document.getElementById('frase').value;
    let palabra = document.getElementById('palabra').value;
    
    let numero = document.getElementById('numero');
    numero.innerText =`Aparece ${operacion(frase,palabra)} Palabra(s) - ${palabra}`;

}



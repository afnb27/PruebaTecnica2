//ejercicio 1
//se quita el else if y se reemplaza por el else

function maxNum (n1, n2) {
    if (n1>n2) {
        return n2;
    }
    else {
        return n1;
      }
}

console.log(maxNum(3,7))

//ejercicio 2
// se le asigna un valor a A y se quita el punto y coma existente entre el b y las llaves 

let a = 2

function squared (b){
    return a * a;
}

console.log(squared(5))

//ejercicio 3
//le quité el let de sumar ya que eso a mi parecer es irrelevante en el ejercicio

function menosQue100(a,b){
    if (a + b === 100){
        return false
    } else {
        return true
    }
}

console.log(menosQue100(25,100));
console.log(menosQue100(35,75))


/*Ejercicio 3
Desarrolla una función que tome un número entero positivo como parámetro
y devuelva el factorial de ese número*/

function factorial (c) {
    let total  =1;
    for (i=1; i<=c; i++) {
        total= total * i;
    }
    return total;
}

console.log (factorial(5))


/*Ejercicio 4   
Escribe una función que tome un array de syrings como parámetro 
y devuelva un nuevo array con las mismas palabras pero ordenadas alfabeticamente
de forma ascendente*/

let frutas = [ "manzana", "banana", "pera", "uva"]
frutas.sort();
console.log(frutas)
var tamaño = parseInt(prompt("Ingresa la cantidad de números"));
var arreglo = []; 

for(var int = 0 ; int < tamaño ; int++){
    dato = parseInt(prompt("Ingresa un número"));
    arreglo.push(dato);
}


console.log("Arreglo original:" + arreglo);


function quickSort(arreglo) {
  if (arreglo.length <= 1) {
    return arreglo;
  }

  const pivote = arreglo[Math.floor(Math.random() * arreglo.length)];//Genera un número random del tamaño del arreglo
  const izq = [];
  const der = [];
  const iguales = [];

  for (var num= 0; num < arreglo.length; num++) {
    if (arreglo[num] < pivote){
        izq.push(arreglo[num]);
    }else if (arreglo[num] > pivote){
        der.push(arreglo[num]);
    } else {
        iguales.push(arreglo[num]);
    }
    
  }

  return [...quickSort(izq), ...iguales, ...quickSort(der)];// Los 3 puntos sacan el elemento de un arreglo y lo menten individualmente a otro
}

console.log("Arreglo ordenado: " + quickSort(arreglo) );

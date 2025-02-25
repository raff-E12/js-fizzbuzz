// Scrittura di un programma che stampi i numeri da 0 a 100
//Dove i relativi numeri divisibili per 3 o per 5 rappresentano la frase 'Frizz-Buzz'

// Indice esppresso in variabile
let Index = 1;

console.log('Inzio Loop:');

//il tipo di ciclo con il tipo di condizione da applicare in seguito.
// Ogni condizione verifica se alcuni numeri sono divisibili per 3 o per 5,
// è stampano dei valori espressi nelle seguenti condizioni nel loop che avviene.

for (Index; Index <= 100; Index++) {
    if (Index % 3 === 0 && Index % 5 === 0) {
        console.log('Fizz-Buzz');
    } else if(Index % 3 === 0){
        console.log('Fizz');
    } else if(Index % 5 === 0){
        console.log('Buzz')
    } else{
        console.log(Index);
    }
}

// Fine del loop, dopo la representazione dei relativi risultati.
console.log('Fine Loop, Grazie mille per aver visto.');
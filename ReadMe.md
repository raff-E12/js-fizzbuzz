# Creazione dell'Algoritmo FizzBuzz

## Obiettivo
Scrivere un programma che stampi i numeri da 1 a 100, con le seguenti regole:
- Se un numero è multiplo di 3, stampare "Fizz" invece del numero.
- Se un numero è multiplo di 5, stampare "Buzz" invece del numero.
- Se un numero è multiplo sia di 3 che di 5, stampare "FizzBuzz".
- Altrimenti, stampare semplicemente il numero.

## Analisi del Problema
Per determinare se un numero è multiplo di un altro possiamo usare l'operatore modulo `%`, che restituisce il resto della divisione:
- `n % 3 === 0` indica che `n` è divisibile per 3.
- `n % 5 === 0` indica che `n` è divisibile per 5.
- Se entrambi sono veri (`n % 3 === 0 && n % 5 === 0`), allora `n` è divisibile sia per 3 che per 5.

## Implementazione in JavaScript
L'implementazione adottata nello script si basa su un ciclo che confronta i valori numerici in sequenza. La variabile chiave del ciclo cambia costantemente in base alle condizioni impostate, determinando l'output appropriato (numero, "Fizz", "Buzz" o "FizzBuzz"). Questo approccio permette di verificare ogni numero in modo efficiente e di generare il risultato corretto senza ridondanze.

```javascript
let Index = 1;
...
```

## Conclusione
Abbiamo implementato con successo l'algoritmo FizzBuzz, utilizzando condizioni per verificare la divisibilità dei numeri. La seconda versione del codice offre una soluzione più compatta e leggibile. Questo esercizio aiuta a comprendere concetti fondamentali come i loop, le condizioni e l'uso dell'operatore modulo.




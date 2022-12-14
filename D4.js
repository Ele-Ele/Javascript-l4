const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];
console.log(starWarsCharacters.length);
/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
const characters = [];
/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla propriet?? "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
}
console.log(characters);
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci solo oggetti di personaggi femminili con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
const femaleCharacters = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female")
    femaleCharacters.push(starWarsCharacters[i]);
}
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come propriet??: blue, yellow, brown, red, blue-gray.
  ognuna di queste propriet?? contiene un array vuoto
*/
const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  ["blue-gray"]: [],
};
/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato.
  Utilizza uno switch statement per determinare in quale propriet?? inserire il personaggio
*/

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/
let i = 0;
let totaleMassa = 0;
while (i < starWarsCharacters.length) {
  totaleMassa += parseInt(starWarsCharacters[i].mass);
  i++;
}
console.log(totaleMassa);
/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa ?? inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa ?? uguale a 500 stampa in console: "Ship is half loaded",
Se la massa ?? superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa ?? superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa ?? superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

switch (true) {
  case totaleMassa < 500:
    console.log("ship is under loaded");
    break;
  case totaleMassa === 500:
    console.log("ship is half loaded");
    break;
  case totaleMassa > 700:
    console.log("warning: load is over 700");
    break;
  case totaleMassa > 900:
    console.log("critical load: over 900");
    break;
  case totaleMassa > 1000:
    console.log("DANGER! OVERLOAD ALERT: jump ship now!");
}
/* ESERCIZIO 8

Usa un for loop per cambiare il valore della propriet?? "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }
}
console.log(starWarsCharacters);
/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno pi?? for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)
Una volta fatto, crea un console.log() per controllare la propriet?? length di "characters" prima e dopo l'operazione
*/
for (let i = 0; i < characters.length; i++) {
  if (characters.length === 10) {
    characters.splice(4, i);
    characters.splice(5, i);
  }
}
console.log(characters);

/* EXTRA ESERCIZIO 10

Crea una funzionalit?? che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le propriet?? in modo discorsivo
*/
const randomStarWarsCharacters =
  starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];
console.log(randomStarWarsCharacters);
if (randomStarWarsCharacters === starWarsCharacters[0]) {
  console.log(
    "Luke Skywalker ?? un uomo ed ?? alto 1.72. I suoi capelli sono biondi, i suoi occhi sono blu e la sua pelle ?? chiara "
  );
} else if (randomStarWarsCharacters === starWarsCharacters[1]) {
  console.log(
    "C-3PO ?? un robot. La sua altezza ?? di 1.67, i suoi occhi sono gialli e la sua pelle dorata"
  );
} else if (randomStarWarsCharacters === starWarsCharacters[2]) {
  console.log(
    "R2-D2 ?? un robot. La sua altezza ?? di 96, i suoi occhi sono rossi e il suo corpo ?? bianco e blu"
  );
} else if (randomStarWarsCharacters === starWarsCharacters[3]) {
  console.log(
    "Darth Vader ?? un uomo ed ?? alto 2.02. I suoi occhi sono gialli e la sua pelle bianca"
  );
} else if (randomStarWarsCharacters === starWarsCharacters[4]) {
  console.log(
    "Leia Organa ?? una donna ed ?? alta 1.50. I suoi capelli sono castani, i suoi occhi marroni e la sua pelle ?? chiara"
  );
} else if (randomStarWarsCharacters === starWarsCharacters[5]) {
  console.log(
    "Owen Lars ?? un uomo ed ?? alto 1.78. I suoi capelli sono castani e grigi, i suoi occhi sono blu e la sua pelle ?? chiara "
  );
} else if (randomStarWarsCharacters === starWarsCharacters[6]) {
  console.log(
    "Beru Whitesun Lars ?? una donna ed ?? alta 1.65. I suoi capelli sono castani, i suoi occhi sono blu e la sua pelle ?? chiara"
  );
} else if (randomStarWarsCharacters === starWarsCharacters[7]) {
  console.log(
    "R5-D4 ?? un robot. La sua altezza ?? di 97, i suoi occhi sono rossi ed il suo corpo ?? bianco e rosso"
  );
} else if (randomStarWarsCharacters === starWarsCharacters[8]) {
  console.log(
    "Biggs Darklighter ?? un uomo ed ?? alto 1.83. I suoi capelli sono mori, i suoi occhi sono marroni e la sua pelle ?? chiara"
  );
} else if (randomStarWarsCharacters === starWarsCharacters[9]) {
  console.log(
    "Obi-Wan Kenobi ?? un uomo ed ?? alto 1.82. I suoi capelli sono ramati , i suoi occhi sono blu e grigi e la sua pelle ?? chiara"
  );
}

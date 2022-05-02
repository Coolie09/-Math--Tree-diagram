"use strict"

let data = [
    {zuruecklegen: true, iterations: 2, ur: 8, max:8},
    {name: "Rote Kugel", wahrscheinlichkeit: (1/8), ur:1, absolutNumber: 1},
    {name: "Blau Kugel", wahrscheinlichkeit: (7/8), ur:4, absolutNumber: 4},
    {name: "Grüne Kugel", wahrscheinlichkeit: (7/8), ur:3, absolutNumber: 3},
]
let values = [];
let numberOfElements = data.length-1

if (data[0].zuruecklegen == true) {
    for (let i = numberOfElements; i > 0; i--) { 
        console.log(`Zweig Nummer ${(numberOfElements -i)+1}`);
        for (let x = 1; x <= data[0].iterations; x++) { 
            console.log(data[i].name);        
            values.push(`Die Wahrscheinlichkeit auf der Zweigebene ${x} für ${data[i].name} beträgt ${data[i].absolutNumber/data[0].max}`)
            console.log(`Die Wahrscheinlichkeit auf der Zweigebene ${x} für ${data[i].name} beträgt ${data[i].absolutNumber/data[0].max}`);
            for (let z = numberOfElements; z >0 ; z--) {
                if (z == i) continue
                console.log(`Die Wahrscheinlichkeit auf der Zweigebene ${x} für ${data[z].name} beträgt ${data[z].absolutNumber/data[0].max}`);
            }
            data[i].absolutNumber -= 1;
            if (data[i].absolutNumber < 0) data[i].absolutNumber = 0
            data[0].max -= 1
        }
        data[0].max = data[0].ur
        data[i].absolutNumber = data[i].ur
    }
} else { 
    for (let i = numberOfElements; i > 0; i--) { 
        console.log(`Zweig Nummer ${(numberOfElements -i)+1}`);
        for (let x = 1; x <= data[0].iterations; x++) { 
            console.log(data[i].name);
            values.push(`Die Wahrscheinlichkeit auf der Zweigebene ${x} für ${data[i].name} beträgt ${data[i].absolutNumber/data[0].max}`)
            console.log(`Die Wahrscheinlichkeit auf der Zweigebene ${x} für ${data[i].name} beträgt ${data[i].absolutNumber/data[0].max}`);
            for (let z = numberOfElements; z > 0; z--) {
                if (z == i) continue
                console.log(`Die Wahrscheinlichkeit auf der Zweigebene ${x} für ${data[z].name} beträgt ${data[z].absolutNumber/data[0].max}`);
            }
        }
    }
}

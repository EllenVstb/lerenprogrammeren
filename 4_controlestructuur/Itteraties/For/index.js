// for loop

//for(teller;conditie,manipulatie van de teller){
//uitvoering code
// }
// optelling: i+i+&; i+=1; i++


//for(let i=10;i>1;i--){
//    document.write(i);
// }

// for(let i=1;i<=3;i++) {
//     document.write("Geef getal ",i,"in:<br>");
// }
let som = 0;
for (let i = 1; i <= 3; i++) {
    let getal = Number(prompt("Geef getal " + i + "in:"));
    som = som + getal;
}
document.write(som); //buiten de forloop zetten om resultaat te zien

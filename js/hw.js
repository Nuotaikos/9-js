/*
Class Dog {}
žino vardą
žino rūšies pavadinimą
žino (kailio) spalvą
žino akių spalvą
žino kojų skaičių
žino garsą kurį gali išskleisti
žino mėgstamą maistą
žino ar šiuo metu sėdi (default: ne)
gali išskleisti garsą, pvz.: “Rex: au au!!”
gali prisistatyti, pvz.: “Hi, I am a dog and my name is Rex. My color is black. My eyes are blue. I have 4 legs. Right now I am standing.”
gali atsisėsti ir apie tai pranešti, pvz.: “Rex: I am sitting.”
gali atsistoti ir apie tai pranešti, pvz.: “Rex: I am standing.”

“Hi, I am a cat and my name is Rainis. My color is black. My eyes are blue. I have 4 legs. Right now I am standing.”
*/

class Pets {
    constructor (name, type, color, eyes, legs, sound, food) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.eyes = eyes;
        this.legs = legs;
        this.sound = sound;
        this.food = true;
        this.position = false;
    }
}

const dog = new Pets('Rex', 'dog', 'black', 'blue', '4 legs', 'au au');
const cat = new Pets('Rainis', 'cat','black', 'blue', '4 legs', 'miau miau');
const hamster = new Pets('Chamiakas', 'hamster', 'black', 'blue', '4 legs', 'krimst krimst');
const parrot = new Pets('Jack', 'parrot', 'black', 'blue', '2 wings', 'I am captain Jack!!');
const chicken = new Pets('Little', 'chicken','black', 'blue', '2 wings', 'cyp cyp');
const pyke = new Pets('Little', 'chicken','black', 'blue', '2 wings', 'cyp cyp');



console.log(dog.name);
console.log(dog.type);
console.log(dog.color);
console.log(cat.eyes);
console.log(hamster.type);
console.log(parrot.type);
class Lion {
    construction(name, haircolor) {
        this.name = name;
        this.haircolor = haircolor;
    }
    logName() {
        console.log('Roar! I am',this.name);
        }
}
const goldenLion= new Lion('Mufasa', 'golden');
const redLion = new Lion ('Scar', 'red');

console.log('golenLion');
console.log('redLion');

goldenLion.logName();
redLion.logName();
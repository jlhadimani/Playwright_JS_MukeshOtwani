class Animal {
    constructor (name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`)
    }
}

class Dog extends Animal{
    constructor (name, breed)
    {
        super(name); 
        this.breed = breed; 
    }
    speak(){
        console.log(`${this.name}, ${this.breed} barks!!!`)
    }
}

const mydog = new Dog("Rocky", "Golden Retriever");

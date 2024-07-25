class Human {
    constructor (name,age,height,gender,occupation) {
        this.name = name,this.age=age,this.height=height,this.gender=gender,this.occupation=occupation
    };
    identity(){
        return `My name is ${this.name}, I am ${this.age} years old, ${this.height} tall, and I am a ${this.gender}.`
    }
    work(){
        return `${this.name} is currently doing ${this.occupation}`
    }
}
class Student extends Human {
    work(){
        return `${this.name} is a student at holbertons school'`

    }
    identity(name,age,occupation){
        return `My name is ${name}, I am ${age} years old, and I am a student at holbertons school.`
    }    
}
class Woman extends Human {
    constructor(name,age,height, gender,occupation){
        super(name,age,height,'female',occupation);
    }
    
}

const Zaid = new Student('Zaid', 23, 'Software Engineer');
const Jane = new Woman('Jane',25, '5.3 feet','female', 'front-end Developer');

console.log(Zaid.identity());
console.log(Jane.identity());
console.log(Jane.work())
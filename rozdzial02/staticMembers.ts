class ClassA {
    static typeName : string;
    constructor() {};
    static getFullName(){
        return "ClassA " + ClassA.typeName; 
    }
}
const c = new ClassA();
console.log(ClassA.typeName);

class Runner {
    static lastRunTypeName: string;

    constructor(private typename: string){};
    run(){
        Runner.lastRunTypeName = this.typename;
    }
}

const a = new Runner("a");
const b = new Runner("b");
b.run();
a.run();
console.log(Runner.lastRunTypeName);
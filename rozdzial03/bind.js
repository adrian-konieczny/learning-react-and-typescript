class A {
    constructor() {
        this.name = "A";
    }
    go() {
        console.log(this.name);
    }
}
class B {
    constructor() {
        this.name = "B";
    }
    go() {
        console.log(this.name);
    }
}
const a = new A();
a.go();
const b = new B();
b.go = b.go.bind(a);
b.go();

var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ;
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    return ClassA;
}());
var c = new ClassA();
console.log(ClassA.typeName);
var Runner = /** @class */ (function () {
    function Runner(typename) {
        this.typename = typename;
    }
    ;
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typename;
    };
    return Runner;
}());
var a = new Runner("a");
var b = new Runner("b");
b.run();
a.run();
console.log(Runner.lastRunTypeName);

const callerObject= {
    name: "Janek"
}
function checkThisAge(age){
    console.log(`Czym jest this? : ${this}`);
    console.log(`Czy mam imię? : ${this.name}`);
    this.age=age;
    console.log(`Ile mam lat? : ${this.age}`);
}

//checkThisAge();
checkThisAge.call(callerObject, 25);
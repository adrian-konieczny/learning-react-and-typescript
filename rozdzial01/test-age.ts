
interface User {
    name: string;
    age: number;

}
function canDrive(usr: User) {
    console.log("Imię użytkownika: ", usr.name);
    if(usr.age >= 16){
        console.log("Może on prowadzić auto.");
    } else {
        console.log("Nie może on prowadzić auta.");
    }
}
const tom: User = {
    name: "Tomek",
    age: 25
}
canDrive(tom);
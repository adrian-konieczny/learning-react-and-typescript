function canDrive(usr) {
    console.log("Imię użytkownika: ", usr.name);
    if (usr.age >= 16) {
        console.log("Może on prowadzić auto.");
    }
    else {
        console.log("Nie może on prowadzić auta.");
    }
}
var tom = {
    name: "Tomek",
    age: 25
};
canDrive(tom);

var InteraceNamespace;
(function (InteraceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Pojazd ma ".concat(this.wheelCount, " k\u00F3\u0142."));
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("Liczba k\u00F3\u0142 w poje\u017Adzie : ".concat(this.wheelCount));
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("moto-dla-poczatkujacych");
    console.log(moto.getFullName());
})(InteraceNamespace || (InteraceNamespace = {}));

namespace abstractClass{
    abstract class Vehicle{
        constructor(protected wheelCount: number) {};
        abstract updateWheelCount(newWheelCount: number): void;
        showNumberOfWheels(){
            console.log(`Liczba kół w pojeździe: ${this.wheelCount}`);
        };

    };
    class Motorcycle extends Vehicle{
        constructor(){
            super(2);
        }
        updateWheelCount(newWheelCount: number): void {
            this.wheelCount = newWheelCount;
            console.log(`Motocykl ma ${this.wheelCount} koła.`);
        }
    }
    class Automobile extends Vehicle {
        constructor(){
            super(2);
            
        }
        updateWheelCount(newWheelCount: number): void {
            this.wheelCount = newWheelCount;
            console.log(`Samochód ma ${this.wheelCount} koła.`);

        }
        showNumberOfWheels(): void {
            console.log(`Liczba kół w pojeździe: ${this.wheelCount}`);
        }
    }
    const motorcycle = new Motorcycle();
    const automobile = new Automobile();
    motorcycle.updateWheelCount(1);
    automobile.updateWheelCount(3);
}
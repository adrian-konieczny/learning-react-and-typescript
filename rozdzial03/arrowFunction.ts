const myFunc = (message: string) => {
    console.log(message);
}
myFunc('Witaj!');

const func1 = () => console.log('func1');
const func2 = () => ({name: 'David'});
const func3 = () => {
    const val1= 20;
    return val1;
} 
console.log(func1());

console.log(func2());

console.log(func3());
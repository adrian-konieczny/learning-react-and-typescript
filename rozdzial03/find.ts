const items = [
    {name: 'Jan', age: 20},
    {name: 'Linda', age: 22},
    {name: 'Jan', age : 40}
];
const jan = items.find((item)=> {
    return item.name === 'Jan'
});
console.log(jan);
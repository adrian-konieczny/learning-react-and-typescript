const allTrucks = [
    2, 5, 7, 10
];
const inintialcapacity = 0;
const allTonage = allTrucks.reduce((totalCapacity, currentcapacity) => {
    totalCapacity = totalCapacity + currentcapacity;
    return totalCapacity;
}, inintialcapacity);
console.log(allTonage);

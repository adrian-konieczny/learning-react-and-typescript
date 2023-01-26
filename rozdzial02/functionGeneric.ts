interface HasLength{
    length:number;
}
function getLength<T extends HasLength>(arg:T){
    return arg.length;
}
//console.log(getLength<number>(22));
console.log(getLength("Witaj, świecie!"));
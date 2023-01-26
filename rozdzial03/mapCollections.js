const mappedEmp = new Map();
mappedEmp.set("Linda", {fullname: "Linda Kowalsky", id: 1});
mappedEmp.set("Kuba", {fullname: 'Kuba tomaszewski', id: 2});
mappedEmp.set("Pamela", {fullname: "Pamela Kluczyyk", id: 4});

console.log(mappedEmp);

console.log('get', mappedEmp.get("Kuba"));
console.log('size', mappedEmp.size);

for (let [key, val] of mappedEmp){
    console.log("Iteracja:",key, val);
}
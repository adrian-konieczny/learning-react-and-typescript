const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Operacja zakończona pomyślnie");
        reject("Niepowodzenie");
    }, 500);
})
myPromise.then(done => {
    console.log(done);
}).catch(err =>{
    console.log(err);
});
var SpreadArray;
(function (SpreadArray) {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const c = [...a, ...b];
    const d = a.concat(b);
    console.log(c);
    console.log(d);
    a.push(10);
    console.log(c);
    console.log(d);
})(SpreadArray || (SpreadArray = {}));

/*let val: any = 22;
val = "to jest ciąg znakow";
val = new Array();
val.nieistniejacametoda(33);

console.log(val);*/
var val = 22;
val = "to jest ciąg znaków";
val = new Array();
if (val instanceof Array) {
    val.push(33);
}
console.log(val);

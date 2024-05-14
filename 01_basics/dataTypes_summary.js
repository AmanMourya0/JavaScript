// primitive
// 7 typess:string,number,boolean,undefined,null,symbol,BigInt
console.log(+null); // >>>0
const id =Symbol("123")
const aid =Symbol("123")
console.log(id,aid);

//reference (non primitive)
// arrays,objects,functions

const heros=['aman','deep','prra']
let obj1={
    id: 33,
    name:"aman",
    age: 21
}
const myfun =function() {
    console.log("hello");
    
}
// console.log(typeof null); // >>> object
// console.log(typeof myfun); //function
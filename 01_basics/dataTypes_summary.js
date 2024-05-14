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



// *******************************************

// stack (primitive) and heap (non-primitive)

// stack
// let username="amnaaj"
// let user1=username // copy of original value is assigned
// username="qwerty"
// console.log(username,user1); // username=="qwerty";user1="amnaaj"

// heap
let user1={
    name:"qw1",
    email:"qw1@gamil.com",
}
let user2=user1 // original refference is assigned
user2.name="aman"
console.log(user1);

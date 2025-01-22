//console.log(`Я учу JavaScript!`)

//function sayHello () {
//    console.log(`Я учу JavaScript!`);
//}
//sayHello();

let sayHello =() => console.log ("Я учу JavaScript!");
sayHello();

const image = document.getElementById('elem-img');
console.log(image);
function showImgOne() { 
    image.src="./assets/style/img/cat2.jpg";   
}
function showImgTwo() { 
    image.src="./assets/style/img/cat1.jpg";   
}
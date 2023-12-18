var arr = [5, "João", true, {teste:1, teste2:2}];

console.log(arr);

document.write(arr[3].teste);

arr[0] = "teste";

console.log(arr);

arr[4] = "novo";

console.log(arr);

console.log(typeof arr)
// detectar se a string contém números
let nums = /\d/.test("abc123");
console.log(nums); // true

// extrair todas as letras de uma string
let letters = "ABC123".match(/[A-Z]/g);
console.log(letters); // ['A', 'B', 'C']

// validar se um texto começa com uma palavra específica
let start = /^Olá/.test("Olá mundo");
console.log(start); // true

// validar se um text termina com uma palavra específica
let end = /fim$/.test("Isso é o fim");
console.log(end); // true

// extrair número de uma string
let numbers = "ABC123".match(/[0-9]/g);
console.log(numbers); // ['1', '2', '3']

let numbers2 = "ABC123".match(/\d+/g);
console.log(numbers2); // ['123']

let numbers3 = "ABC123".match(/\d/g);
console.log(numbers3); // ['1', '2', '3']
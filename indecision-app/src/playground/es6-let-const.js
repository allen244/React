var nameVar = 'Al';
nameVar = 'test';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Mya';
    return petName;
}
const petName = getPetName();
console.log(petName);

var fullName = 'al s';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
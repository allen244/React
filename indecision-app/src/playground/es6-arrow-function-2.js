
//arguments object is no longer bound
const add = (a,b) =>{
    //console.log(arguments);
    return a + b;
}

console.log(add(5,5));


//this keyword is no longer bound

const user ={
    name:'al',
    cities:['ny','test','hello'],
    printPlacesLived(){
      return this.cities.map((city) => this.name + ' livied in ' + city + '!');
    }
};

console.log(user.printPlacesLived());

const multiplier={
    numbers:[1,2,3,4,5],
    multiplyBy:5,
    multiply(){
        return this.numbers.map((anumber) => this.multiplyBy * anumber );
    }
}

console.log(multiplier.multiply());
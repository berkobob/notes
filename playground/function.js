var square = x => x * x;
console.log(square(9));

var user = {
    name: "Antoine",
    sayHi: () => {
        // Arrow functions have no 'this'
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
};

user.sayHi(1, 2);
user.sayHiAlt(3, 4);

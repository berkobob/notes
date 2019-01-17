var obj = {
    name: "Antoine",
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
console.log(obj);

var personString = '{"name": "Antoine", "age": 48}';
console.log(personString);
var person = JSON.parse(personString);
console.log(person);

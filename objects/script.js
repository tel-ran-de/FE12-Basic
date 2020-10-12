const a = 1;
const b = "Hello";
const arr = [1, 2, 3, 'x'];

console.log(a, typeof a);
console.log(b, typeof b);
console.log(arr, typeof arr);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    address: {
        city: 'Berlin',
        street: 'Friedrichstr.',
        house: '176',
        zip: '10117'
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person, typeof person);

//JSON - Java Script Object Notation
const otherPerson = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 20,
    "consent": true,
    "address": {
        "city": "Berlin",
        "street": "Friedrichstr.",
        "house": "176-179",
        "zip": "10117"
    }
};
//looks like Map<String, Object> in Java

console.log(otherPerson, typeof otherPerson);

const name = person.firstName + ' ' + person.lastName;
console.log(name);




const anotherName = person['firstName'] + ' ' + person['lastName'];
console.log(anotherName);

const fullAddress = person.address.house + ' ' + person.address.street + ", " + person.address.city + ', ' + person.address.zip;
console.log(fullAddress);
const otherWayAccessFields = person["address"]["house"] + ' ' + person["address"]["street"] + ", " + person["address"]["city"] + ', ' + person["address"]["zip"];
console.log(otherWayAccessFields);


otherPerson.married = true;
otherPerson['numberKids'] = 1;
console.log("otherPerson", otherPerson);


// const fieldName = prompt("What field would you like to see?");
// alert(getFieldValueByName(otherPerson, fieldName));

function getFieldValueByName(object, fieldName) {
    return object[fieldName];
}



const functionVariable = function() {
    console.log("Hello, world");
}
console.log(functionVariable);

functionVariable();

console.log(person.getFullName());

const someJsonString = `{"firstName":"Vasya", "lastName": "Pupkin"}`;
console.log(someJsonString, typeof someJsonString);
const objectFromJSON = JSON.parse(someJsonString);
console.log(objectFromJSON, typeof objectFromJSON);

map.put("father", 1); //in Java
map['father'] = 1; //in JS

map.get("father"); // in Java
map['father']; // in Java

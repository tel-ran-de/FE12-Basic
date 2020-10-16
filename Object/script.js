const a = 1;
const b = "hello";
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
    }
};

console.log(person, typeof person);

const otherPerson = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 20,
    "address": {
        "city": "Berlin",
        "street": "Friedrichstr.",
        "house": "176-179",
        "zip": "10117"
    }
};

console.log(otherPerson, typeof otherPerson);

const name = person.firstName + ' ' + person.lastName;

console.log(name);

const anotherName = person['firstName'] + ' ' + person['lastName'];

console.log(anotherName);

const fullAddress = person.address.house + ' ' + person.address.street + ', ' + person.address.city + ', ' + person.address.zip;
const otherWayAccessFields = person["address"]["house"] + ' ' + person["address"]["street"] + ', ' + person["address"]["city"] + ', ' + person["address"]["zip"];
console.log(otherWayAccessFields);


otherPerson.married = true;
otherPerson['numberKids'] = 3;

console.log("otherPerson", otherPerson);
//alert(getFieldValueByName(otherPerson, fieldName));
 //const addr = 'address';
 //person[addr] =

function getFieldValueByName (object, fieldName) {
    return object[fieldName];
}

const functionVariable = function () {
    console.log("Hello, world!");
}

functionVariable();



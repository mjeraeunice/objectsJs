//Given an array of objects, each object representing a person with a name and age property,
//write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function newArray(people){
  for(d in people){
    return people.filter(d=>d.age >=18).map(d=>d.name)
  }
};
console.log(newArray(people));

//Write a function that takes an array of objects,where each object represents a 
//product with a name, price, and category property. 
//The function should return an object that groups the products by their categories, 
//with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
function Categorize(products) {
  const grouped = { Clothing: [],Electronics: []};
products.forEach( obj =>{
  if(obj.category === 'Electronics'){
   grouped.Electronics.push(obj);}
else if(obj.category === 'Clothing'){
 grouped.Clothing.push(obj);
}
});
return grouped
}
const grouped=Categorize(products)
console.log(grouped);

//Given an array of objects, where each object represents a student with a name 
//and an array of scores, write a function that returns a new array 
//containing the names of all students whose average score is greater than or equal to 85.

function studentDetails(students){
  const details=[];
  for (const student of students){
    const avg=student.scores.reduce((sum,score)=>sum +score,0)/student.scores.length;
    if(avg>=85){
       details.push(student.name)
    }
  }
  return details;
  }
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  const details=studentDetails(students);
  console.log(details);

//Given an object representing a car, with properties for the make, model, year, and 
//a method to display the car's information, write a function that 
//takes the car object and adds a new method to the object called age. 
//The age method should return the current age of the car based on the current year and 
//the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
function newCar(car){
  const newAge= new Date().getFullYear();
  car.age=function(){
    return newAge - this.year
  }
}
newCar(car);
console.log(car.age());

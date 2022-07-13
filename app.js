const persons = ['imran','kashif','jawad','sangraiz','hamza','maaz'];
persons.forEach(function(person){
  console.log('Hello',person);
});

/*const greeting = function(person){
  console.log('Hello',person);
}

persons.forEach(greeting);
*/
const employees = [
  {Name:'Sangraiz',Age:25,Job:'Data Scientist'},
  {Name:'Maaz',Age:21,Job:'ML Engineer'},
  {Name:'Hamza',Age:23,Job:'MERN Developer'},
];

const holder = employees.map(function(employee){
  return {fullName:employee.Name,oldAge:employee.Age+20}
});

console.log(holder);

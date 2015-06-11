var students = ['Justin', 'James', 'Jack', 'Max'];

students.forEach(function(studentName) {
  new Student({
    name: studentName
  });
});

// var x = new Student({
//   name: 'Vi',
//   location: 'Atlanta',
//   favorite_food: 'Mangos'
// });

/*var students = ['Justin', 'James', 'Jack', 'Max'];

var allStudents = new StudentCollection();

students.forEach(function(studentName) {

  var s = new Student({
    name: studentName
  });

  allStudents.add(s);

});*/

var allStudents = new StudentCollection();

allStudents.fetch().done(function() {

  allStudents.each(function(model) {
    addStudentToView(model.attributes);
  });

});

var addStudent = function(e) {
  e.preventDefault();

  var studentName = $(this).find('input').val();

  var s = new Student({
    name: studentName
  });

  allStudents.add(s).save().success(function(data) {
    console.log(data);
    addStudentToView(data);
  });

  this.reset(); // Reset form

};

var addStudentToView = function(x) {
  // var studentHtml = "<li id='" + student._id + "'>";
  //     studentHtml += student.name;
  //     studentHtml += "</li>";

  var studentHtml = template.student(x);

  $('#students').prepend(studentHtml);
};


// Submit Handler
$('#addStudent').on('submit', addStudent);


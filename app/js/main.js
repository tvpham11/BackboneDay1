;(function() {
  'use strict';

  var allStudents = new app.Collections.StudentCollection();

  allStudents.fetch().done(function() {

    new app.Views.MainView();

    // allStudents.each(function(model) {
    //   addStudentToView(model.attributes);
    // });

  });

 /* var addStudent = function(e) {
    e.preventDefault();

    var studentName = $(this).find('input').val();

    var s = new app.Models.Student({
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

    var studentHtml = hbs.student(x);

    $('#students').prepend(studentHtml);
  };


  // Submit Handler
  $('#addStudent').on('submit', addStudent);
*/
}());

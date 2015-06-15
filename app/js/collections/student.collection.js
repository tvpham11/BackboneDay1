;(function () {

  'use strict';

  app.Collections.StudentCollection = Backbone.Collection.extend({

  model: app.Models.Student,

  comparator: 'name',

  url: 'http://tiy-515.herokuapp.com/collections/alkasjflksadfkldsajlkfjklasdf',

  });

}());

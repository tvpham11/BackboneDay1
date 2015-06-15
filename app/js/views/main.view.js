;(function () {

  'use strict';

  app.Views.MainView = Backbone.View.extend({

    el: '.container',

    template: hbs.student, // Handlebars

    events: {
      'submit #addStudent': 'addStudent'
    },

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;
      this.render();
    },

    render: function() {

      var self = this;

      this.collection.each(function(singleStudent){
        var renderedHtml = self.template(singleStudent.toJSON());
        self.$el.find('#students').append(renderedHtml);
        // $el = $(.container) - jQuerified element
      });

    },

    addStudent: function(e) {
      e.preventDefault();

      console.log(e);

      var form = e.target;
      var self = this;

      var studentName = $(form).find('input').val();

      var s = new app.Models.Student({
        name: studentName
      });

      this.collection.add(s).save().success(function(data) {
    //this.collection.add(s).save().success(function() { <- can do this too
        var renderedHtml = self.template(s.toJSON());
        self.$el.find('#students').prepend(renderedHtml);;
      });

      form.reset(); // Reset form
    }

  });

}());

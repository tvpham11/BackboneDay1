;(function () {

  'use strict';

  app.Views.MainView = Backbone.View.extend({

    el: '.container',

    template: hbs.student, // Handlebars

    initialize: function() {
      this.render();
    },

    render: function() {

      var renderedHtml = this.template({ name: 'Tim', location: 'Florida' });

      this.$el.find('#students').html(renderedHtml);
      // $el = $(.container) - jQuerified element
    }

  });

}());

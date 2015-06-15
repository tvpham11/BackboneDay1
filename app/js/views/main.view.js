;(function () {

  'use strict';

  app.Views.MainView = Backbone.View.extend({

    el: '.container',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html('I am cool');
      // $el = $(.container) - jQuerified element
    }

  });

}());

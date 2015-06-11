var Student = Backbone.Model.extend({

  initialize: function() {
    this.logName();
  },

  idAttribute: '_id',

  defaults: {
    name: '',
    location: 'Atlanta'
  },

  logName: function() {
    console.log(this.get('name'));
    this.logLocale();
  },

  logLocale: function() {
    console.log(this.get('location'));
  },

  changeLocation: function(newLocation) {
    this.set('location', newLocation);
    console.log(this.get('name') + ' has a new location of ' +
                this.get('location') + '.');
  }

});

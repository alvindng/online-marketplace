import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },

  total: Ember.computed('items.length', function(){
    var sum = 0;
    this.get('items').forEach(function(item){
      sum += parseFloat(item.get('cost'));
    });
    return sum.toFixed(2);
  })
});

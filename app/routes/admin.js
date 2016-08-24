import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    save(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('store');
    }
  }
});

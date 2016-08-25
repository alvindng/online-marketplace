import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(product) {
      if (confirm('Are you sure you want to delete this product?... No but seriously, you sure?')) {
        this.sendAction('destroyProduct', product);
      }
    }
  }
});

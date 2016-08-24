import Ember from 'ember';

export default Ember.Component.extend({
  updateProduct: false,
  actions: {
    updateProductFormShow() {
      this.set('updateProduct', true);
    },
    update(product) {
      var params = {
        title: this.get("title"),
        description: this.get("description"),
        cost: this.get("cost"),
        image: this.get("image")
      };
      this.set('updateProduct', false);
      this.sendAction('update', product, params);
      // debugger;
    }
  }
});

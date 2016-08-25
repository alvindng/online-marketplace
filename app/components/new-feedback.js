import Ember from 'ember';

export default Ember.Component.extend({
  ratings: ['1','2','3','4','5'],
  vote: '5',

  actions: {
    saveFeedback() {
      var params = {
      rating: parseInt(this.get('vote')),
      comment: this.get('comment'),
      author: this.get('author'),
      product: this.get('product')
    };
    this.sendAction('saveFeedback', params);
    },
    chooseRating(rating) {
      this.set('vote', rating);
    }
  }
});

import Ember from 'ember';

export function productRating(params) {
  var productRating = params[0];

  if (productRating === 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  } else if (productRating === 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (productRating === 3){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (productRating === 4){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (productRating === 5){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  }
}

export default Ember.Helper.helper(productRating);

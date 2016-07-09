import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('scientists');
  this.route('landing');
  this.route('products', function() {
      this.route('javascript');
      this.route('product', {
          path: ":id"
      });
  });
  this.route('about');
});

export default Router;
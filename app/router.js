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
        this.route('detail');
    });
});

export default Router;
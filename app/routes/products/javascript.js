import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            name: "EmberJS",
            image: "ember.jpeg",
            options: [{
                name: 'Men\'s XL',
                value: 'menXL'
            }, {
                name: 'Men\'s L',
                value: 'menL'
            }, {
                name: 'Men\'s M',
                value: 'menM'
            }]
        }];
    }
});
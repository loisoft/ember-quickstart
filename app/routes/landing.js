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
        }, {
            name: "AngularJS",
            image: "angular.jpeg",
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
        }, {
            name: "BackboneJS",
            image: "backbone.jpeg",
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
        }, {
            name: "NodeJS",
            image: "node.jpeg",
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
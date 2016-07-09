import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
    },
    renderTemplate: function() {
        this.render('sidebar', {
            outlet: "sidebar"
        });
    }
});
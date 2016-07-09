import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return {
            id: params.id,
            name: "product detail",
            image: "detail.jpeg",
            price: "12.5"
        }
    },

    serialize: function(model) {
        return {
            id: model.id
        };
    }
});
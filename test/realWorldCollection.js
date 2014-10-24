//We define the collection, associate the map for every item in the list
//and define the url that fetch will be using to load remote data
var RealWorldCollection = Backbone.Collection.extend({
    model: RealWorldItemModel,
    url: 'test/data.json'
});
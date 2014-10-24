//The model that will be used for every item inside the collection
//(Backbone will traw to map every item into this model)
var RealWorldItemModel = Backbone.Model.extend({
    defaults : {
        name   : '',
        color   : ''
    }
});
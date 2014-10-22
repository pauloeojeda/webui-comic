// Namespace our app
var app = app || {}

app.GenericCollection = Backbone.Collection.extend({

    model: new Backbone.Model({}),

    isEmpty: function ( val ) {
        if(val == 0 || val == false || val == '' || val == {} || val == [] || val == null || val == undefined)
        {
            return true;
        }
        
        return false;
    }
});

app.generic_collection = new app.GenericCollection();
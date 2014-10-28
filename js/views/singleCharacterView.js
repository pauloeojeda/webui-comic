// Namespace our app
var app = app || {}

// The view for a single model view, which is one comic
app.singleCharacterView = Backbone.View.extend({

    tagName: "li",
    template   : null,

    initialize : function(){
        //This is useful to bind(or delegate) the this keyword inside all the function objects
        //to the view. Read more here: http://documentcloud.github.com/underscore/#bindAll
        //_.bindAll(this);

        //later we will see complex template engines, but is the basic from underscore
        this.template = _.template( $("#featuredCharacter").html() );
    },

    render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }
});
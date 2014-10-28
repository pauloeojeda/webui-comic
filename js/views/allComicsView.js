// Namespace our app
var app = app || {};

// The view for all the comics
app.allComicsView = Backbone.View.extend({

    tagName: "section",
    class: "comicGallery",

    initialize : function(){
        //This is useful to bind(or delegate) the this keyword inside all the function objects
        //to the view. Read more here: http://documentcloud.github.com/underscore/#bindAll
        _.bindAll(this);
        this.collection.bind('add', this.addItemHandler);
    },

    load : function(){
        //here we do the AJAX Request to get our json file, also provide a success and error callbacks
        this.collection.fetch({
            add: true,
            success: this.loadSuccessHandler,
            error: this.errorHandler
        });
    },

    loadCustomView  : function () {
        this.collection.models.forEach(function(element, index){
            this.addItemHandler(element);
        }, this);
        this.render();
    },

    //we arrived here one time per item in our list, so if we received 4 items we
    //will arrive into this function 4 times
    addItemHandler : function(model){
        //model is an instance of RealWorldItemModel
        var myItemView = new app.singleComicView({model:model});
        myItemView.render();
        $(this.el).append(myItemView.el);
    },

    loadSuccessHandler : function(){
        console.log('All comics were loaded without errors!');
        this.render();
    },

    errorHandler : function(){
        throw "Error loading comics JSON file";
    },

    render: function() {
        $('#contentArea').append($(this.el));
        return this;
    }
});
// Namespace our app
var app = app || {};

// The view for all the comics
app.allComicsView = Backbone.View.extend({

    tagName: "section",
    class: "comicGallery",

    render: function() {
        this.collection.each(this.addComic, this);
        return this;
    },

    addComic: function(comic) {
        var comicView = new app.singleComicView ({ model: comic});
        this.$el.append(comicView.render().el);
    },

    load : function(){
        //here we do the AJAX Request to get our json file, also provide a success and error callbacks
        this.collection.fetch({
            add: true,
            success: this.loadCompleteHandler,
            error: this.errorHandler
        });
    },

    loadCompleteHandler : function(){
    console.log('Awesome everything was loaded without errors!');
    this.render();
    },

    errorHandler : function(){
    throw "Error loading JSON file";
    },
});

// app.allcomics = new app.allComicsView();
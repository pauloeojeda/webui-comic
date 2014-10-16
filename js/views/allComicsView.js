// Namespace our app
var app = app || {}

// The view for all the comics
app.allComicsView = Backbone.View.extend({
    tagName: "section",

    render: function() {
        this.collection.each(this.addComic, this);
        return this;
    },

    addComic: funcion(comic) {
        var comicView = new app.singleComicView ({ model: comic});
        this.$el.append(comicView.render().el);
    }
});
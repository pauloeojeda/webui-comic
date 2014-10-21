// Namespace our app
var app = app || {}
// The view for all the comics
app.allComicsView = Backbone.View.extend({

    // el: '#content',
    tagName: "section",

    initialize: function () {
        this.render();
    },

    render: function() {
        this.collection.each(this.addComic, this);
        return this;
    },

    addComic: function(comic) {
        var comicView = new app.singleComicView ({ model: comic});
        this.$el.append(comicView.render().el);
    }
});

app.allcomics = new app.allComicsView();
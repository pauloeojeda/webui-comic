// Namespace our app
var app = app || {}

// The view for a single model view, which is one comic
app.singleComicView = Bacbone.View.extend({
    tagName: "article",
    className: "comicListItem",

    template: _.template( $("#comicElement").html() ),

    render: function(){
        var comicTemplate = this.template(this.model.toJSON());
        this.$el.html(comicTemplate);
        return this;
    }
});
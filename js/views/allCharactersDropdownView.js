// Namespace our app
var app = app || {};

// The view for all the characters in the navbar dropdown
app.allCharactersDropdownView = Backbone.View.extend({

    tagName: "ul",
    //class: "dropdown-menu",

    initialize: function () {
        _.bindAll(this);
        this.collection.bind('add', this.addItemHandler);
    },

    load: function () {
        // reset:true makes the collection to be cleared each time the page refreshes
        // but also causes that the dropdown is rendered empty the first time
        // this.$el.empty()
        this.collection.fetch({
            add: true,
            success: this.loadSuccessHandler,
            error: this.errorHandler
        });
    },

    addItemHandler: function (model) {
        if (model.get("featured")) {
            var myItemView = new app.singleCharacterView({model: model});
            myItemView.render();
            $(this.el).append(myItemView.el);
        }
    },

    loadSuccessHandler: function () {
        this.render();
    },

    errorHandler: function () {
        throw "Error loading characters JSON file";
    },

    render: function () {
        $(this.el).attr('class', 'dropdown-menu');
        $(this.el).attr('role', 'menu');
        $(this.el).attr('id', 'featuredCharactersDropdownList');

        // maybe there's a better approach to this. Surely I'd say
        $(this.el).prepend('<li class="dropdown-header">Featured</li>');
        $(this.el).append('<li class="divider"></li>');
        $(this.el).append('<li class="dropdown-header">More</li>');
        $(this.el).append('<li><a href="#character:all">See All Characters</a></li>');

        $("#charactersDropdown").append($(this.el));
        return this;
    }
});
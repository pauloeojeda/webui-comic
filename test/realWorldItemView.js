var RealWorldItemView = Backbone.View.extend({
  tagName    : 'li',
  template   : null,
  events     : {},

  initialize : function(){
    //This is useful to bind(or delegate) the this keyword inside all the function objects
    //to the view. Read more here: http://documentcloud.github.com/underscore/#bindAll
    //_.bindAll(this);

    //later we will see complex template engines, but is the basic from underscore
    this.template = _.template('<span>Name: <strong><%= name %></strong> - <%= color %> </span>');
  },
  
  render : function(){
    $(this.el).html( this.template( this.model.toJSON() ) );
    return this;
  }
});
//Main View for the list
var TestView = Backbone.View.extend({
  id : "real-world-id",
  //because it is a list we define the tag as ul 
  tagName : "ul", 
  className : "real-world", 

  events : {
  },

  initialize : function(){
    //This is useful to bind(or delegate) the this keyword inside all the function objects
    //to the view. Read more here: http://documentcloud.github.com/underscore/#bindAll
    _.bindAll(this);
    this.collection.bind('add', this.addItemHandler);
  },

  load : function(){
    //here we do the AJAX Request to get our json file, also provide a success and error
    //callbacks
    this.collection.fetch({
      add: true,
      success: this.loadCompleteHandler,
      error: this.errorHandler
    });
  },  

  //we arrived here one time per item in our list, so if we received 4 items we
  //will arrive into this function 4 times
  addItemHandler : function(model){
    //model is an instance of RealWorldItemModel
    var myItemView = new RealWorldItemView({model:model});
    myItemView.render();
    $(this.el).append(myItemView.el);
  },

  loadCompleteHandler : function(){
    console.log('Awesome everything was loaded without errors!');
    this.render();
  },

  errorHandler : function(){
    throw "Error loading JSON file";
  },

  render : function(){
    //we assign our element into the available dom element
    $('#main').append($(this.el));
    return this;
  }
});
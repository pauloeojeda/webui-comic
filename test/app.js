//We create the instance of our collection:
var myCollection = new RealWorldCollection();

//we pass the collection to our testing View
var test = new TestView({collection: myCollection});
test.load();
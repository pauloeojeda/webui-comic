var comic1 = new app.singleComic({
    idComic: 1,
    idGenre: 1,
    name: "name1",
    number: 1,
    cover: "images/marvel1.jpg"
});

var comic2 = new app.singleComic({
    idComic: 2,
    idGenre: 2,
    name: "name2",
    number: 2,
    cover: "images/marvel2.jpg"
});

var comic3 = new app.singleComic({
    idComic: 3,
    idGenre: 3,
    name: "name3",
    number: 3,
    cover: "images/marvel3.jpg"
});

var comicGroup = new app.ComicsCollection([
    comic1, comic2, comic3
]);

var comicGroupView = new app.allComicsView({ collection: comicGroup});

$("#allComics").html(comicGroupView.render().el);
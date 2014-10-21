var marvel1 = new app.singleComic({
    idComic: 1,
    idGenre: 1,
    name: "marvel1",
    number: 1,
    cover: "images/marvel1.jpg",
    link: "marvel1"
});

var marvel2 = new app.singleComic({
    idComic: 2,
    idGenre: 2,
    name: "marvel2",
    number: 2,
    cover: "images/marvel2.jpg",
    link: "marvel2"
});

var marvel3 = new app.singleComic({
    idComic: 3,
    idGenre: 3,
    name: "marvel3",
    number: 3,
    cover: "images/marvel3.jpg",
    link: "marvel3"
});

var admin = new app.singleUserType({
    idUserType: 1,
    name: "admin",
    description: "include BanHammer.*"
});

var user =  new app.singleUserType({
    idUserType: 2,
    name: "user",
    description: "// include BanHammer.*"
});

/*
var sheldon = new app.singleUser({
    idUser: 1,
    idUserType: admin.get("idUserType"),
    username: "sheldon",
    password: "bazinga",
    fullname: "Sheldon L Cooper"
});
*/

/*
var paulo = new app.singleUser({
    idUser: 2,
    idUserType: user.get("idUserType"),
    username: "paulo",
    password: "123456",
    fullname: "Paulo E Ojeda"
});
*/

var comicGroup = new app.ComicsCollection([
    marvel1, marvel2, marvel3
]);

/*var loginForm = new app.loginFormView();
$("#loginForm").html(loginForm.render());*/

/*

Used to render the whole gallery
var comicGroupView = new app.allComicsView({ collection: comicGroup});
$("#allComics").html(comicGroupView.render().el);
*/
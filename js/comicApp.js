var marvel1 = new app.singleComic({
    idComic: 1,
    idGenre: 1,
    name: "marvel1",
    number: 1,
    cover: "images/marvel1.jpg",
    link: "marvel1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
});

var marvel2 = new app.singleComic({
    idComic: 2,
    idGenre: 1,
    name: "marvel2",
    number: 2,
    cover: "images/marvel2.jpg",
    link: "marvel2",
    description: "sed do eiusmod tempor incididunt ut labore et"
});

var marvel3 = new app.singleComic({
    idComic: 3,
    idGenre: 1,
    name: "marvel3",
    number: 3,
    cover: "images/marvel3.jpg",
    link: "marvel3",
    description: "dolore magna aliqua. Ut enim ad minim veniam"
});

var marvel4 = new app.singleComic({
    idComic: 4,
    idGenre: 1,
    name: "marvel4",
    number: 4,
    cover: "images/marvel4.jpg",
    link: "marvel4",
    description: "quis nostrud exercitation ullamco laboris nisi ut aliquip"
});

var marvel4 = new app.singleComic({
    idComic: 4,
    idGenre: 1,
    name: "marvel4",
    number: 4,
    cover: "images/marvel4.jpg",
    link: "marvel4",
    description: "ex ea commodo consequat. Duis aute irure dolor"
});

var marvel5 = new app.singleComic({
    idComic: 5,
    idGenre: 1,
    name: "marvel5",
    number: 5,
    cover: "images/marvel5.jpg",
    link: "marvel5",
    description: "in reprehenderit in voluptate velit esse cillum dolore"
});

var marvel6 = new app.singleComic({
    idComic: 6,
    idGenre: 1,
    name: "marvel6",
    number: 6,
    cover: "images/marvel6.jpg",
    link: "marvel6",
    description: "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
});

var marvel7 = new app.singleComic({
    idComic: 7,
    idGenre: 1,
    name: "marvel7",
    number: 7,
    cover: "images/marvel7.jpg",
    link: "marvel7",
    description: "non proident, sunt in culpa qui officia deserunt"
});

var marvel8 = new app.singleComic({
    idComic: 8,
    idGenre: 1,
    name: "marvel8",
    number: 8,
    cover: "images/marvel8.jpg",
    link: "marvel8",
    description: "mollit anim id est laborum."
});

var marvel9 = new app.singleComic({
    idComic: 9,
    idGenre: 1,
    name: "marvel9",
    number: 9,
    cover: "images/marvel9.jpg",
    link: "marvel9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
});

var scifi0 = new app.singleComic({
    idComic: 10,
    idGenre: 2,
    name: "scifi0",
    number: 10,
    cover: "images/scifi0.jpg",
    link: "scifi0",
    description: "sed do eiusmod tempor incididunt ut labore et"
});

var scifi1 = new app.singleComic({
    idComic: 11,
    idGenre: 1,
    name: "scifi1",
    number: 11,
    cover: "images/scifi1.jpg",
    link: "scifi1",
    description: "dolore magna aliqua. Ut enim ad minim veniam"
});

var scifi2 = new app.singleComic({
    idComic: 12,
    idGenre: 2,
    name: "scifi2",
    number: 12,
    cover: "images/scifi2.jpg",
    link: "scifi2",
    description: "quis nostrud exercitation ullamco laboris nisi ut aliquip"
});

var scifi3 = new app.singleComic({
    idComic: 13,
    idGenre: 2,
    name: "scifi3",
    number: 13,
    cover: "images/scifi3.jpg",
    link: "scifi3",
    description: "ex ea commodo consequat. Duis aute irure dolor"
});

var scifi4 = new app.singleComic({
    idComic: 14,
    idGenre: 2,
    name: "scifi4",
    number: 14,
    cover: "images/scifi4.jpg",
    link: "scifi4",
    description: "in reprehenderit in voluptate velit esse cillum dolore"
});

var comicGroup = new app.ComicsCollection([
    scifi0, scifi1, scifi2, 
    scifi3, scifi4,
    marvel1, marvel2, marvel3, 
    marvel4, marvel5, marvel6, 
    marvel7, marvel8, marvel9
]);

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



/*var loginForm = new app.loginFormView();
$("#loginForm").html(loginForm.render());*/

/*

Used to render the whole gallery
var comicGroupView = new app.allComicsView({ collection: comicGroup});
$("#allComics").html(comicGroupView.render().el);
*/
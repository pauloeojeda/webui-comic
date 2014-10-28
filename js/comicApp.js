/*var admin = new app.singleUserType({
    idUserType: 1,
    name: "admin",
    description: "include BanHammer.*"
});

var user =  new app.singleUserType({
    idUserType: 2,
    name: "user",
    description: "// include BanHammer.*"
});*/

(function() { // initialize user store
    app.users_collection.fetch();
    var users = app.users_collection.toJSON();

    if (app.generic_collection.isEmpty(users)) {

        // add sheldon
        var admin = new app.singleUser({
            idUser: 1,
            //idUserType: admin.get("idUserType"),
            idUserType: 1,
            username: "sheldon",
            password: "bazinga",
            fullname: "Sheldon L Cooper"
        });

        app.users_collection.add(admin);
        admin.save();
        app.users_collection.fetch();
    }
})();

// Other JS code required
$(document).ready(function(){$(".alert").addClass("in").fadeOut(4500);

/* swap open/close side menu icons */
$('[data-toggle=collapse]').click(function(){
    // toggle icon
    $(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
});
});

// generate some data and use our handy function
/*var character1 = new app.singleCharacter({
    idCharacter: 1,
    name: "Avengers",
    link: "avengers",
    featured: false,
    description: ""
});

var character2 = new app.singleCharacter({
    idCharacter: 2,
    name: "Iron Man",
    link: "ironMan",
    featured: false,
    description: ""
});

var character3 = new app.singleCharacter({
    idCharacter: 3,
    name: "Captain America",
    link: "captainAmerica",
    featured: false,
    description: ""
});

var character4 = new app.singleCharacter({
    idCharacter: 4,
    name: "Hulk",
    link: "hulk",
    featured: false,
    description: ""
});

var character5 = new app.singleCharacter({
    idCharacter: 5,
    name: "Spider Man",
    link: "spiderMan",
    featured: false,
    description: ""
});

var character6 = new app.singleCharacter({
    idCharacter: 6,
    name: "Avengers",
    link: "avengers",
    featured: false,
    description: ""
});

var character7 = new app.singleCharacter({
    idCharacter: 7,
    name: "Avengers",
    link: "avengers",
    featured: false,
    description: ""
});

var character8 = new app.singleCharacter({
    idCharacter: 8,
    name: "Thor",
    link: "thor",
    featured: false,
    description: ""
});

var character9 = new app.singleCharacter({
    idCharacter: 9,
    name: "X-Men",
    link: "xMen",
    featured: true,
    description: ""
});

var character10 = new app.singleCharacter({
    idCharacter: 10,
    name: "Storm",
    link: "storm",
    featured: false,
    description: ""
});

var character11 = new app.singleCharacter({
    idCharacter: 11,
    name: "Fantastic Four",
    link: "fantasticFour",
    featured: false,
    description: ""
});

var character12 = new app.singleCharacter({
    idCharacter: 12,
    name: "Black Widow",
    link: "blackWidow",
    featured: false,
    description: ""
});

var character13 = new app.singleCharacter({
    idCharacter: 13,
    name: "S.H.I.E.L.D.",
    link: "shield",
    featured: false,
    description: ""
});

var character14 = new app.singleCharacter({
    idCharacter: 14,
    name: "Guardians of the Galaxy",
    link: "guardiansOfTheGalaxy",
    featured: false,
    description: ""
});

var character15 = new app.singleCharacter({
    idCharacter: 15,
    name: "Wolverine",
    link: "wolverine",
    featured: true,
    description: ""
});

var characters = new app.CharactersCollection([
    character1,
    character2,
    character3,
    character4,
    character5,
    character6,
    character7,
    character8,
    character9,
    character10,
    character11,
    character12,
    character13,
    character14,
    character15
]);

console.save(characters);*/

/*var characterPerComic1 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 1
});

var characterPerComic2 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 2
});

var characterPerComic3 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 3
});

var characterPerComic4 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 4
});

var characterPerComic5 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 5
});

var characterPerComic7 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 7
});

var characterPerComic8 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 8
});

var characterPerComic9 = new app.singleCharacterPerComic({
    idCharacter: 15,
    idComic: 9
});

var charactersPerComic = new app.CharactersPerComicCollection([
    characterPerComic1,
    characterPerComic2,
    characterPerComic3,
    characterPerComic4,
    characterPerComic5,
    characterPerComic7,
    characterPerComic8,
    characterPerComic9
]);

console.save(charactersPerComic);*/
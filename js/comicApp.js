var marvel1 = new app.singleComic({
    idComic: 1,
    idGenre: 1,
    name: "Wolverine",
    number: 131,
    cover: "images/marvel1.jpg",
    link: "marvel1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
});

var marvel2 = new app.singleComic({
    idComic: 2,
    idGenre: 1,
    name: "Wolverine",
    number: 132,
    cover: "images/marvel2.jpg",
    link: "marvel2",
    description: "sed do eiusmod tempor incididunt ut labore et"
});

var marvel3 = new app.singleComic({
    idComic: 3,
    idGenre: 1,
    name: "Wolverine",
    number: 133,
    cover: "images/marvel3.jpg",
    link: "marvel3",
    description: "dolore magna aliqua. Ut enim ad minim veniam"
});

var marvel4 = new app.singleComic({
    idComic: 4,
    idGenre: 1,
    name: "Wolverine",
    number: 134,
    cover: "images/marvel4.jpg",
    link: "marvel4",
    description: "quis nostrud exercitation ullamco laboris nisi ut aliquip"
});

var marvel5 = new app.singleComic({
    idComic: 5,
    idGenre: 1,
    name: "Wolverine",
    number: 135,
    cover: "images/marvel5.jpg",
    link: "marvel5",
    description: "in reprehenderit in voluptate velit esse cillum dolore"
});

var marvel6 = new app.singleComic({
    idComic: 6,
    idGenre: 1,
    name: "Wolverine",
    number: 136,
    cover: "images/marvel6.jpg",
    link: "marvel6",
    description: "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
});

var marvel7 = new app.singleComic({
    idComic: 7,
    idGenre: 1,
    name: "Wolverine",
    number: 137,
    cover: "images/marvel7.jpg",
    link: "marvel7",
    description: "non proident, sunt in culpa qui officia deserunt"
});

var marvel8 = new app.singleComic({
    idComic: 8,
    idGenre: 1,
    name: "Wolverine",
    number: 138,
    cover: "images/marvel8.jpg",
    link: "marvel8",
    description: "mollit anim id est laborum."
});

var marvel9 = new app.singleComic({
    idComic: 9,
    idGenre: 1,
    name: "Wolverine",
    number: 139,
    cover: "images/marvel9.jpg",
    link: "marvel9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
});

var scifi0 = new app.singleComic({
    idComic: 10,
    idGenre: 2,
    name: "Strange Adventures",
    number: 10,
    cover: "images/scifi0.jpg",
    link: "scifi0",
    description: "sed do eiusmod tempor incididunt ut labore et"
});

var scifi1 = new app.singleComic({
    idComic: 11,
    idGenre: 1,
    name: "Incredible Science Fiction",
    number: 11,
    cover: "images/scifi1.jpg",
    link: "scifi1",
    description: "dolore magna aliqua. Ut enim ad minim veniam"
});

var scifi2 = new app.singleComic({
    idComic: 12,
    idGenre: 2,
    name: "Strange Worlds",
    number: 12,
    cover: "images/scifi2.jpg",
    link: "scifi2",
    description: "quis nostrud exercitation ullamco laboris nisi ut aliquip"
});

var scifi3 = new app.singleComic({
    idComic: 13,
    idGenre: 2,
    name: "Zap",
    number: 13,
    cover: "images/scifi3.jpg",
    link: "scifi3",
    description: "ex ea commodo consequat. Duis aute irure dolor"
});

var scifi4 = new app.singleComic({
    idComic: 14,
    idGenre: 2,
    name: "Weird Science",
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

// Handy download function
(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console);

// We need to keep the functionality of being able to bindAll to entire object w/out specifying each function name individually
_.bindAll = function(obj){
    var funcs = Array.prototype.slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    _.each(funcs, function(f) {
        if(f !== 'constructor' && f != 'initialize' ){ // binding to the constructor / initialize is a dangerous practice that can cause problems
            obj[f] = _.bind(obj[f], obj);
        }
    });
    return obj;
};
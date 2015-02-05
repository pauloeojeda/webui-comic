(function() { // initialize user store
    app.users_collection.fetch();
    var users = app.users_collection.toJSON();

    if (app.util.isEmpty(users)) {

        // add sheldon
        var admin = new app.singleUser({
            idUser: 1,
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
$(document).ready(function(){
    // $(".alert").addClass("in").fadeOut(4500);
    /* swap open/close side menu icons */
    $('[data-toggle=collapse]').click(function(){
        // toggle icon
        $(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
    });
});
$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyClw6AQqfS-oSoqt49CeelF5MYKvPezJeg",
        authDomain: "portfolio-projects-ab6a0.firebaseapp.com",
        databaseURL: "https://portfolio-projects-ab6a0.firebaseio.com",
        projectId: "portfolio-projects-ab6a0",
        storageBucket: "portfolio-projects-ab6a0.appspot.com",
        messagingSenderId: "161578837683"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#submit").on("click", function (event) {
                    
        event.preventDefault();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();

        //creating the variable object that will push to the database
        var newContact = {
            name: name,
            email: email,
            message: message,
        };

        //pushes new input into the database
        if (name === "" && email === ""()) {
        }
        else {
            database.ref("New Contacts/").push(newContact);
        }

        //clears the form out for the next entry
        $(".form-control").val("");
     
    });
})
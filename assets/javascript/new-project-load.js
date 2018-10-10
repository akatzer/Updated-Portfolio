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

  //creates the snapshot when a new data entry is loaded into firebase
  database.ref("Projects/").on("child_added", function (childSnapshot) {

    //creation of variables based on the snapshot of the database
    var projectName = childSnapshot.val().projectName;
    var gitHubLink = childSnapshot.val().gitHubLink;
    var imageUrl = childSnapshot.val().imageUrl;


var newCard = $("<div class='card'>").append(
    $('<img class="card-img-top" src="' + imageUrl + '" alt="Project Image">'),
    
    $('<h5 id="project-name">').text(projectName),
    $('<a href="' + gitHubLink + '" class="btn btn-primary">Check it out!</a>')
)

$(".newCard").prepend(newCard);

});

$(document).ready(function(){
    $(function(){
        $(".card").fadeIn("slow");
    });  
});

})
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

    var uploader = document.getElementById("uploader")
    var fileButton = document.getElementById("fileButton")

  fileButton.addEventListener('change', function (e) {
        //get file
        var file = e.target.files[0];
        //create a store ref
        var storageRef = firebase.storage().ref('images/' + file.name);

        function getUrl() {
            storageRef.getDownloadURL().then(function (url) {
                $("#imageUrl").html(url);
            });
        }

        //upload file
        var task = storageRef.put(file);

        // update progress bar
        task.on('state_changed',
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },
            function error(err) {
            },
            function complete() {
                getUrl();
                
            }
        );
    });

    $("#submit").on("click", function (event) {
                    
        event.preventDefault();
        var projectName = $("#projectName").val().trim();
        var gitHubPagesLink = $("#gitHubPagesLink").val().trim();
        var gitHubRepoLink = $("#gitHubRepoLink").val().trim();
        var imageUrl = $("#imageUrl").text();

        //creating the variable object that will push to the database
        var newProject = {
            projectName: projectName,
            imageUrl: imageUrl,
            gitHubPagesLink: gitHubPagesLink,
            gitHubRepoLink: gitHubRepoLink,
        };

        //pushes new input into the database
        if (projectName === "" && gitHubPagesLink === "" && gitHubRepoLink === ""()) {
        }
        else {
            database.ref("Projects/").push(newProject);
            //clears the form out for the next entry
        $(".form-control").val("");
        $("#fileButton").val("");
        $("#imageUrl").text("");
        $("#uploader").val("0")
        }

        
    })

   

  







})

require("dotenv").config();

var fs = require("fs");
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var DotEnv = require("DotEnv");
var request = require("request");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userInput = process.argv[2];
var secondUserInput = process.argv.slice(3).join(" ");

//to get tweets
if(userInput === "my-tweets"){
    var params = {screen_name: "NagarNivi"};
    client.get("statuses/user_timeline", params, function(error, tweets, response){
        if(!error){
            console.log(tweets);
        }
    })
}


//to fetch spotify 
if(userInput === "spotify-this-song"){
    spotify.search({type: "track", query: secondUserInput}, function(error,data){
        if(!error){
            console.log(data);
        } 
        var songList = [];
        var songs = data.tracks.items;

        
    })
}

//OMDB command line:
var movieArgument = process.argv;

var movieName = "";
for(var i = 2; i < movieArgument.lenght; i++){
    if(i > 2 && i < movieArgument.lenght){
        movieName = movieName + "+" + movieArgument[i];
    }

    else {

        movieName += movieArgument[i];
    
      }
}

var URL = "http://www.omdbapi.com/?t=" + secondUserInput + "&y=&plot=short&apikey=trilogy";

console.log(URL);

request(URL, function(error,response,body){
    if (!error && response.statusCode === 200) {

    
     console.log("Release Year: " + JSON.parse(body).Year);
    }
});




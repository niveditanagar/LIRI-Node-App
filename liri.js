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

    spotify.search({type: "track", query: secondUserInput}, function(error,body){
    
        if(error){
            console.log("Error occured: " + error);
            return;
        } 
        
        else if(body){
           var songs = body.tracks.items;
           console.log(songs);
            
        }    
    })
}

//OMDB command line:
//var queryUrl = "http://www.omdbapi.com/?t=" + secondUserInput + "&y=&plot=short&apikey=trilogy";
//console.log(queryUrl);
//set up a request with the parameters: URL and the call back function.
//arguments passed in the call back function are error,response,body
//set up conditionals so when the command and movie is typed in the terminal, the movie information shows up
//console.log title
//console.log year
//console.log IMDB ratings and Rotten Tomatoes rating
//console.log language
//console.log plot
//console.log actors
//console.log country where the movie was produced

fs.readFile("random.txt", "utf-8", function(error, data){
    if(error){
        return console.log(error);
    }

    console.log(data);

    var textData = data.split(",");

    console.log(textData);

    if(userInput === "do-what-it-says"){
        //it should run spotify for the song I want it That Way
    }
})
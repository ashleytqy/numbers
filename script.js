$(document).ready(function(){

    (function() {
            [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {    
                new SelectFx(el);
            } );
        })();


$("#submit").click(function() {
        var month = document.getElementById("lit").selectedIndex;
        var day = document.getElementById("day").value;
        console.log(day, month);

        var x = document.getElementById("lit").selectedIndex;
        console.log(x);

        
var x = randomColor({luminosity: 'light'});
console.log(x);

document.getElementById("view").style.color = x;
    
    
 //"9" //use angular to build actual datepicker !!! two lines of month + date 
 // + cooler css pls !!
//need to convert month into number; need to make sure data exists...
var url = "http://numbersapi.com/" + month + "/" + day + "/date?json"

//var artSearch = "kiss"
//var artUrl = "http://scrapi.org/search/" + artSearch
//console.log(artUrl);

 $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: jsonParserMath
    });

function jsonParserMath() {
    $.getJSON(url, function (result) {
        console.log(result);
        var data = result.text;
        document.getElementById("view").innerHTML = data;
    });
};


});
})

/*

$( "#btn" ).click(function() {

var linkfront = "http://api.giphy.com/v1/gifs/search?q="
var randomNumber = Math.floor(Math.random() * 20)
console.log(randomNumber);
var apiAndLimit = "&offset=" + randomNumber.toString + "&api_key=dc6zaTOxFJmzC"


document.getElementById("square1").style.visibility = "visible";
document.getElementById("square2").style.visibility = "visible";

$( ".generatedImg" ).remove();

var input = document.getElementById("search").value;
input = input.trim(); //get rid of whitespace at the ends
input = input.replace(/ /g,  "\+"); //replace spaces in between with + sign
input = input.concat(apiAndLimit);
inputlink = linkfront.concat(input);

    $.ajax({
        type: 'GET',
        url: inputlink,
        dataType: 'json',
        success: jsonParser
    });
});

var numberArray = ["one", "two", "three", "four"]

function jsonParser() {
    $.getJSON(inputlink, function (result) {
        
    var maxNum = result.data.length ;
    
    var randomNumber1 = Math.floor(Math.random() * maxNum);
    var randomNumber2 = Math.floor(Math.random() * maxNum);
    var randomNumber3 = Math.floor(Math.random() * maxNum);
    var randomNumber4 = Math.floor(Math.random() * maxNum);

    console.log(randomNumber1, randomNumber2, randomNumber3, randomNumber4);

    var gif1 = result.data[randomNumber1]
    var gif2 = result.data[randomNumber2]
    var gif3 = result.data[randomNumber3]
    var gif4 = result.data[randomNumber4]

    function displayGif (i, number) {
            var pix = i.images.downsized.url;
            var x = document.createElement("img");
            x.setAttribute("src",  pix);
            x.setAttribute("class",  "generatedImg");
            x.setAttribute("id",  numberArray[number]);
            document.body.appendChild(x);
    }

    displayGif(gif1, 0);
    displayGif(gif2, 1);
    displayGif(gif3, 2);
    displayGif(gif4, 3);

           /*
           $.each(result.data, function(k, v){
                var pix = v.images.downsized.url;
                var x = document.createElement("img");
            x.setAttribute("src",  pix);
            x.setAttribute("class",  "generatedImg");
            x.setAttribute("id",  numberArray[k]);
            document.body.appendChild(x);
        
            }); */


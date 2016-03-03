$(document).ready(function(){

    (function() {
            [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {    
                new SelectFx(el);
            } );
        })();


$("#submit").click(function() {
        
        var month = document.getElementById("selectMonth").selectedIndex;
        var day = document.getElementById("selectDay").value;
        

        var randomColorGenerated = randomColor({luminosity: 'light'});
        document.getElementById("view").style.color = randomColorGenerated;
    
        var url = "http://numbersapi.com/" + month + "/" + day + "/date?json"

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

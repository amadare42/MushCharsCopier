// ==UserScript==
// @name         Mush Chars Copier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Amadare
// @match        http://mush.twinoid.com/chooseHero
// @grant        none
// ==/UserScript==
/* jshint -W097 */
var button = $("<button class='butmini'\>");
var input = $("<textarea class='butmini' rows='5'\>");

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function putNamesToClipboard(){
    var arr = $("h2").map(function(e, e1){return e1.innerHTML;})
    var message = "";
    for (var i = 0; i < arr.length; i++){
        message+=arr[i]+"\n";
    }
    input.val(message);
    input.focus();
    input.select();
    document.execCommand('copy');
    console.log(message);
}

function addButton(){
    button.html("Copy");
    button.on("click", putNamesToClipboard);
    $(".helpguide").prepend(button);
    $(".helpguide").prepend(input);
}

//logic

addStyleString(
"button.butmini {\
	background-color : #4E5162;\
    border: none;\
    vertical-align: top;\
	color : #fff;\
	display : inline-block;\
	zoom : 1;\
	display : inline;\
	font-size : 8pt;\
	height : 16px;\
	margin-right : -1px;\
	min-width : 16px;\
	outline : 1px solid #1D2028;\
	overflow : hidden;\
	padding-left : 4px;\
	padding-right : 6px;\
	text-align : center;\
	text-decoration : none !important;\
	background : -moz-linear-gradient(top, #008ee5 0%, #008ee5 50%, #0070dd 51%, #0070dd 100%);\
	background : -o-linear-gradient(top, #008ee5 0%,#008ee5 50%,#0070dd 51%,#0070dd 100%);\
	background : -ms-linear-gradient(top, #008ee5 0%,#008ee5 50%,#0070dd 51%,#0070dd 100%);\
	background : linear-gradient(to bottom, #008ee5 0%,#008ee5 50%,#0070dd 51%,#0070dd 100%);\
	filter : progid:DXImageTransform.Microsoft.gradient( startColorstr='#008ee5', endColorstr='#0070dd',GradientType=0 );\
	resize : none;\
    font-family: \"Segoe UI\", \"Lucida Grande\", \"Trebuchet MS\", Arial, \"lucida sans unicode\", sans-serif;\
}\
textarea.butmini { opacity: 0; width: 1px; position: fixed; }\
button.butmini:hover {\
	background : -moz-linear-gradient(top, #00B3ED 0%, #00B3ED 50%, #00A1E9 51%, #00A1E9 100%);\
	background : -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00B3ED), color-stop(50%,#00B3ED), color-stop(51%,#00A1E9), color-stop(100%,#00A1E9));\
	background : -webkit-linear-gradient(top, #00B3ED 0%,#00B3ED 50%,#00A1E9 51%,#00A1E9 100%);\
	background : -o-linear-gradient(top, #00B3ED 0%,#00B3ED 50%,#00A1E9 51%,#00A1E9 100%);\
	background : -ms-linear-gradient(top, #00B3ED 0%,#00B3ED 50%,#00A1E9 51%,#00A1E9 100%);\
	background : linear-gradient(to bottom, #00B3ED 0%,#00B3ED 50%,#00A1E9 51%,#00A1E9 100%);\
	filter : progid:DXImageTransform.Microsoft.gradient( startColorstr='#00B3ED', endColorstr='#00A1E9',GradientType=0 );\
}");

addButton();
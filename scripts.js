const min = 0
const max = 4 //increase this if we add more jokes

var joke0 = ["Why did the chicken ", " the road?", " To get to the "]; // Verb, Adj, Noun
var joke1 = ["What do you call a ", " with no legs?", "A really "]; // Noun, Adj, Verb
var joke2 = ["Which side of a ", " is ", " The one that "]; // Noun, Adj, Verb
var joke3 = ["What did one snowman ", " to the other?", " \"Do you smell "]; // Verb, Adj, Noun
var joke4 = ["What do you get when you ", " a bee and a ", " A ", " bug"]; // Verb, Noun, Adj

function createJoke() {
    //Get input words
	var noun = document.getElementById("noun").value;
	var verb = document.getElementById("verb").value;
	var adj = document.getElementById("adjective").value;
//	alert(">NOUN= " + noun + ", VERB= " + verb + ", ADJ= " + adj)

	var randNum = Math.floor(Math.random() * (max - min) + min); //should be an int in the range 0-4, inclusive
	var joke = getJoke(noun, verb, adj, randNum);
	
	document.getElementById('joke').innerHTML = joke

    return joke;
}


//Uses a switch case to pick a joke template, then builds the joke string and returns it 
function getJoke(noun, verb, adj, randNum) {
    var newJoke = "";
//	randNum = 3  //use if you need to test one joke individually 
    
    switch (randNum) {
        case 0:
             //looks like my newline trick isn't working... any other way we can put a break in this string?
            newJoke = joke0[0] + verb + joke0[1] + "<br />" + joke0[2] + adj + " " + noun + "!";
            break; 
        case 1:
            newJoke = joke1[0] + noun + joke1[1] + "<br />" + joke1[2] + adj + " " + verb;
            break;
        case 2:
            newJoke = joke2[0] + noun + joke2[1] + adj + "? <br />" + joke2[2] + verb + "!";
            break; 
        case 3:
            newJoke = joke3[0] + verb + joke3[1] + "<br />" + joke3[2] + adj + " " + noun + "?\"";
            break; 
        case 4:
            newJoke = joke4[0] + verb + joke4[1] + noun + "?<br />" + joke4[2] + adj + joke4[3] + "!";
            break; 
            
        // add a new case here if we want more jokes
        default: 
            newJoke = "lol";
    }
    
   // alert("getJoke(): randNum=" + randNum + ", built newJoke:\n" + newJoke);
    
    return newJoke;
}


//Clears the three word input fields and the joke output field 
function clearText() {
    	document.getElementById('joke').innerHTML = "";
    	document.getElementById('noun').value = "";
    	document.getElementById('verb').value = "";
    	document.getElementById('adjective').value = "";
}

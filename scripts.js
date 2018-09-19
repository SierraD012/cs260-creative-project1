var joke1 = ["Why did the", "the", "Road"]; // Noun, Verb, Adj

function getJoke() {
	return joke1;
}

function createJoke() {
    //Use an array containing a few different joke "templates" that we can use 
    // one or more of the user's input words on. The joke doesn't even have to make
    // any sense at all, I think it's funnier if it doesn't make sense actually. 
    //Choose a random index when the "create joke" button is clicked 
    // and use it to pick the joke template from the array.
    //Use one or more of the 3 input words to build the completed dumb joke.
    // Not really 100% sure how to replace the strings yet.
    //   Maybe we could just have like 3-4 joke templates and have a case for each one?
    //   Each case would just concatenate the correct word into place and return a finished string?
    //   There's probably a better way to do that but that's all I got right now haha
    
    //Dumb joke templates can be something like: 
    //"Why did the chicken <VERB> the road? To get to the <ADJ> <NOUN>"
    //
	
	var noun = document.getElementById("noun").value;
	var verb = document.getElementById("verb").value;
	var adj = document.getElementById("adjective").value;
	var joke = getJoke();
	document.getElementById('joke').innerHTML = joke[0] + " " + noun + " " + verb + 
		" " + joke[1] + " " + adj + " " + joke[2];
}

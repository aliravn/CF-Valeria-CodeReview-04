function renderBox (movieObject, i) {
	return `<article><img class="article-img" src="${movieObject.poster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movieObject.name}</h3><p>${movieObject.info}</p><div class="like-box"><button id="${i}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${i}" class="like-counter">${movieObject.likes}</div></div></article>`;
}
// separate function to render one box, which is included into loop with rendering of all boxes

for (var i = 0; i < movies.length; i++) {
	document.getElementById("article-container").innerHTML += renderBox(movies[i], i);
}

// loop that goes through MOVIES array of objects and creates movie article HTML-code for each of them
// while creating box, it puts inside data fetched from json file based on the [i] - index of element 
// it also puts [i] as an id for LIKE-button and adds [i] to id of the like-counter div - green circle  
// it also creates a new element in LIST array, which contains [i] and initial value of movies[i].likes property

var button = document.getElementsByClassName("like-btn"); 
// create a variable that contains an array of all buttons with class name "like-btn"

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
}
// loop that goes through BUTTON array of objects and hangs an EventListener on each of them
// EventListener contains addLike function, which upon calling will transmit this button's attributes inside 
// the function and gets it's id (which is [i]) to be able to know, which object from MOVIES array we refer to

function addLike(i) {
	movies[i].likes += 1; // increases number of likes after each button click
	var likesCircle = document.getElementById(`like${i}`);
	likesCircle.innerHTML = `${movies[i].likes}`; // changes the value displayed in green circle
}
// function that increases the value of movies[i].likes property for movie with index [i] when button is clicked
// it contains a variable likesCircle, that accesses div element for output ("green circle")

var sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sortMovies, false);
// eventListener on sorting button function to sort movies 

function sortMovies() {
	var list = [];
	// replaces all items in LIST array for current values of movies[i].likes and [i]
	for (var i = 0; i < movies.length; i++) {
		list[i] = [movies[i].likes, i]; 
	}

	// sorting multidimensional array based on the value of first element in each sub array, 
	// which is the current value of movies[i].likes
	list.sort(function(a,b) {
		return b[0] - a[0];
	});
	
	// cleans innerHTML of "article-container" before rendering articles according to new order of LIST array
	document.getElementById("article-container").innerHTML = "";

	// loop that renders boxes again according the the new LIST array order
	// index is equal to the second element of each  list[i] element (like [i] in previous function)
	// index is re-writn upon every new cycle of loop
	for (var i = 0; i < list.length; i++) {
		var index = list[i][1];
		document.getElementById("article-container").innerHTML += renderBox(movies[index], index);
	}

	// loop that goes through BUTTON array and hangs an EventListener on each after sorting rendering
	// index is re-written upon every new cycle of loop
	for (var i = 0; i < list.length; i++) {
		var index = list[i][1];
		button[index].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
	}	
}

// TESTING AREA
// console.log("Hello"); - testing connection between html / js files
// console.log(movies[1].movieLikes); - testing connection between html / js / json files
// console.log(typeof movies[1].movieLikes); - info about data type
// console.log(button); - to see what stored inside this array
// list.push([movies[i].likes, i]); // removed as unnecessary element in loop with initial box rendering
// (inside addLike function)
// console.log("hello from button " + i); - testing if [i] is transmitted 
// console.log(movies[i].movieLikes); // testing if number of likes has increased 
// console.log(likesCircle); // test if element is reached 

// (inside sortMovies function)
// list[i] = [movies[i].likes, Number(i)]; // in preliminary testing with LIST only of indexes, 
// after push second element became string 
// console.log("array created after each click on like button ", list);
// console.log("result of sorting is ", list);
// var button = document.getElementsByClassName("like-btn"); removed, as unnecessary element
// loop uses the initially  created button array and it is changed every time when content is rendered new
// var list = []; moved inside of sorting functon

// originally innerHtml in box rendering loop
// `<article><img class="article-img" src="${movies[i].poster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[i].name}</h3><p>${movies[i].info}</p><div class="like-box"><button id="${i}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${i}" class="like-counter">${movies[i].likes}</div></div></article>`;

// originally innerHTML in sorting function loop for re-rendering of new array
// `<article><img class="article-img" src="${movies[index].poster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[index].name}</h3><p>${movies[index].info}</p><div class="like-box"><button id="${index}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${index}" class="like-counter">${movies[index].likes}</div></div></article>`;
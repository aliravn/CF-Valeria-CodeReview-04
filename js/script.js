var list = [];

function renderBox (movieObject, i) {
	return `<article><img class="article-img" src="${movieObject.poster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movieObject.name}</h3><p>${movieObject.info}</p><div class="like-box"><button id="${i}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${i}" class="like-counter">${movieObject.likes}</div></div></article>`;
}

for (var i = 0; i < movies.length; i++) {
	document.getElementById("article-container").innerHTML += renderBox(movies[i], i);
	list.push([movies[i].likes, i]); // creates initial array to replace elements when button clicked
}

var button = document.getElementsByClassName("like-btn"); 


for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
}

function addLike(i) {
	movies[i].likes += 1; 
	var likesCircle = document.getElementById(`like${i}`);
	likesCircle.innerHTML = `${movies[i].likes}`;
	console.log("list[i] is " + list[i]);
	console.log(i);
	list[i] = [movies[i].likes, Number(i)];
	console.log(list[i]);
	console.log(list);
}


var sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sortMovies, false);
// eventListener on sorting button function to sort movies 

function sortMovies() {
	// replaces all items in LIST array for current values of movies[i].likes and [i]
	// for (var i = 0; i < movies.length; i++) {
	// 	list[i] = [movies[i].likes, i]; 
	// }

	// sorting multidimensional array based on the value of first element in each sub array, 
	// which is the current value of movies[i].likes
	list.sort(function(a,b) {
		return b[0] - a[0];
	});
	console.log(list);
	
	// cleans innerHTML of "article-container" before rendering articles according to new order of LIST array
	document.getElementById("article-container").innerHTML = "";

	// loop that renders boxes again according the the new LIST array order
	// index is equal to the second element of each  list[i] element (like [i] in previous function)
	// index is re-writn upon every new cycle of loop
	for (var i = 0; i < list.length; i++) {
		var index = list[i][1];
		document.getElementById("article-container").innerHTML += renderBox(movies[index], index);
	}

	for (var i = 0; i < list.length; i++) {
		var index = list[i][1];
		button[index].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
	}	
}
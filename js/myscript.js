var button = document.getElementsByClassName("like-btn"); //will be an array
var list = [];

for (var i = 0; i < movies.length; i++) {
	document.getElementById("article-container").innerHTML += `<article><img class="article-img" src="${movies[i].poster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[i].name}</h3><p>${movies[i].info}</p><div class="like-box"><button id="${i}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${i}" class="like-counter">${movies[i].likes}</div></div></article>`;
		list.push([movies[i].likes, i]); // creates initial array to replace elements when button clicked
}
console.log("array created after rendering the boxes ", list);

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
}

function addLike(i){
	// console.log("hello from button " + i); - testing if [i] is transmitted / OK
	movies[i].likes += 1; // increases number of likes after each button click
	// console.log(movies[i].movieLikes); // testing if number increased / OK
	var likesCircle = document.getElementById(`like${i}`); 
	// console.log(likesCircle); // test if eleent is reached / OK
	likesCircle.innerHTML = `${movies[i].likes}`; // changes the value displayed in green circle
}

// eventListener on sorting button function to sort movies 
var sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sortMovies, false);

function sortMovies() {
	for (var i = 0; i < movies.length; i++) {
		list[i] = [movies[i].likes,Number(i)];
	}
	console.log("array created after each click on like button ", list, i);
	
	list.sort(function(a,b) {
		return b[0] - a[0];
	});
	console.log("result of sorting is ", list); //result is an object

	document.getElementById("article-container").innerHTML = "";

	var button = document.getElementsByClassName("like-btn"); 

	for (var i = 0; i < list.length; i++) {
		var loc = list[i][1];
		document.getElementById("article-container").innerHTML += `<article><img class="article-img" src="${movies[loc].poster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[loc].name}</h3><p>${movies[loc].info}</p><div class="like-box"><button id="${loc}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${loc}" class="like-counter">${movies[loc].likes}</div></div></article>`;
		}

	for (var i = 0; i < list.length; i++) {
		var loc = list[i][1];
		button[loc].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
	}	
}



// TESTING AREA
// console.log("Hello"); - testing connection between html / js files
// console.log(movies[1].movieLikes); - testing connection between html / js / json files
// console.log(typeof movies[1].movieLikes); - info about data type
// console.log(button); - to see what stored inside this array
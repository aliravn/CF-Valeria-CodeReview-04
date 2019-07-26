for (var i = 0; i < movies.length; i++) {
	document.getElementById("article-container").innerHTML += `<article><img class="article-img" src="${movies[i].moviePoster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[i].movieName}</h3><p>${movies[i].movieInfo}</p><div class="like-box"><button id="${i}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${i}" class="like-counter">${movies[i].movieLikes}</div></div></article>`;
}

var button = document.getElementsByClassName("like-btn"); //will be an array

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
}

function addLike(i){
	// console.log("hello from button " + i); - testing if [i] is transmitted / OK
	movies[i].movieLikes += 1; // increases number of likes after each button click
	// console.log(movies[i].movieLikes); // testing if number increased / OK
	var likesCircle = document.getElementById(`like${i}`); // var to get the "green circle"
	// console.log(likesCircle); // test if eleent is reached / OK
	likesCircle.innerHTML = `${movies[i].movieLikes}`; // changes the value displayed in green circle
}

// TESTING AREA
// console.log("Hello"); - testing connection between html / js files
// console.log(movies[1].movieLikes); - testing connection between html / js / json files
// console.log(typeof movies[1].movieLikes); - info about data type
// console.log(button); - to see what stored inside this array

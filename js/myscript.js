// testing connection between html / js / json files
// console.log("Hello");
// console.log(movies[1].movieName);
var button = document.getElementsByClassName("like-btn"); //will be an array
//console.log(button);

for (var i = 0; i < movies.length; i++) {
	document.getElementById("article-container").innerHTML += `<article id="movie${i}"><img class="article-img" src="${movies[i].moviePoster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[i].movieName}</h3><p>${movies[i].movieInfo}</p><div class="like-box"><button id="${i}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div class="like-counter">${movies[i].movieLikes}</div></div>
</article>`;
}

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function(){addLike(this.getAttribute("id"))}, false);
}


console.log("Hello");
console.log(movies[1].movieName);

for (var i = 0; i < movies.length; i++) {
	document.getElementById("article-container").innerHTML += `<article id="${i}"><img class="article-img" src="${movies[i].moviePoster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[i].movieName}</h3><p>${movies[i].movieInfo}</p><div class="like-box"><button class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div class="like-counter">${movies[i].movieLikes}</div></div>
</article>`;
}
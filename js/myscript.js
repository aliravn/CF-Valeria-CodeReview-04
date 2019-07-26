for (var i = 0; i < movies.length; i++) {
	document.getElementById("article-container").innerHTML += `<article><img class="article-img" src="${movies[i].poster}" alt="moviePoster from JSON"><div class="article-text"><h3>${movies[i].name}</h3><p>${movies[i].info}</p><div class="like-box"><button id="${i}"class="like-btn"><span>Like</span><img src="img/like_green.png"></button><div id="like${i}" class="like-counter">${movies[i].likes}</div></div></article>`;
}

var button = document.getElementsByClassName("like-btn"); //will be an array

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

var sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sortMovies, false);

function sortMovies(multidimArr_with_i_and_movies_i_movieLikes) {
	console.log("hello from sort function");
}






// function ItemConstructor(name, price, id) {
//     this.likes = likes;
//     this.id = id;
// }

// function addToCart(i) {
//     var cartItem = new ItemConstructor(products[i].name, products[i].price, i);
//     cart.push(cartItem);
//     console.log(cart);
//     largeoutput.innerHTML += `<div id"${i}"><img src="${products[i].pic}"><p>${cart[i].name}</p><p>Price: ${cart[i].price} </p></div>`;
    // alert("Product has been added. Please view your shopping cart for details");
// }

// function sortMovies(multidimArr_with_i_and_movies_i_movieLikes) {
// 		var sortingList = [];
// 		for (var i = 0, i < movies.length, i++) {
// 			push.
// 		}
// }



// TESTING AREA
// console.log("Hello"); - testing connection between html / js files
// console.log(movies[1].movieLikes); - testing connection between html / js / json files
// console.log(typeof movies[1].movieLikes); - info about data type
// console.log(button); - to see what stored inside this array

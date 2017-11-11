
$(document).ready(function(){

// Holler at reddit, "Yo, I'm trying to feature your content. Let me get that hook up."
$.get("https://www.reddit.com/r/todayilearned.json", function(results){
  console.log(results);
  


// Iterating through the contents of the arrays in the api response

var ignition = results.data.children[0].data;


// Printing the contents of the end point to the dom

   $("#main").append('<article class="article"><section class="featuredImage"><img src="' + ignition.thumbnail + '"/></section>'
	              +  '<article class="article"><section class="articleContent"><a href="' + ignition.url + '"><h3>' + ignition.title + '</h3></a></section>'
                  +  '<article class="article"><section class="impressions">' + ignition.score + '</section></article>'
                  +  '<button>What else you wanna know?</button>'
                  +  '<div class="clearfix"></div></article>');







 
})




$.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=8389e0eb92a54c14a1fb48e362c1b002", function(results){
  console.log(results);


function addDiv(message) {
    $('.espn_slider').append(message);
}


for (var i = 1; i < 4; i++) {

     var html = '<div><img height="auto" width="800px" src="' + results.articles[i].urlToImage + '"/><div class="slide__caption"><h2>' + results.articles[i].title +'</h2></div></div>';
     addDiv(html);

 }

$('.espn_slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});

	
	
 })
})
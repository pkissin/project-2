$(document).ready(function() {
  // Espn
  var espnApi =
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=8389e0eb92a54c14a1fb48e362c1b002";
  // NatGeo
  var natGeoApi =
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=8389e0eb92a54c14a1fb48e362c1b002";
  // The economist
  var economistApi =
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=8389e0eb92a54c14a1fb48e362c1b002";
  // The Next Web
  var nextWebApi =
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=8389e0eb92a54c14a1fb48e362c1b002";
  // The verge
  var vergeApi =
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=8389e0eb92a54c14a1fb48e362c1b002";
  // Business Insider
  var buisInsdrApi =
    "https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=8389e0eb92a54c14a1fb48e362c1b002";
  var list;
  var results = [];
  var apiShortCut = [];
  apiShortCut.push(
    espnApi,
    natGeoApi,
    economistApi,
    nextWebApi,
    vergeApi,
    buisInsdrApi
  );

  var apis = [
    "ESPN",
    "National Geographic",
    "The Economist",
    "Next Web",
    "The Verge",
    "Business Insider"
  ];

  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //asNavFor: ".slider-for",
    dots: true,
    focusOnSelect: true
  });

  $("a[data-slide]").click(function(e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $(".slider-nav").slick("slickGoTo", slideno - 1);
  });

  function like(message) {
    $(".slider_caption a").click(function() {
      $(".response").append(message);
    });
  }

  function list(cls, dst, header) {
    $(cls).click(function() {
      $.ajax({
        type: "get",
        url: dst,
        success: function(results) {
          $(".response").empty();
          var topic = "<h1>" + header + "</h1>";
          $(".response").append(topic);

          for (var i = 0; i < 6; i++) {
            var list =
              '<div><div class="headline"><h2>' +
              results.articles[i].title +
              "</h2></div>";
            list +=
              '<div class="slide__copy">ESPM:' +
              results.articles[i].description +
              "</div>";
            list +=
              '<div><a class="learnMore" href="' +
              results.articles[i].url +
              '" target ="_blank">Learn more &#xbb;</a></div>';
            list += "</div>";

            $(".response").append(list);
          }
        }
      });
    });
  }
 
  for (var i = 0; i < apiShortCut.length; i++) {

    var html = '<div><img class="slider-hw" src=""/><div class="slide__caption">';
    html += '<div class="headline"><h2></h2></div>';
    html += '<div class="slide__copy"></div>';
    html += '<p><a class="learnMore" href="" target ="_blank">Learn more &#xbb;</a></p>';
    html += "</div></div>";
    
    $(".slider-nav").slick('slickAdd', html);

    (function(i, apiShortCut) {
      $.ajax({
        type: "get",
        url: apiShortCut[i],
        success: function(results) {
          (function(i) {
            var $div = $('div[data-slick-index=' + i + ']');
            $div.children('img').attr('src', results.articles[0].urlToImage);
          })(i)
        }
      })
    })(i, apiShortCut);
  }
  
  list(".espn", espnApi, "ESPN");
  list(".natGeo", natGeoApi, "National Geographic");
  list(".economist", economistApi, "the Economist");
  list(".nextWeb", nextWebApi, "Next Web");
  list(".verge", vergeApi, "The Verge");
  list(".buisInsdr", buisInsdrApi, "Business Insider");
});

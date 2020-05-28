let searchTerm = "";
let numOfArticles = 0;
let startYear = 0;
let endYear = 0;

$("button").on("click", function () {
  let queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    query +
    "&api-key=4gn3TKd7VtEwMZhzngAxbq4mAE0YQsI4";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});

//web_url
//headline



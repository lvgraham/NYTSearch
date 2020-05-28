

$("#searchBtn").on("click", function(){
    console.log('i work!');
    let article = $(this).attr("data-article");
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        article + "&api-key=4gn3TKd7VtEwMZhzngAxbq4mAE0YQsI4";
    
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        let results = response.data;

        for (var i = 0; i < results.length; i++) {

        let articleDiv = $('<div>')

        let p = $('<p>').text(results[i].headline);

        }

    })

});

// using this code for reference

// for (var i = 0; i < results.length; i++) {

//     // Step 3: uncomment the for loop above and the closing curly bracket below.

//     // ============= put step 3 in between these dashes ======================

//     // Make a div with jQuery and store it in a variable named animalDiv.
//     let animalDiv = $('<div>');
//     // Make a paragraph tag with jQuery and store it in a variable named p.
//     // Set the inner text of the paragraph to the rating of the image in results[i].
//     let p = $('<p>').text(results[i].rating);
//     // Make an image tag with jQuery and store it in a variable named animalImage.
//     let animalImage = $('<img>');
//     // Set the image's src to results[i]'s fixed_height.url.
//     animalImage.attr('src', results[i].images.fixed_height.url);
//     // Append the p variable to the animalDiv variable.
//     // Append the animalImage variable to the animalDiv variable.
//     animalDiv.append(p);
//     animalDiv.append(animalImage)
    
//     // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
//     $('#gifs-appear-here').prepend(animalDiv);

//     // ==================================
//     }
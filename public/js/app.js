console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	console.log('JS is loaded!'); // sanity check

	$.ajax({
		method:"GET",
		url: "http://murmuring-chamber-7862.herokuapp.com/api/articles",
		success: function(data) {
   			data.articles.forEach(function(e) {
   				var title = "<strong>Title: </strong>" + e.title;
   				var author = "<strong>Author: <strong>" + e.author;
   				var link = "<strong>Source: </strong><a href='"+ e.article_link + "'>Link</a>";
   				var image = "<img src=" + e.image + ">";
   				var editButton = "<button class='btn-primary'>" + "edit" + "</button>";
   				var deleteButton = "<button class='btn-primary delete'>" + "delete" + "</button>";
   				$("#index").append("<div class='articles'>" + "<div class='article-divs' id='article-image'>" + image + "</div>" + 
   					"<div class='article-divs' id='article-list'><p>" + "<br>" + title + "<br>" + author + "<br>" + link + "<br>" + 
   					editButton + deleteButton + "</p></div></div><hr />");
   			});
   		}
	});

	$("#submit").click(function(event) {
		event.preventDefault();
		$.ajax({
	      method: "POST",
	      url: "http://murmuring-chamber-7862.herokuapp.com/api/articles",
	      data: {
	        image: $("#subImage").val(),
	        title: $("#subTitle").val(),
	        link: $("#subLink").val(),
	        link: $("#subAuthor").val()
      	  },
      	  success: function (response) {
        	console.log("Added Article!");
      	  },
      	});
	});	

	$("#index").on("click", ".delete", function(event) {
    	console.log("you're a genius");
	});

});

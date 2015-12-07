console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	console.log('JS is loaded!'); // sanity check

	$.ajax({
		method:"GET",
		url: "http://localhost:3000/api/profile",
		success: function(data) {
			var name = "<strong>Name </strong>" + data.name;
			var location = "<strong>Current Location: </strong>" + data.current_location;
			var hobbies = "<strong>Hobbies: </strong>" + data.hobbies;
			var image = "<img src=" + data.github_profile_image + ">";
			$("#profile").append(image + "<br>" + name + "<br>" + location + "<br>" + hobbies);
   		}
	});


	$.ajax({
		method:"GET",
		url: "http://localhost:3000/api/articles",
		success: function(data) {
   			data.articles.forEach(function(e) {
   				var title = "<strong>Title: </strong>" + e.title;
   				var author = "<strong>Author: </strong>" + e.author;
   				var link = "<strong>Source: </strong><a href='"+ e.article_link + "'>Link</a>";
   				var image = "<img src=" + e.image + ">";
   				var editButton = "<button class='btn-primary'>edit</button>";
   				var deleteButton = "<button class='btn-primary delete'>delete</button>";
   				$("#index").append("<div class='articles' dataID='" + e._id + "'><div class='article-divs' id='article-image'>" + image + "</div>" + 
   					"<div class='article-divs' id='article-list'><p>" + "<br>" + title + "<br>" + author + "<br>" + link + "<br>" + 
   					editButton + deleteButton + "</p></div></div><hr />");
   			});
   		}
	});


	$("#search").click(function(event) {
		event.preventDefault();
		$.ajax({
			method:"GET",
			url: "http://localhost:3000/api/articles/",
			data: {
	        	searchTitle: $("#subImage").val(),
	        },
			success: function(data) {
				data.articles.forEach(function(e) {
					$("#search-list").append(e);
				});
			}
		});
	});

	$("#submit").click(function(event) {
		event.preventDefault();
		$.ajax({
	      method: "POST",
	      url: "http://localhost:3000/api/articles",
      	  success: function (data) {
      	  	newImage = $("#subImage").val();
	        newTitle = $("#subTitle").val();
	        newLink = $("#subLink").val();
	        newAuthor = $("#subAuthor").val();
        	var title = "<strong>Title: </strong>" + newTitle;
			var author = "<strong>Author: </strong>" + newAuthor;
			var link = "<strong>Source: </strong><a href='"+ newLink + "'>Link</a>";
			var image = "<img src=" + newImage + ">";
			var editButton = "<button class='btn-primary'>edit</button>";
			var deleteButton = "<button class='btn-primary delete'>delete</button>";
			$("#index").append("<div class='articles' dataID='" + data._id + "'><div class='article-divs' id='article-image'>" + image + "</div>" + 
				"<div class='article-divs' id='article-list'><p>" + "<br>" + title + "<br>" + author + "<br>" + link + "<br>" + 
				editButton + deleteButton + "</p></div></div><hr />");
      	  }
      	});
	});	

	$('#index').on('click', '.delete', function (event) {
	  var id = $(this).closest('.articles').attr('dataID');
	  deleteArticle(id);
	});

	function deleteArticle(id) {
	  $.ajax({
	    method: 'DELETE',
	    url: "http://localhost:3000/api/articles/:id",
	    success: function (data) {
	      $('div[dataID='+id+']').remove();

	      console.log("Delete Book!");
	    },
	    error: function () {
	      console.log("Fail to delete book!");
	    }
	  });
	}

});

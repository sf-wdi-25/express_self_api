console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//code attempt with out extensive use of toDo

// $.ajax({
// 	method: 'POST',
// 	url: '/api/books',
// 	data: {
// 		contributor: '$(".contributor").val()',
// 		title: "a",
// 		author: "b",
// 		genre: "c",
// 		notes: "d",
// 		synopsis: "e",
// 	},
// 	success: function (book) {
// 		console.log("BOOK CREATED");
// 		console.log("The books id is", book._id);
// 	}
// });

// $.ajax({
// 	method: 'GET',
// 	url: '/api/books',
// 	success: function show_books (data) {
// 		data.books.forEach(function (element){
// 			$(".bookList").append("<p>" + "<b>Contributor:  </b>" + element.contributor + "</p>");
// 			$(".bookList").append("<p>" + "<b>Title:  </b>" + element.title + "</p>");
// 			$(".bookList").append("<p>" + "<b>Author:  </b>" + element.author + "</p>");
// 			$(".bookList").append("<p>" + "<b>Genre:  </b>" + element.genre + "</p>");
// 			$(".bookList").append("<p>" + "<b>Notes:  </b>" + element.notes + "</p>");
// 			$(".bookList").append("<p>" + "<b>Synopsis:  </b>" + element.synopsis + "</p>" + "<br><br>");
// 		});
// 	}
// });


//extensive use of to do code

	var baseUrlBooks = '/api/books';

	var allBooks = [];

	var $booksList = $('#books-list');

	var $createBook = $('#create-book');

	var source = $('#books-template').html();
	var template = Handlebars.compile(source);

	var render = function() {
		$booksList.empty();
		var booksHtml = template({ books: allBooks });
		$booksList.append(booksHtml);
	};

	$.get(baseUrlBooks, function (data) {
		console.log(data);
		allBooks = data.books;
		render();
	});

	$createBook.on('submit', function (event) {
		event.preventDefault();
		var newBook = $(this).serialize();
		$.post(baseUrlBooks, newBook, function (data) {
			console.log(data);
			allBooks.push(data);
			render();
		});
		$createBook[0].reset();
		$createBook.find('input').first().focus();
	});

	$booksList

		.on('submit', 'update-book', function (event) {
			event.preventDefault();
			var bookId = $(this).closest('.book').attr('data-id');
			var bookToUpdate = allBooks.filter(function (book) {
				return book._id == bookId;
			}) [0];

			var updatedBook = $(this).serialize();

			$.ajax({
				type: 'PUT',
				url: baseUrlBooks + '/' + bookId,
				data: updatedBook,
				success: function(data) {
					allBooks.splice(allBooks.indexOf(bookToUpdate), 1, data);
				render();
				}

			});
		})

		.on('click', '.delete-book', function (event) {
			event.preventDefault();
			var bookId = $(this).closest('.book').attr('data-id');

			var bookToDelete = allBooks.filter(function (book) {
				return book._id == bookId;
			}) [0];

			$.ajax({
				type: 'DELETE',
				url: baseUrlBooks + '/' + bookId,
				success: function(data) {
					allBooks.splice(allBooks.indexOf(bookToDelete), 1);
					render();
				}
			});
		});

});

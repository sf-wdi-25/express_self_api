console.log("Sanity Check: JS is working!");

$(document).ready(function(){

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
			}) //[0];

			var updatedBook = $(this).seralize();

			$.ajax({
				type: 'PUT',
				url: baseUrlBooks + '/' + bookId,
				data: updatedBook,
				success: function(data) {
					allBooks.splice(allBooks.indexOf(bookToUpdate), 1);
				render();
				}

			});
		});

});

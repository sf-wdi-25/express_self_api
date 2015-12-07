console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var allBooks = [];

  var $profile = $('#profile');
  var $booksList = $('#books-list');
  var $createBook = $('#create-book');

  var source = $('#books-template').html();
  var template = Handlebars.compile(source);

  var render = function() {
    // empty existing todos from view
    $booksList.empty();

    // pass `allTodos` into the template function
    var booksHtml = template({ books: allBooks });

    // append html to the view
    $booksList.append(booksHtml);
  };

  $.get('/api/profile', function (data) {
    // console.log(data);
    var fullName = data.firstName + " " + data.lastName;
    var html = (
      '<img class="img-responsive" src="'+data.github_profile_image+'"><br>' +
      '<p><strong>Name: </strong>'+fullName+'</p>' +
      '<p><strong>Github: </strong><a href="'+data.github_link+'">@Link</a></p>' +
      '<p><strong>City: </strong>'+data.current_city+'</p>'
    );
    // console.log(html);
    $profile.append(html);
  });

  $.get('/api/weather', function (data) {
    // console.log(data);
    var html = (
      '<div class="text-justify">' +
        '<p><img src="'+data.image+'">'+data.temp+' F</p>'
    );
    console.log(html);
    $profile.append(html);
  });

  // GET all books on page load
  $.get('/api/books', function (response) {
    console.log(response);

    // set `allTodos` to todo data from API
    allBooks = response;

    // render all todos to view
    render();
  });

  // listen for submit even on form
  $createBook.on('submit', function (event) {
    event.preventDefault();

    // serialze form data
    var newBook = $(this).serialize();

    // POST request to create new todo
    $.post('/api/books', newBook, function (data) {
      console.log(data);

      // add new todo to `allTodos`
      allBooks.push(data);

      // render all todos to view
      render();
    });
    // reset the form
    $createBook[0].reset();
    $createBook.find('input').first().focus();
  });

  // add event-handlers to todos for updating/deleting
  $booksList

    // for update: submit event on `.update-book` form
    .on('submit', '.update-book', function (event) {
      event.preventDefault();
      // find the todo's id (stored in HTML as `data-id`)
      var bookId = $(this).closest('.book').attr('data-id');

      // find the todo to update by its id
      var bookToUpdate = allBooks.filter(function (ele) {
        return ele._id == bookId;
      })[0];

      // serialze form data
      var updatedBook = $(this).serialize();

      // PUT request to update todo
      $.ajax({
        method: 'PUT',
        url: '/api/books/'+bookId,
        data: updatedBook,
        success: function (response) {
          allBooks.splice(allBooks.indexOf(bookToUpdate), 1, response);
          render();
        }
      });
    })

    // for delete: click event on `.delete-todo` button
    .on('click', '.delete-book', function (event) {
      event.preventDefault();

      // find the todo's id (stored in HTML as `data-id`)
      var bookId = $(this).closest('.book').attr('data-id');

      // find the todo to delete by its id
      var bookToDelete = allBooks.filter(function (ele) {
        return ele._id == bookId;
      })[0];

      // DELETE request to delete todo
      $.ajax({
        type: 'DELETE',
        url: '/api/books/' + bookId,
        success: function(data) {
          // remove deleted todo from all todos
          allBooks.splice(allBooks.indexOf(bookToDelete), 1);

          // render all todos to view
          render();
        }
      });
    });

});

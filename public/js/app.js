console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var baseUrl = '/api/design_projects';

// array to hold designProject data from API
var alldesignProjects = [];

// element to display list of designProjects
var $designProjectsList = $('#design-projects-list');

var $createdesignProject = $('#create-design-project');

 // form to search designProjects api
var $searchDesignProject = $('#search-design-project');

// helper function to render all designProjects to view
// note: we empty and re-render the collection each time our designProject data changes
var render = function() {
  // empty existing designProjects from view
  $designProjectsList.empty();

  // pass `alldesignProjects` into the template function
  var designProjectsHtml = template({ designProjects: alldesignProjects });

  // append html to the view
  $designProjectsList.append(designProjectsHtml);
};

// GET all designProjects on page load
$.get(baseUrl, function (data) {
  console.log(data);

  // set `alldesignProjects` to designProject data from API
  alldesignProjects = data.designProjects;

  // render all designProjects to view
  render();
});

//listen to submit event on form for search input
$searchDesignProject.on('submit', function (even) {
  event.preventDefault();
  console.log($searchDesignProject);

  // serialze form data
  var searchDesignProject = $(this).serialize();

  //GET request to search query in designProjects api
  $.get(baseUrl + '/search?' + searchDesignProject, function (data) {
    console.log(data);

    alldesignProjects = data.designProjects;

    render();
  });

  // reset the form
  $searchDesignProject[0].reset();
  $searchDesignProject.find('input').first().focus();

});

// listen for submit even on form
$createdesignProject.on('submit', function (event) {
  event.preventDefault();

  // serialze form data
  var newdesignProject = $(this).serialize();

  // POST request to create new designProject
  $.post(baseUrl, newdesignProject, function (data) {
    console.log(data);

    // add new designProject to `alldesignProjects`
    alldesignProjects.push(data);

    // render all designProjects to view
    render();
  });

  // reset the form
  $createdesignProject[0].reset();
  $createdesignProject.find('input').first().focus();
});

// add event-handlers to designProjects for updating/deleting
$designProjectsList

  // for update: submit event on `.update-design-project` form
  .on('submit', '.update-design-project', function (event) {
    event.preventDefault();
    
    // find the designProject's id (stored in HTML as `data-id`)
    var designProjectId = $(this).closest('.designProject').attr('data-id');

    // find the designProject to update by its id
    var designProjectToUpdate = alldesignProjects.filter(function (designProject) {
      return designProject._id == designProjectId;
    })[0];

    // serialze form data
    var updateddesignProject = $(this).serialize();

    // PUT request to update designProject
    $.ajax({
      type: 'PUT',
      url: baseUrl + '/' + designProjectId,
      data: updateddesignProject,
      success: function(data) {
        // replace designProject to update with newly updated version (data)
        alldesignProjects.splice(alldesignProjects.indexOf(designProjectToUpdate), 1, data);

        // render all designProjects to view
        render();
      }
    });
  })
  
  // for delete: click event on `.delete-design-project` button
  .on('click', '.delete-design-project', function (event) {
    event.preventDefault();

    // find the designProject's id (stored in HTML as `data-id`)
    var designProjectId = $(this).closest('.designProject').attr('data-id');

    // find the designProject to delete by its id
    var designProjectToDelete = alldesignProjects.filter(function (designProject) {
      return designProject._id == designProjectId;
    })[0];

    // DELETE request to delete designProject
    $.ajax({
      type: 'DELETE',
      url: baseUrl + '/' + designProjectId,
      success: function(data) {
        // remove deleted designProject from all designProjects
        alldesignProjects.splice(alldesignProjects.indexOf(designProjectToDelete), 1);

        // render all designProjects to view
        render();
      }
    });
  });


});

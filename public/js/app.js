console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

$.ajax({
         method: 'GET',
         url: 'http://localhost:3000/api/profile',
         success: function(data) {
         	data.forEach(function (element){
         		// $('#profile').append("<p>" + element.name + "</p>")
         		$('#profile').append("<p>" + element.current_city + "</p>")

         
         })
       },  	
         error: function() { console.log('uh oh')

         }
    });

});
});

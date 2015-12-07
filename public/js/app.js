console.log("Sanity Check: JS is working!");

$(document).ready(function(){
			var base_url= 'https://frozen-bayou-5536.herokuapp.com';
	  		var toAddUser; 
	  		var toAddMessage;
	  		
	  		var toAddId= 0;
	  		var toAdddata= {user: toAddUser, message: toAddMessage};

	$.ajax({
		method: "GET",
		url: base_url + '/api/profile',
		success: function(element){
			element.data.forEach(function (e){
				var family = e.family_members;
				$('.profile_target').append("<p>" + "<strong>Name : </strong>" + e.name + "</p>"+ "<p>" +"<strong>Github account : </strong>" + "<a href='http://github.com/chan-d/''>  chan-d</a>" + "</p>" + "<p><strong> Current city: </strong>" +e.current_city +"</p>"+ "<p><strong> Family Members: </strong>" + "</p>" + "<p>" + family[0].name + ": "+ family[0].relationship + "</p>"+ "<p>" + family[1].name + ": "+ family[1].relationship + "</p>"+ "<p>" + family[2].name + ": "+ family[2].relationship + "</p>");

			});
		}
	});

	$.ajax({
		method: 'GET',
		url: base_url + '/api/music',
		success: function(data){
			data.data.forEach(function (element){
				$('.white').append("<p>"+ "<strong>Artist: </strong>" + element.artist + "</p>");
			});

		}
	});

	$.ajax({
		method: 'GET',
		url: base_url + '/api/messages',
		success: function getMessages (i) {
			i.data.forEach(function (element){
				$('.messages').append("<p> <strong> user: " + element.user + "</p>" + "<br>" + "<p> <strong> message: </strong>" + element.message + "</p>" + "<hr />");
			});
		}
	});

	$('#inputForm').on('submit', function (event) {
			//parseInt(toAddId++);
			event.preventDefault();
	  		toAddUser= $('#name').val();
	  		toAddMessage= $('#message').val();

			var toAdddata= {user: toAddUser, message: toAddMessage};
	  	$.ajax({
	  		method: "POST",
	  		url: base_url + '/api/messages',
	  		data: toAdddata,
	  		success: function(data){
	  			$('.messages').append("<p> <strong> user: " + toAddUser + "</p>" + "<br>" + 
	  								"<p> <strong> message: </strong>" + toAddMessage + "</p>" +
	  								"<p> <button type='button' class='btn btn-primary'>Edit</button>" + "<button type='button' class='btn btn-danger'>Delete</button> </p> <hr />");	
	  					$.ajax({
         					method: 'GET',
         					url: base_url + 'api/messages',
         				});
	  		
         	}	
         });
		
	});
	  		//res.json(messages);
	  	
      //    			$.ajax({
      //    				method: 'GET',
      //    				url: base_url + 'api/messages',
      //    				success: function getMessages (i) {
						// 	i.data.forEach(function (element){
						// 			console.log(toAdddata);
						// 		//$('.messages').append("<br><p>" + element + "</p>");
						// 	});
						// }
      //    			}
      //          		);
      //          }
	  			// element.forEach(function (e){
	  			// 	$('messages').append(e);
	  			// })
	  // 			success: function(data) {
	  // 		 	messages.append(data);
	  // 			}
			// });


			


	//});	
});






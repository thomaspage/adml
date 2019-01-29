var ADML = {

	initPage: function(pageName) {
		$(function(){
			$("#header").load("header.html", function() {
				$("#header-" + pageName).addClass('active')
			});
			$("#footer").load("footer.html");
		});
	},

	modalOpen: function(e) {
		// $('#modal').show();

		var jE = $(e)

		if (jE){
			var modalContent = jE.find('.modal-content')
			if (modalContent.length) {

				console.log($('#modal'))
				$('#modal').css('display', 'flex').find('.modal-content').replaceWith(modalContent.clone())
			}
		}

	},

	modalClose : function() {
		$('#modal').hide()
	},

	init: function() {
		// kick things off

	}

};

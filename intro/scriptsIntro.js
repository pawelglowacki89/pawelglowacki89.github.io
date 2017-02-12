$(function() {
	setTimeout(function() {
	    setInterval(function() {
	        document.getElementById('error').style.borderColor = '#FF3200';
	    }, 1000);
	}, 500);

	setInterval(function() {
	    document.getElementById('error').style.borderColor = 'black';
	}, 1000);

	$('html').click(function() {
		 window.location.href='main/index.html';
	})
});
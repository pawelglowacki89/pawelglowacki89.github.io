$(function() {

	function getdate(){ // clock start
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		if(s<10){
			s = '0'+s;
		}

		$('.timer').text(`${h} : ${m} : ${s}`);
		setTimeout(() => getdate(), 500)
	};

	getdate(); // clock end

	var linkMapper = {
		'amiWeb': 'https://erosspl.github.io/amiga', 
		'amiGit': 'https://github.com/erosspl/amiga',
		'rpsWeb': 'https://erosspl.github.io/rps',
		'rpsGit': 'https://github.com/erosspl/rps',
		'countryWeb': 'https://erosspl.github.io/country',
		'countryGit': 'https://github.com/erosspl/country',
		'rwdWeb': 'https://erosspl.github.io/psd-rwd',
		'rwdGit': 'https://github.com/erosspl/psd-rwd',
		'weatherWeb': 'https://erosspl.github.io/weatherApp',
		'weatherGit': 'https://github.com/erosspl/weatherApp'
	};

	function mapEvents(mappedObject) {
		for (var key in mappedObject) {
			registerEvents(key, mappedObject[key]);
		}
	}

	function registerEvents(buttonId, link) {
		var button = document.getElementById(buttonId);
		button.addEventListener('click',() => window.open(link));
	}
		
	mapEvents(linkMapper);

	var togSrc = ['../icons/drawer.png', '../icons/drawerOpen.png', '../icons/preferences.png', '../icons/preferencesOpen.png', '../icons/floppySystem.png', '../icons/floppySystemSelected.png'];
	
	$('#doc').dblclick(() => $('#infoBox').toggle(0, () => $('#techBox, #imageBox').hide()));
	$('#gall').dblclick(() => $('#imageBox').toggle(0, () => $('#infoBox, #techBox').hide()));
	$('#pref').dblclick(() => $('#techBox').toggle(0, () => $('#infoBox, #imageBox').hide()));
	$('#get').dblclick(() => window.location = 'cv.pdf');

	$('#doc').click(function() {
		$(this).toggleClass('invert');
	});
	$('#gall').click(function() {
 		this.src = togSrc[this.src.match('../icons/drawer.png') ? 1 : 0];
	});
	$('#pref').click(function() {
		this.src = togSrc[this.src.match('../icons/preferences.png') ? 3 : 2];
	});
	$('#get').click(function() {
		this.src = togSrc[this.src.match('../icons/floppySystem.png') ? 5 : 4];
	});		

});
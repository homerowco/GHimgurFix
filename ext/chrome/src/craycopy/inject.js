(function() {
	for( e of document.querySelectorAll( 'img[src*="//i.imgur"]' ) ) {
		e.src = 'https://craycopy.com/i/'+e.src;
	}
})();
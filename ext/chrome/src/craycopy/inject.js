(function() {
	for( e of document.querySelectorAll( 'img[src*="//i.imgur"]' ) ) {
		if( e.src.indexOf('craycopy') === -1 ) {
			e.src = 'https://craycopy.com/i/'+e.src;
		}
	}
})();
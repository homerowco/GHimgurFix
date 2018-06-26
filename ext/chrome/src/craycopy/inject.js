(function() {
	for( e of document.querySelectorAll( 'img[src*="//i.imgur"]' ) ) {
		if( e.src.indexOf('craycopy') === -1 ) {
			e.src = 'https://craycopy.com/i/'+e.src;
		}
	}

	// link fix for highslide thumbnail viewer functionality
	for( e of document.querySelectorAll( 'a[href*="//i.imgur"]' ) ) {
		if( e.href.indexOf('craycopy') === -1 ) {
			e.href = 'https://craycopy.com/i/'+e.href;
		}
	}

})();
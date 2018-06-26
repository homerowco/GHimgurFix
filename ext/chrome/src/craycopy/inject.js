(function() {
	for( e of document.querySelectorAll( 'img[src*="//i.imgur.com"]' ) ) {
		if( e.src.indexOf('craycopy') === -1 ) {
			e.src = 'https://craycopy.com/i/'+e.src;
		}
	}
	for( e of document.querySelectorAll( 'a[href*="//i.imgur.com"]' ) ) {
		if( e.href.indexOf('craycopy') === -1 ) {
			e.href = 'https://craycopy.com/i/'+e.href;
		}
	}
})();
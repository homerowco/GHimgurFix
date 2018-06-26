(function() {
	var f = '://i.imgur.com/',
		r = 'https://craycopy.com/';
	for( e of document.querySelectorAll( 'img.bbc_img[src*="'+f+'"]' ) ) {
		if( e.src.indexOf(r) === -1 ) {
			e.src = r+'i/'+e.src;
		}
	}
	for( e of document.querySelectorAll( 'a.highslide[href*="'+f+'"]' ) ) {
		if( e.href.indexOf(r) === -1 ) {
			e.href = r+'i/'+e.href;
		}
	}
})();
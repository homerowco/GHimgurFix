(function() {
	var K = '://i.imgur.com/',
	    e = 'https://craycopy.com/',
	    E = [['img.bbc_img[','src'],['a.highslide[','href']],
	    G,H,A;
	for( G in E ) {
		for( H of document.querySelectorAll( E[G][0]+E[G][1]+'*="'+K+'"]' ) ) {
			( A = H[E[G][1]] ) && -1 === A.indexOf(e) && ( H[E[G][1]] = e+'i/'+A );
		}
	}
})();
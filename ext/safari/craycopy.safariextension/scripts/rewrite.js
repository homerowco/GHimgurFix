document.addEventListener( 'beforeload', function( evt ) {
	if (evt.target instanceof HTMLImageElement && /^https?:\/\/i\.imgur\.com\/.+\..+/.test( evt.url ) ) {
		evt.preventDefault();
		evt.target.src = 'https://craycopy.com/i/'+evt.target.src;
	}
}, true);
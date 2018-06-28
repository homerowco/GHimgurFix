chrome.webRequest.onBeforeSendHeaders.addListener(
	function( e ) {
		var init = e.initiator || e.documentUrl;
		if( init.indexOf( 'geekhack.org' ) !== -1 ) {
			e.requestHeaders.forEach( function( header ) {
				if( header.name.toLowerCase() === "referer" ) {
					header.value = 'https://i.imgur.com/';
				}
			});
		}
		return {requestHeaders: e.requestHeaders};
	},
	{urls: ['https://i.imgur.com/*']},
	['blocking', 'requestHeaders']
);
chrome.webRequest.onBeforeSendHeaders.addListener(
	function( e ) {
		if( e.initiator.indexOf( 'geekhack.org' ) !== -1 ) {
			e.requestHeaders.forEach( function( header ) {
				if( header.name.toLowerCase() == "referer" ) {
					header.value = 'https://imgur.com/';
				}
			});
		}
		return {requestHeaders: e.requestHeaders};
	},
	{urls: ['https://i.imgur.com/*']},
	['blocking', 'requestHeaders']
);
chrome.alarms.create("5min", {
	delayInMinutes: 5,
	periodInMinutes: 5
});

chrome.alarms.onAlarm.addListener( function( id ) {
	if( id.name === "5min" ) {
		GH.unread();
	}
});

chrome.notifications.onClicked.addListener( function( id) {
	if( id.indexOf( 'ghunread' ) !== -1 ) {
		chrome.tabs.create({url: "https://geekhack.org/index.php?action=pm"}, function(tab) {
			chrome.tabs.executeScript( tab.id, {code:'setTimeout(function(){window.scrollBy(0, 100000)},600);'} );
		});
	}
});

var HELPER = new function() {
	this.get = function( url, cb ) {
		var xhr = new XMLHttpRequest();
		xhr.open( 'GET', url, true );
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				cb( xhr.responseText );
			}
		}
		xhr.send();
	};
};

var GH = new function() {
	this.unread = function() {
		var container, nodes, messages = 0;
		var resp = HELPER.get('https://geekhack.org/', function( resp ) {
			if( resp ) {
				container = document.implementation.createHTMLDocument().documentElement;
				container.innerHTML = resp;
				nodes = container.querySelectorAll( '#button_logout' );
				if( nodes.length === 1 ) {
					nodes = container.querySelectorAll( 'li#button_pm span.firstlevel strong' );
					if( nodes.length === 1 ) {
						messages = nodes[0].innerText;
					}
				}
			}
			if( messages > 0 ) {
				chrome.storage.local.get( 'ghunread', function( items ) {
					if( !!items.ghunread || items.ghunread != messages ) {
						if( items.ghunread != messages ) {
							chrome.notifications.clear('ghunread'+items.ghunread, function(){});
						}
						chrome.notifications.create(
							'ghunread'+messages,
							{
								title: 'Geekhack: '+messages+' new Message'+(messages>1?'s':''),
								message: '',
								type: 'basic',
								iconUrl: 'https://geekhack.org/favicon.ico'
							},
							function() {
								chrome.storage.local.set({'ghunread':messages});
							}
						);
					}
				});
			}
		});
	};
};
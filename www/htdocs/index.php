<?php

$url = explode('/', $_SERVER['REQUEST_URI'] );
if( count( $url ) > 2 && strpos( $url[1], 'i') !== false && strpos( $url[2], 'http') !== false && strpos( $url[4], 'i.imgur.com') !== false ) {
	array_shift($url);
	array_shift($url);
	$url = implode('/', $url);
	preg_match('/\.(png|gif|jpg)/', $url, $m );
	if( $m[1] ) {
		header( 'Content-type: image/'.(($m[1]=='jpg')?'jpeg':$m[1]));
		readfile( $url );
		exit;
	}
}
echo '404';

?>
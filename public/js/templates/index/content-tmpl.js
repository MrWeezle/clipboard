define( function () {
	return [
		'<h1>Type your username and hit return</h1>',
		'<span class="inputwrap">',
		'	<input type="text">',
		'	<small>Valid characters: a-z, 0-9, - and _</small>',
		'</span>',
		'<div>You\'ve typed an invalid character.</div>'
	].join('');
});
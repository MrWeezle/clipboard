define( function () {
	return [
		'<h1>Bitte gib deinen Usernamen ein und drücke "Enter"</h1>',
		'<span class="inputwrap">',
		'	<input type="text">',
		'	<small>Gültige Zeichen: a-z, 0-9, - und _</small>',
		'</span>',
		'<div>Es wurde ein ungültiges Zeichen eingegeben.</div>'
	].join('');
});

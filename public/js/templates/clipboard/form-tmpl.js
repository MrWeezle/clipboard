define(function () {
	return [
		'<input type="text" class="note_input" placeholder="Notiz eingeben und Enter drücken">',
		'<button type="button" class="ir">Info</button>',
		'<ul class="menu">',
		'	<li>',
		'		<span>Notiz doppelklicken zum Editieren.</span>',
		'	</li>',
		'	<li>',
		'		<span>Do not post private notes! This service<br> doesn\'t require user authentication.</span>',
		'	</li>',
		'	<li>',
		'		<a href="https://github.com/MrWeezle/clipboard">View forked source on GitHub</a>',
		'	</li>',
		'</ul>'
	].join('');
});

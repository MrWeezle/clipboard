define(function () {
	return [
		'<input type="text" class="note_input" placeholder="Enter your note and hit return">',
		'<button type="button" class="ir">Info</button>',
		'<ul class="menu">',
		'	<li>',
		'		<span>Double-click note text for editing.</span>',
		'	</li>',
		'	<li>',
		'		<span>Do not post private notes! This service<br> doesn\'t require user authentication.</span>',
		'	</li>',
		'	<li>',
		'		<a href="https://github.com/herschel666/clipboard">View source on GitHub</a>',
		'	</li>',
		'</ul>'
	].join('');
});
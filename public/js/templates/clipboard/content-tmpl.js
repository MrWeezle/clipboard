define( function () {
	return [
		'<div class="note" id="<%= _id %>" style="left: <%= pos_x %>px; top: <%= pos_y %>px;">',
		'	<div class="note_top clearfix">',
		'		<div class="delete" tabindex="0" title="Delete"></div>',
		'	<div class="time"><%= timestamp %></div>',
		'	</div>',
		'	<p class="text"><%= unescape(text) %></p>',
		'</div>'
	].join('');
});
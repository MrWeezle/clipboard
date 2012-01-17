#Clipboard

Clipboard is a little Node.js-application I wrote to get in touch with Express.js and Mongoose.js. I also used this application to make my first steps with Require.js.

##Installing Clipboard

To install Clipboard go to your Terminal and type:

	git clone git@github.com:herschel666/clipboard.git
	cd clipboard
	npm install -d
	node server

##How it works

When you come the the Clipboard-startpage you're required to type your username and hit enter. This opens a clipboard for the specified name and all created notes are filed under this name. This means that you can have as many different clipboards as you want.

But there is no user authentication. So when you use this application in public, a user can - theoretically - access all notes.

The notes created on the clipboard can be dragged to the position you want. They are also editable by double-clicking the note text.

##The application

On the server-side the application runs on [Node.js](http://nodejs.org/). I used the [Express.js](http://expressjs.com/)-framework to build it and [Mongoose.js](http://mongoosejs.com/) to file the notes (text and position) in a [MongoDB](http://www.mongodb.org/)-database.

On the client-side the application is build with [Backbone.js](http://documentcloud.github.com/backbone/) and [jQuery](http://jquery.com/). To organize and load the JavaScript-files I rely on [Require.js](http://requirejs.org/) and choose this approach: [Modular JavaScript \& Backbone.js](https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/modular-backbone).

To provide the draggability of the notes I used [jQueryUI](http://jqueryui.com/).

###Misc

If you have any questions write me an email (<mail@emanuel-kluge.de>) or contact me on twitter ([Herschel_R](http://twitter.com/Herschel_R)).
*annyang!*
-----------------------------------------------

A tiny javascript SpeechRecognition library that lets your users control your site with voice commands.

annyang has no dependencies, weighs just 2kb, and is free to use and modify under the MIT license.

Demo
----
[Visit the demo and docs site](https://www.talater.com/annyang)

Usage
-----
It's as easy as adding [one javascript file](//cdnjs.cloudflare.com/ajax/libs/annyang/0.2.0/annyang.min.js) to your document, and defining the commands you want.
````html
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/0.2.0/annyang.min.js"></script>
<script>
if (annyang) {
  // Let's define a command.
  var commands = {
    'show tps report': function() { $('#tpsreport').show(); }
  };

  // Initialize annyang with our commands
  annyang.init(commands);

  // Start listening.
  annyang.start();
}
</script>
````

**For more details, [visit the demo and docs site](https://www.talater.com/annyang).**

Author
------
Tal Ater: [@TalAter](https://twitter.com/TalAter)

License
-------
Licensed under [MIT](https://github.com/TalAter/annyang/blob/master/LICENSE).

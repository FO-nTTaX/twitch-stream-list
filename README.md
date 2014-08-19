twitch-stream-list
==================

This is an easy example of how to put in a stream list on a homepage.

The file index.html is a very easy example of how to do a streamlist. 
As it is in this repository, each file is in the same folder, and if you want to put the files into different folders, you will have to change the includes. The php part is very simple, all the work is done in the javascript part. 

The javascript part relies on jQuery, so be sure to include it.

I do not guarantee that this will work everywhere and forever, but it worked for me and i hope it will be helpful for someone.

example
=======

to use this script, just put this at the place of your homepage where you want it:

```&lt;div class="fotwitchstreams"&gt;
  &lt;div class="fotwitchstream"&gt;
    &lt;input type="hidden" class="fotwitchstreamvalue" value="{{twitch name}}" /&gt;
    &lt;span class="fotwitchstreamname"&gt;{{display name}}&lt;/span&gt;
    &lt;span style="float:right;" class="fotwitchstreamlive"&gt;&lt;/span&gt;
  &lt;&lt;/div&gt;
&lt;/div&gt;```

Repeat the part with the class "fotwitchstream" as often as you need it and replace "{{twitch name}}" with the part of the url after "twitch.tv/" and "{{display name}}" with whatever you want to have displayed as streamname.

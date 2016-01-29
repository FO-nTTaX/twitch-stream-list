/*
 * copyright 2014-2016 - FO-nTTaX
 * see the license file for licensing information
 */

$(document).ready(
  function() {
    $('.fotwitchstreams').children('.fotwitchstream').each(
      function() {
        var queryString = "fo_twitch.php?stream=" + $(this).children('input.fotwitchstreamvalue').val();
        var currentElement = this;
        $.getJSON(queryString, function(data) {
          if(data.stream != null) {
            $(currentElement).children('span.fotwitchstreamlive').text("Online");
          } else {
            $(currentElement).children('span.fotwitchstreamlive').text("Offline");
          }
        });
      }
    );
  }
);

<?php

/*
 * copyright 2014 - FO-nTTaX
 * see the license file for licensing information
 */

echo file_get_contents('https://api.twitch.tv/kraken/streams/'.$_GET['stream']);

?>

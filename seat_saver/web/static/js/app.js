// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

/*
	This grabs the div we just set up by its ID and then calls Elm.embed
	passing in the name of our module Elm.SeatSaver and the div that we just captured
	
	Really isn't my style. Gonna stick to elm consuming the Json if possible.
*/
var elmDiv = document.getElementById('elm-main')
  , elmApp = Elm.embed(Elm.SeatSaver, elmDiv);
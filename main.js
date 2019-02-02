var jquery = require("jquery")
var Nightmare = require("nightmare");

new Nightmare({show: true})
    .goto("https://www.google.com/")
    .wait(5000)
    .type(".gLFyf", "Patagonia boardshorts")
    .click("[name=btnK]")
    .wait(2000)
    .screenshot("craigs.png")
    .end()
    // Execute commands
    .then(function() {
      console.log("Done!");
    })
    // Catch errors
    .catch(function(err) {
      console.log(err);
    });

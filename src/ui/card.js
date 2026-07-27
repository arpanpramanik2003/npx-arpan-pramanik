const boxen = require("boxen");

module.exports = function card(content, title = "") {

    console.log(

        boxen(content, {

            title,

            titleAlignment: "center",

            borderStyle: "round",

            borderColor: "cyan",

            padding: 1,

            margin: 1

        })

    );

};
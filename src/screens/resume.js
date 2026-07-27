const boxen = require("boxen");
const config = require("../config");
const { openUrl } = require("../utils");

module.exports = async () => {
    const resumeUrl = config.resume;

    console.log(
        boxen(
            `📄 Resume

Opening latest resume PDF from:

${resumeUrl}

Thank you for your interest!`,
            {
                title: " RESUME ",
                titleAlignment: "center",
                borderStyle: "round",
                borderColor: "yellow",
                padding: 1,
                margin: 1
            }
        )
    );

    await openUrl(resumeUrl);
};

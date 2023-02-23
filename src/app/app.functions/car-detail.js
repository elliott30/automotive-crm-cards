// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {

    sendResponse({
      sections: [
        {
          "type": "image",
          "src": "https://www.ui-extensibility.com/hubfs/welcome-sign.png",
          "alt": "A Welcome Sign sample image",
        },
      ],
    });
 
};

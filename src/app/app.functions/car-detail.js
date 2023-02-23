// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {

    sendResponse({
      sections: [
        {
          "type": "tile",
          "content": [
          {
            "type": "heading",
            "text": "Car Details"
          },
          {
            "type": "tag",
            "text": "Purchased",
            "variant": "success",
          },
          {
            "type": "text",
            "format": "markdown",
            "text": "**Car: ** 541774"
          },
          
          {
            "type": "text",
            "format": "markdown",
            "text": "**Description: **Matching number xw gt candy apple red with black interior factory manual. Exceptional sedan in the flesh. All original matching motor, gearbox, diff, fuel lines etc come with this vehicle. "
          },
          {
            "type": "button",
            "variant": "primary",
            "text": "View in Titan"
          },
        ]
      },
      {
        "type": "tile",
        "content": [
          {
            "type": "heading",
            "text": "Car Images"
          },
          {
            "type": "image",
            "src": "https://23786408.fs1.hubspotusercontent-na1.net/hubfs/23786408/car-1.jpg",
            "alt": "Car",
          },
          {
            "type": "buttonRow",
            "buttons": [
              {
                "type": "button",
                "variant": "primary",
                "text": "1"
              },
              {
                "type": "button",
                "text": "2"
              },
              {
                "type": "button",
                "text": "3"
              },
              {
                "type": "button",
                "text": "4"
              }
            ]
          }
      ]
    }
  ],
});
 
};

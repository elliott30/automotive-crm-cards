// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {

    sendResponse({
      sections: [
    
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
 
   
  ],
});
 
};

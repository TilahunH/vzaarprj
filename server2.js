var request = require('postman-request');
 
var options = {
  url: 'https://api.vzaar.com/api/v2/videos',
  headers: {
    'X-Auth-Token': "zfyazL_sYhSY92UfE4FT", 
    'X-Client-Id': "vying78th-sap"
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.data[0].embed_code);
    //console.log();
  }
}
 
request(options, callback);
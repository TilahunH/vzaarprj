var express = require('express');
var router = express.Router();


var request = require('request');
var headers = {
    'X-Client-Id': 'vying78th-sap',
    'X-Auth-Token': 'zfyazL_sYhSY92UfE4FT'
  
};

// Configure the request
var options = {
    url: 'https://api.vzaar.com/api/v2/videos',
    method: 'POST',
    headers: headers,
    form: { 'guid': 'node','title':'' }
};
router.post('/', function (req, res) {
    console.log(options.form.guid + " " + options.form.title);
    options.form.guid = req.body.guid;
    options.form.title = req.body.title;
    request(options, function (error, response, body) {
        
        if (!error && response.statusCode == 201) {
            return res.status(200).send(body);
        } else {
            console.error(`problem with request: ${response.statusCode}`);
        }
    });
});
module.exports = router;
var express = require('express');
var router = express.Router();


var request = require('request');
var headers = {
    'X-Client-Id': 'vying78th-sap',
    'X-Auth-Token': 'zfyazL_sYhSY92UfE4FT',
    'Content-Type': 'application/json'
};

// Configure the request
var options = {
    url: 'https://api.vzaar.com/api/v2/signature/single',
    method: 'POST',
    headers: headers,
    form: { 'uploader': 'node' }
};
router.get('/', function (req, res) {
    request(options, function (error, response, body) {
        //console.log(response);
        if (!error && response.statusCode == 201) {
            var info = JSON.parse(body);
            res.render('upload',info.data);
            //return res.status(200).send(body);
        } else {
            console.error(`problem with request: ${response.statusCode}`);
        }
    });
});
module.exports = router;
var express = require('express');
var router = express.Router();


var request = require('request');
var headers = {
    'X-Client-Id': 'vying78th-sap',
    'X-Auth-Token': 'zfyazL_sYhSY92UfE4FT',
    
};

// Configure the request
var options = {
    url: 'https://api.vzaar.com/api/v2/videos',
    method: 'get',
    headers: headers
};
router.get('/', function (req, res) {
    console.log(req.query.id);
    options.url = "https://api.vzaar.com/api/v2/videos/" + req.query.id;
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.render('play',info.data);
            
        } else {
            //console.log(body);
            console.error(`problem with request: ${response.statusCode}`);
        }
    });
});
function getVideo(resBody) {
    var videoItem = {};
    videoItem.id = resBody.data.id;
    videoItem.title = resBody.data.title;
    videoItem.embed_code = resBody.data.embed_code;

    return videoItem;

}

module.exports = router;
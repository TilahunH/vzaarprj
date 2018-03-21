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
    url: 'https://api.vzaar.com/api/v2/videos',
    method: 'get',
    headers: headers
};
router.post('/', function (req, res) {
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var retObj = JSON.parse(body);
             return res.status(200).json(listVideos(retObj));
        } else {
            console.error(`problem with request: ${response.statusCode}`);
        }
    });
});
function listVideos(resBody){
    var videoLstObj = {
            "current": 1,
            "rowCount": 10,
            "rows": [],
            "total": 0
        };
        videoLstObj.total = resBody.meta.total_count;
        console.log(videoLstObj.total);
        resBody.data.forEach(function(element) {
            var videoItem = {};
            videoItem.id = element.id;
            videoItem.title = element.title;
            videoItem.thumbnail_url = element.thumbnail_url;
            videoItem.created = element.created_at;
            videoItem.owner = element.account_name
            videoLstObj.rows.push(videoItem);
        }, this);
        return videoLstObj
}
module.exports = router;
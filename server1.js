const https = require('https');
const querystring = require('querystring');
var post_options = {
  host: 'api.vzaar.com',
  path: '/api/v2/signature/single',
  family: 4,
  method:'POST',
  headers: {
    'X-Client-Id': 'vying78th-sap',
    'X-Auth-Token': 'zfyazL_sYhSY92UfE4FT',
    'Content-Type': 'application/json'
  }
};
const postData = querystring.stringify({
  'uploader': 'node'
});

var req = https.request(post_options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
    //var info = JSON.parse(data);
    //console.log(info.data[0].embed_code);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});
req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});
req.write(postData);
req.end();
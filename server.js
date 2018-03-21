var Vzaar = require("vzaar");
var api = new Vzaar.Api({token: "zfyazL_sYhSY92UfE4FT", login: "vying78th-sap"});
api.whoAmI(function(statusCode, data) {
    console.log(statusCode);
  console.log(data);
});
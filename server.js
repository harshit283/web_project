var express = require('express');
var app = express();   // App an instance of express

app.set('port',process.env.PORT || 5000);

app.listen(app.get('port'),function () {
    console.log("Server started and listening at port " + app.get('port'));
});

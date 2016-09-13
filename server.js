var express = require('express');
var serveStatic = require('serve-static');
express().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
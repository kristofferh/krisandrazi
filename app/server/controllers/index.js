'use strict';

var fs = require('fs');
var path = require('path');

var controllers = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
        var controller = path.join(__dirname, file);
        var name = file.replace(/(controller|ctrl)?\.js/i, '');
        var capitalizedName = name.charAt(0).toUpperCase() + name.substring(1);
        controllers[capitalizedName] = require(controller);
    });

module.exports = controllers;

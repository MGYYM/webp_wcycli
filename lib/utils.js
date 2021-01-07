'use strict';
const fs = require('fs');
const path = require('path');
/**
 * 判断指定路径是否是文件夹
 * @param path
 * @returns {boolean}
 */
exports.isDirectory = function isDirectory(path) {
    try {
        return fs.statSync(path).isDirectory();
    } catch (e) {
        return false;
    }
};

exports.readJSON = function readJSON(file) {
    let data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
};

exports.writeJson = function writeJson(file, data) {
    return fs.writeFileSync(file, JSON.stringify(data, null, 2));
};


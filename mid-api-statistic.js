/*
 * @Author: junjie.lean 
 * @Date: 2019-01-14 22:43:29 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-14 23:51:05
 */

/**
 * @description 基于express的中间件，目的是为了统计每个接口的请求情况
 * 
 */

const express = require('express');

const Router = express.Router();


Router.post("*", (req, res, next) => {
    console.log('====================================');
    console.log(req.path);
    console.log('====================================');

    next();
})




module.exports = Router;


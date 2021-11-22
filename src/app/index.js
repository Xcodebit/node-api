/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-17 21:41:11
 * @LastEditors: YY
 * @LastEditTime: 2021-10-25 20:17:18
 */
const Koa = require('koa');
const userRouter = require('../router/user.router');
const authRouter = require('../router/auth.router');

const bodyParser = require('koa-bodyparser');

const errorHandle = require('./error-handle');

const app = new Koa();


app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods()); //请求的方式是否存在
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.on('error', errorHandle);

module.exports = app;
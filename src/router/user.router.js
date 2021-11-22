/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-18 21:49:41
 * @LastEditors: YY
 * @LastEditTime: 2021-10-25 20:08:21
 */
const Router = require('koa-router');
const {
  create
} = require('../coutroller/user.controller');

const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');

const userRouter = new Router({ prefix: '/users' });

userRouter.post('/',verifyUser, handlePassword, create)

module.exports = userRouter;
/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-25 20:11:26
 * @LastEditors: YY
 * @LastEditTime: 2021-10-25 20:21:58
 */
const Router = require('koa-router');

const authRouter = new Router();

const {
  login
} = require('../coutroller/auth.coutroller');

const {
  verifyLogin
} = require('../coutroller/auth.middleware');


authRouter.post('/login', verifyLogin, login);
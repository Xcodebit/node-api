/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-19 21:43:20
 * @LastEditors: YY
 * @LastEditTime: 2021-10-22 22:37:41
 */
const errorType = require('../constants/error-types');
const errorHandle = (error, ctx) => {
  let status, message;

  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; //Bdd Request
      message = "用户名或者密码错误~";
      break;
    case errorType.USERS_ALREDAY_EXISTS:
      status = 409; //conflict
      message = "用户名已存在~";
      break;
    default:
      status = 404;
      message = "NOT FOUND~";
  }
  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandle;
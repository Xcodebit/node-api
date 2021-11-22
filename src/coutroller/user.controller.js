/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-18 21:52:25
 * @LastEditors: YY
 * @LastEditTime: 2021-10-18 22:04:01
 */
const service = require('../service/user.service')
class UserController{
  async create(ctx, next) {
    //获取用户请求传递的参数
    const user = ctx.request.body;

    //查询数据
    const result = await service.create(user);

    //返回数据
    ctx.body = result;
  }
}

module.exports = new UserController();
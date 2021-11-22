/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-25 20:15:35
 * @LastEditors: YY
 * @LastEditTime: 2021-10-25 20:20:01
 */
class AuthCoutroller{
  async login(ctx, next) {
    const { name } = ctx.request.body;

  }
}

module.exports = new AuthCoutroller();
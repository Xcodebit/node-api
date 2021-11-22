/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-25 20:22:41
 * @LastEditors: YY
 * @LastEditTime: 2021-10-25 20:26:03
 */
const verifyLogin = async (ctx, next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2.判断用户名和密码是否为空

  // 3.判断用户名是否存在

  // 4.判断密码是否和数据库中的一致(加密)


  await next();
  
}

module.exports = {
  verifyLogin
}
/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-17 21:35:14
 * @LastEditors: YY
 * @LastEditTime: 2021-10-19 21:21:35
 */
const app = require('./app');
const config = require('./app/config');

require('./app/database');

app.listen(config.APP_PORT, () => {
  console.log(`服务器启动成功${config.APP_PORT}`)
})
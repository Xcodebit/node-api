/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-17 21:44:30
 * @LastEditors: YY
 * @LastEditTime: 2021-10-19 21:16:56
 */
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env;
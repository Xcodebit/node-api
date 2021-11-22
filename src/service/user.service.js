/*
 * @Descripttion: 
 * @version: 
 * @@Company: DCIT-SH
 * @Author: YY
 * @Date: 2021-10-18 21:55:40
 * @LastEditors: YY
 * @LastEditTime: 2021-10-22 22:56:18
 */
const connection = require('../app/database');

class UserService{
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO users (name, password) VALUES (?, ?);`;

    const result = await connection.execute(statement, [name, password]);
    //将user储存到数据库中
    return result[0];
  }

  async getUserName(name) {
    const statement = `SELECT * FROM users WHERE name=?;`;
    const result = await connection.execute(statement, [name]);
    console.log(result)
    return result[0];
  }
}

module.exports = new UserService();
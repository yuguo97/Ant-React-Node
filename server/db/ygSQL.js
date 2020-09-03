/*
 * @Author: 隗果 
 * @Date: 2020-09-03 22:31:55 
 * @Last Modified by:   隗果 
 * @Last Modified time: 2020-09-03 22:31:55 
 */



module.exports = {
  queryAllSQL:
     "SELECT * FROM websites",
  addSQL:
    "INSERT INTO websites(id, name, url, alexa, country) VALUES(0,?,?,?,?)",
  modSQL:
    "UPDATE websites SET name = ?, url = ?,alexa = ?, country = ? WHERE id = ?",
  delSQL:
    "DELETE FROM websites where id = ?"
};
const mysql =  require("mysql");
let connection 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else { connection = mysql.createConnection ( { 
    host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ji1q7wqq6qo4b0eo",
    password: "zkygkl0bemwbk16y",
    database: "lcbdh7dk8xfqt7mj"
})};

connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected to mysql")
})

module.exports = connection;
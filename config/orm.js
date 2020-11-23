const connection = require ("./connection")

class orm {
    constructor(connection) {
        this.connection = connection
    }
    selectAll() {
        return this.connection.query("SELECT * FROM burgers")
    }
    insertOne(burger, values) {
        return this.connection.query(`INSERT INTO burgers (${burger}) VALUES (${values})`)
    }
    updateOne(column, id) {
        return this.connection.query(`UPDATE burgers SET ${column} WHERE id = ${id}`)
    }
}

module.exports = new orm(connection)
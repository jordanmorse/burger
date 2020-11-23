const { insertOne } = require("../config/orm.js")
const orm = require("../config/orm.js")

let burger = {
    selectAll: function () {
        orm.selectAll(res => {
            console.log(res)
        })
    },
    insertOne: function (burger, values) {
        orm.insertOne(burger, values, res => {
            console.log(res)
        })
    },
    updateOne: function (column, id) {
        orm.updateOne(column, id, res =>{
            console.log(res)
        })
    }
};

module.exports = burger;

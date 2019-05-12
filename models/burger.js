var orm = require('../config/orm');

var burger = {
    sort: function (callback) {
        orm.selectAll((response) => {
            let availBurgs = [];
            let eatenBurgs = [];
            for (let i in response) {
                if (!response[i].devoured) {
                    availBurgs.push(response[i])
                } else if (response[i].devoured) {
                    eatenBurgs.push(response[i])
                }
            }
            burgers = { availBurgs: availBurgs, eatenBurgs: eatenBurgs }
            callback(burgers);
        })
    },

    devour: function (id, cb) {
        orm.updateOne(id, (res) => {
            cb(res);
        })
    },

    create: function (name, cb) {
        orm.insertOne(name, (res) => {
            cb(res)
        })
    },

    delete: function (id, cb) {
        orm.delteOne(id, (res) => {
            cb(res)
        })
    }
}
module.exports = burger
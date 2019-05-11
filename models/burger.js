var orm = require('../config/orm');

// var burger = {

// }
// orm.selectAll();
// orm.insertOne(burger_name, devoured);
// orm.updateOne(id, burger_name, devoured);

module.exports = function (callback) {
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
        burgers = {availBurgs: availBurgs, eatenBurgs: eatenBurgs}
        callback(burgers);
    })
}
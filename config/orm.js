var connection = require('./connection');

var orm = {
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', (err, res) => {
            if (err) throw err;
            callback(res);
        })
    },

    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO burgers (burger_namme, devoured) VALUES (?, false)', [burger_name], (err, res) => {
            if(err) throw err;
            console.log(res);
            callback();
        })

    },

    updateOne: function (id, callback) {
        console.log ('we are updating id: ' + id)
        connection.query('UPDATE burgers SET devoured = true WHERE id = ?', [id], (err, res) => {
            if(err) throw err;
            callback();
        })

    }
}

module.exports = orm;
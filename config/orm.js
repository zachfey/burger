var connection = require('./connection');

var orm = {
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', (err, res) => {
            if (err) throw err;
            callback(res);
        })
    },

    insertOne: function (burger_name, callback) {
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, false)', [burger_name], (err, res) => {
            if(err) throw err;
            console.log(res);
            callback(res);
        })

    },

    updateOne: function (id, callback) {
        console.log ('we are updating id: ' + id)
        connection.query('UPDATE burgers SET devoured = true WHERE id = ?', [id], (err, res) => {
            if(err) throw err;
            callback(res);
        })
    },

    delteOne: function (id, callback) {
        console.log('we are deleting id: ' + id)
        connection.query('DELETE FROM burgers WHERE id = ?', [id], (err, res) => {
            if(err) throw err;
            callback(res)
        })
    }
}

module.exports = orm;
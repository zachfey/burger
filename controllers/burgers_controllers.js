var express = require('express');
var burgerSort = require('../models/burger');
var orm = require('../config/orm');



module.exports = function routes(app) {
    app.get('/', (req, res) => {
        burgerSort((burgers) => {
            res.render('index', burgers)
        });
    }),

        app.post('/api/add', (req, res) => {
            orm.insertOne(req.params.burger_name, () => {
                burgerSort((burgers) => {
                    console.log('serving up new index');
                    res.render('index', burgers)
                });
            })
        }),

        app.put('/api/update', (req, res) => {

            console.log(req.body);

            orm.updateOne(req.body.id, () => {
                burgerSort((burgers) => {
                    console.log('serving up new index');
                    res.redirect('/');
                });
            })
        })
}
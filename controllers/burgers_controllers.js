var express = require('express');
var burger = require('../models/burger');
var orm = require('../config/orm');



module.exports = function routes(app) {
    app.get('/', (req, res) => {
        burger.sort((burgers) => {
            res.render('index', burgers)
        });
    }),

        app.post('/api/add', (req, res) => {
            burger.create(req.body.burger_name, () => {
                res.redirect('/');
            })
        }),

        app.post('/api/update', (req, res) => {
            burger.devour(req.body.id, () => {
                res.redirect('/');
            })
        })
}
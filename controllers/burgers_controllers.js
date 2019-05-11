var express = require('express');
var burgerSort = require('../models/burger');
var orm = require('../config/orm');



module.exports = function routes(app) {
    app.get('/', (req, res) => {
        orm.selectAll((response) => {
            burgers = burgerSort(response) //returns burger object with availBurgs and eatenBurgs properties
            res.render('index', burgers) 
        });
    }),

        app.post('/api/add', (req, res) => {
            orm.insertOne(req.params.burger_name, () => {
                res.render('index', { burgers: response }) //TODO: I dont' think response will hav ethe burgers info
            })
        }),

        app.post('/api/update', (req, res) => {
            orm.updateOne(req.params.id, () => {
                res.render('index', { burgers: response }) //TODO: I dont' think response will hav ethe burgers info
            })
        })
}
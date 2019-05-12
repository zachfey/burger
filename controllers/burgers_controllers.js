var express = require('express');
var burger = require('../models/burger');

router = express.Router()

router.get('/', (req, res) => {
    burger.sort((burgers) => {
        res.render('index', burgers)
    });
})

router.post('/api/add', (req, res) => {
    burger.create(req.body.burger_name, () => {
        res.redirect('/');
    })
})

router.post('/api/update', (req, res) => {
    burger.devour(req.body.id, () => {
        res.status(200).end()
    })
})

router.post('/api/delete', (req, res) => {
    burger.delete(req.body.id, () => {
        res.status(200).end()
    })
})

module.exports = router

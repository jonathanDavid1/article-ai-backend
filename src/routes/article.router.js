const { getAll, create, getOne, remove, update } = require('../controllers/article.controllers');
const express = require('express');

const routerArticle = express.Router({mergeParams: true});//

routerArticle.route('/')
    .get(getAll)
    .post(create);

routerArticle.route('/:articleId')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerArticle;
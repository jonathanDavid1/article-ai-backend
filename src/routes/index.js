const express = require('express');

const routerArticle = require('./article.router');
const routerChat = require('./chat.router');

const router = express.Router({mergeParams: true});//

// colocar las rutas aquí

router.use('/article', routerArticle)
router.use('/:articlesId/chat', routerChat)




module.exports = router; 
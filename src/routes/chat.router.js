const { getAll, create, getOne, remove, update } = require('../controllers/chat.controllers');
const express = require('express');

const routerChat = express.Router({mergeParams: true});

routerChat.route('/')
    .get(getAll)
    .post(create)
    

routerChat.route('/:chatId', routerChat)
    .get(getOne)
    .post(create)
    .delete(remove)





module.exports = routerChat;


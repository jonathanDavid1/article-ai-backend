const catchError = require('../utils/catchError');
const Chat = require('../models/Chat');
const { main } = require('../OpenAI/apiOpenAI');
const Article = require('../models/Article');


const getAll = catchError(async(req, res) => {
    const results = await Chat.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const question = req.body.question;
    const  { articlesId } = req.params
    const article = await Article.findByPk(articlesId)
    const urlArticle = article.url
    req.body.answer = await main( "answer this question" + question + "based in this url" + urlArticle);
    const result = await Chat.create({
        question: question,
        answer: req.body.answer,
        articleId: articlesId
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { articlesId } = req.params;
    console.log(articlesId)

    const result = await Chat.findOne({ where: { articleId: articlesId } });
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { articlesId } = req.params;
    const result = await Chat.destroy({ where: {articlesId} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { articlesId } = req.params;
    const result = await Chat.update(
        req.body,
        { where: {articlesId}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}
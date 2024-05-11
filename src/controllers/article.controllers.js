const catchError = require('../utils/catchError');
const Article = require('../models/Article');
const { main } = require('../OpenAI/apiOpenAI');



const getAll = catchError(async(req, res) => {
    const results = await Article.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const urlArticle = req.body.url;
    req.body.summary = await main( "Give me a summary of" + urlArticle);
    const result = await Article.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { articleId } = req.params;
    const result = await Article.findByPk(articleId);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { articleId } = req.params;
    const result = await Article.destroy({ where: {id:articleId} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { articleId } = req.params;
    const result = await Article.update(
        req.body,
        { where: {id:articleId}, returning: true }
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
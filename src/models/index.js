const Article = require("./Article");
const Chat = require("./Chat");


//Article -> articleId
Chat.belongsTo(Article);
Article.hasMany(Chat);


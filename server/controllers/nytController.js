const axios = require('axios')
const db = require('../models')

module.exports = {
  findAll: (req, res) => {
    const params = Object.assign({ api_key: process.env.NYT_API_KEY }, req.query)

    axios
      .get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params,
      })
      .then(response => {
        db.Article.find()
          .then(dbArticles =>
            response.data.response.docs.filter(article =>
              dbArticles.every(dbArticle => dbArticle._id.toString() !== article._id),
            ),
          )
          .then(articles => res.json(articles))
          .catch(err => res.json(422).json(err))
      })
  },
}

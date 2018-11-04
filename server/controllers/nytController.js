const axios = 'axios'
const db = require('../models')

module.exports = {
  findAll: (req, res) => {
    const params = Object.assign({ apiKey: process.env.NYT_API_KEY }, req.query)
    console.log('params', params)

    axios
      .get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params,
      })
      .then(res => {
        db.Article.find()
          .then(dbArticles =>
            res.data.response.docs.filter(article =>
              dbArticles.every(dbArticle => dbArticle._id.toString() !== article._id),
            ),
          )
          .then(articles => res.json(articles))
          .catch(err => res.json(422).json(err))
      })
  },
}

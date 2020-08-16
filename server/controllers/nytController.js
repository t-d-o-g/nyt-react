const axios = require('axios')
const db = require('../models')

module.exports = {
  findAll: (req, res) => {
    const params = Object.assign({ 'api-key': process.env.NYT_API_KEY }, req.query)
    let year = new Date().getFullYear()

    if (params.end_date > year) {
      params.end_date = year
    }

    if (params.begin_date > year) {
      params.begin_date = year
    }

    if (params.begin_date < 1000) {
      params.begin_date = 1000
    }

    if (params.end_date < 1000) {
      params.end_date = 1000
    }

    if (params.end_date < params.begin_date) {
      params.end_date = params.begin_date
    }

    if (params.end_date) {
      params.end_date += '0101'
    }

    if (params.begin_date) {
      params.begin_date += '0101'
    }

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

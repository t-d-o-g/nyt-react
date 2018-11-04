/* eslint camelcase: 0 */
/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron'
import Card from '../../components/Card'
import Form from '../../components/Form'
import Article from '../../components/Article'
import Footer from '../../components/Footer'
import api from '../../utils/api'
import { Col, Row, Container } from '../../components/Grid'
import { List } from '../../components/List'

class Home extends Component {
  state = {
    articles: [],
    q: '',
    start_year: '',
    end_year: '',
    message: 'Search for Articles',
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  getArticles = () => {
    const { start_year, end_year, q } = this.state
    api
      .getArticles({
        q,
        start_year,
        end_year,
      })
      .then(res =>
        this.setState({
          articles: res.data,
          message: !res.data.length ? 'No articles found, try a different query' : '',
        }),
      )
      .catch(err => {
        throw err
      })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.getArticles()
  }

  handleArticleSave = id => {
    const { articles } = this.state
    const article = articles.find(thisArticle => thisArticle._id === id)
    api.saveArticle(article).then(() => this.getArticles())
  }

  render() {
    const { start_year, end_year, q, articles, message } = this.state
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>NYT Scrubber</strong>
              </h1>
              <h2 className="textj-center">Search and Save articles</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Query" icon="newspaper-o">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={q}
                startYear={start_year}
                endYear={end_year}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {articles.length ? (
                <List>
                  {articles.map(article => (
                    <Article
                      key={article._id}
                      _id={article._id}
                      title={article.headline.main}
                      url={article.web_url}
                      date={article.pub_date}
                      handleClick={this.handleArticleSave}
                      buttonText="Save Article"
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}

export default Home

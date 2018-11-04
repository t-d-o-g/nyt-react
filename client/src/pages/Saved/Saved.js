import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron'
import Card from '../../components/Card'
import Article from '../../components/Article'
import Footer from '../../components/Footer'
import api from '../../utils/api'
import { Col, Row, Container } from '../../components/Grid'
import { List } from '../../components/List'

class Saved extends Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    this.getSavedArticles()
  }

  getSavedArticles = () => {
    api
      .getSavedArticles()
      .then(res =>
        this.setState({
          articles: res.data,
        }),
      )
      .catch(err => {
        throw err
      })
  }

  handleArticleDelete = id => {
    api.deleteArticle(id).then(() => this.getSavedArticles())
  }

  render() {
    const { articles } = this.state
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>NYT Article Scrubber</strong>
              </h1>
              <h2 className="text-center">Search and Save Articles</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Articles" icon="download">
              {articles.length ? (
                <List>
                  {articles.map(article => (
                    <Article
                      key={article._id}
                      _id={article._id}
                      title={article.title}
                      url={article.url}
                      date={article.date}
                      handleClick={this.handleArticleDelete}
                      buttonText="Delete Article"
                      saved
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Articles</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}

export default Saved

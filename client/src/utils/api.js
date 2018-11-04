import axios from 'axios'
import filterParams from './filterParams'

export default {
  getArticles: params => axios.get('/api/nyt', { params: filterParams(params) }),
  getSavedArticles: () => axios.get('/api/articles'),
  deleteArticle: id => axios.delete(`/api/articles/${id}`),
  saveArticle: articleData => axios.post('/api/articles', articleData),
}

import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatDate'
import { ListItem } from '../List'

const Article = ({ title, url, _id, date, handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em>{title}</em>
      <span className="btn-group pull-right">
        <a className="btn btn-light" href={url} rel="noopener noreferrer" target="_blank">
          View Article
        </a>
        <button onClick={() => handleClick(_id)} className="btn btn-primary" type="button">
          {buttonText}
        </button>
      </span>
    </h3>
    <p>
      Date {saved ? 'Saved' : 'Published'} : {formatDate(date)}
    </p>
  </ListItem>
)

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  date: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  saved: PropTypes.bool,
}

Article.defaultProps = {
  saved: undefined,
  date: undefined,
}

export default Article

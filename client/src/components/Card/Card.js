/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'

const Card = props => (
  <div className="card mt-4">
    <div className="card-header">
      <h3>
        <strong>
          <i className={`fa fa-${props.icon}`} aria-hidden="true" /> {props.title}
        </strong>
      </h3>
    </div>
    <div className="card-body">{props.children}</div>
  </div>
)

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  icon: undefined,
}

export default Card

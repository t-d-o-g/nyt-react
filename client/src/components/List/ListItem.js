/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'

export const ListItem = props => <li className="list-group-item">{props.children}</li>

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const List = ({ children }) => <ul className="list-group">{children}</ul>

List.propTypes = {
  children: PropTypes.element.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>
)

Row.propTypes = {
  fluid: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

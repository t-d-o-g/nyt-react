import React from 'react'
import PropTypes from 'prop-types'

export const Col = ({ size, children }) => (
  <div
    className={size
      .split(' ')
      .map(val => `col-${val}`)
      .join(' ')}
  >
    {children}
  </div>
)

Col.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

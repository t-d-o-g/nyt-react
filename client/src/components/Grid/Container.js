import React from 'react'
import PropTypes from 'prop-types'

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
)

Container.propTypes = {
  fluid: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Container.defaultProps = {
  fluid: undefined,
}

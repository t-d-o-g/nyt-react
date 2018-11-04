import React from 'react'
import PropTypes from 'prop-types'
import './Jumbotron.css'

const Jumbotron = ({ children }) => <div className="jumbotron mt-2">{children}</div>

Jumbotron.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Jumbotron

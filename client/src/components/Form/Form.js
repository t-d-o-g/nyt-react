/* eslint react/destructuring-assignment: 0 */

import React from 'react'
import PropTypes from 'prop-types'

const Form = props => (
  <form>
    <div className="form-group">
      <label htmlFor="topic">
        <strong>Topic</strong>
      </label>
      <input
        className="form-control"
        id="topic"
        type="text"
        value={props.q}
        placeholder="Net Neutrality"
        name="q"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="start-year">
        <strong>Start Year</strong>
      </label>
      <input
        className="form-control"
        id="start-year"
        type="number"
        value={props.startYear}
        placeholder="2017"
        name="startYear"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="end-year">
        <strong>End Year</strong>
      </label>
      <input
        className="form-control"
        id="end-year"
        type="number"
        value={props.endYear}
        placeholder="2018"
        name="endYear"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button onClick={props.handleInputChange} type="submit" className="btn btn-lg btn-danger">
        Submit
      </button>
    </div>
  </form>
)

Form.propTypes = {
  q: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  startYear: PropTypes.string.isRequired,
  endYear: PropTypes.string.isRequired,
}

export default Form

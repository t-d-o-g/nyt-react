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
        min="1600"
        max={props.max}
        value={props.begin_date}
        placeholder={props.max - 1}
        name="begin_date"
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
        min="1000"
        max={props.max}
        value={props.end_date}
        placeholder={props.max}
        name="end_date"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button onClick={props.handleFormSubmit} type="submit" className="btn btn-lg btn-danger">
        Submit
      </button>
    </div>
  </form>
)

Form.propTypes = {
  q: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  begin_date: PropTypes.string,
  end_date: PropTypes.string,
}

export default Form

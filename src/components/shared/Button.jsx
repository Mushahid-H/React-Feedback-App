import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, isDisabled, version, type }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}
Button.defaultProps = {
  isDisabled: false,
  version: 'primary',
  type: 'button',
}
Button.propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
}

export default Button

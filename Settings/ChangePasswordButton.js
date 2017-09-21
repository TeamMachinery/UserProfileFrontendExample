import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../common/Button'

const ChangePasswordButton = ({ onClick }) => (
  <Button type={'secondary'} onClick={onClick}>
    Change
  </Button>
)

ChangePasswordButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ChangePasswordButton

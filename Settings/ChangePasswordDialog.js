import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changePassword } from '../../../actions'
import Dialog from '../../common/Dialog'
import DialogButton from '../../common/DialogButton'
import FormInput from '../../common/FormInput'

class ChangePasswordDialog extends React.Component {
  state = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  }

  setPasswordField = currentPassword =>
    this.setState(() => ({ currentPassword }))

  setNewPasswordField = newPassword => this.setState(() => ({ newPassword }))

  setConfirmNewPasswordField = confirmNewPassword =>
    this.setState(() => ({ confirmNewPassword }))

  changePassword = event => {
    if (event && event.preventDefault) {
      event.preventDefault()
    }
    const { currentPassword, newPassword, confirmNewPassword } = this.state
    this.props.changePassword({
      currentPassword,
      newPassword,
      confirmNewPassword,
    })
  }

  render() {
    return (
      <form onSubmit={this.changePassword}>
        <Dialog
          title="Change password"
          primaryButton={
            <DialogButton onClick={this.changePassword}>Change</DialogButton>
          }
          isOpen={this.props.isOpen}
          onClose={this.props.onClose}
        >
          <FormInput
            autofocus
            onChange={this.setPasswordField}
            item="Current password"
            type="password"
          />
          <FormInput
            onChange={this.setNewPasswordField}
            item="New password"
            type="password"
          />
          <FormInput
            onChange={this.setConfirmNewPasswordField}
            item="Confirm password"
            type="password"
          />
        </Dialog>
      </form>
    )
  }
}

ChangePasswordDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
}

export default connect(null, { changePassword })(ChangePasswordDialog)

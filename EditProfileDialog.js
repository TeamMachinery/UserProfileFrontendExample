import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Dialog from '../common/Dialog'
import DialogButton from '../common/DialogButton'
import FormInput from '../common/FormInput'
import { editProfile } from '../../actions'

class EditProfileDialog extends React.Component {
  state = {
    firstName: props.firstName,
    lastName: props.lastName,
  }

  editProfile = event => {
    if (event && event.preventDefault) {
      event.preventDefault()
    }
    const { firstName, lastName } = this.state
    this.props.editProfile({ firstName, lastName })
  }

  setFirstName = firstName => this.setState(() => ({ firstName }))

  setLastName = lastName => this.setState(() => ({ lastName }))

  render() {
    return (
      <form onSubmit={this.editProfile}>
        <Dialog
          title="Edit profile"
          primaryButton={
            <DialogButton onClick={this.editProfile}>Change</DialogButton>
          }
          isOpen={this.props.isOpen}
          onClose={this.props.onClose}
        >
          <FormInput
            autofocus
            style={{ ...fullWidth, marginTop: '24px' }}
            onChange={this.setFirstName}
            initialValue={this.props.firstName}
            item="First name"
          />
          <FormInput
            style={{ ...fullWidth, marginBottom: '24px' }}
            onChange={this.setLastName}
            initialValue={this.props.lastName}
            item="Last name"
          />
        </Dialog>
      </form>
    )
  }
}

EditProfileDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

const mapStateToProps = ({ auth }) => ({
  firstName: auth.user.firstName,
  lastName: auth.user.lastName,
})

export default connect(mapStateToProps, { editProfile })(EditProfileDialog)

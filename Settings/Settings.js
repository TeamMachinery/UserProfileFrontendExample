import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ChangePasswordDialog from './ChangePasswordDialog'
import ChangePasswordErrorDialog from './ChangePasswordErrorDialog'
import {
  closeChangePasswordDialog,
  closeChangePasswordErrorDialog,
  openChangePasswordDialog,
} from '../../../actions'

const Settings = ({
  changePasswordDialogOpen,
  changePasswordErrorDialogOpen,
  closeChangePasswordDialog,
  closeChangePasswordErrorDialog,
  openChangePasswordDialog,
}) => (
  <div>
    <ChangePasswordSection onClick={openChangePasswordDialog} />
    <ChangePasswordDialog
      isOpen={changePasswordDialogOpen}
      onClose={closeChangePasswordDialog}
    />
    <ChangePasswordErrorDialog
      isOpen={changePasswordErrorDialogOpen}
      onClose={closeChangePasswordErrorDialog}
    />
  </div>
)

Settings.propTypes = {
  changePasswordDialogOpen: PropTypes.bool.isRequired,
  changePasswordErrorDialogOpen: PropTypes.bool.isRequired,
  closeChangePasswordDialog: PropTypes.func.isRequired,
  closeChangePasswordErrorDialog: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
}

const mapStateToProps = ({ ui }) => ({
  changePasswordDialogOpen: ui.changePasswordDialogOpen,
  changePasswordErrorDialogOpen: ui.changePasswordErrorDialogOpen,
})

export default connect(mapStateToProps, {
  openChangePasswordDialog,
  closeChangePasswordDialog,
  closeChangePasswordErrorDialog,
})(Settings)

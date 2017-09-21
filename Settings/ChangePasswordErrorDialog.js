import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createStyleSheet, withStyles } from 'material-ui/styles'

import DialogButton from '../../common/DialogButton'
import Dialog from '../../common/Dialog'
import {
  closeChangePasswordErrorDialog,
  openChangePasswordErrorDialog,
  openChangePasswordDialog,
} from '../../../actions'

const ChangePasswordErrorDialog = ({
  classes,
  isOpen,
  closeChangePasswordErrorDialog,
  openChangePasswordDialog,
}) => (
  <Dialog
    style={{ width: '360px' }}
    title="Change password"
    primaryButton={
      <DialogButton onClick={openChangePasswordDialog}>Try again</DialogButton>
    }
    secondaryButton={
      <DialogButton secondary onClick={closeChangePasswordErrorDialog}>
        Cancel
      </DialogButton>
    }
    isOpen={isOpen}
    onClose={closeChangePasswordErrorDialog}
  >
    <div className={classes.formContent}>
      <p className={classes.message}>
        {"Current password you've entered is wrong. Please try again"}
      </p>
    </div>
  </Dialog>
)

ChangePasswordErrorDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeChangePasswordErrorDialog: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
}

const styles = createStyleSheet('ChangePasswordErrorDialog', () => ({
  message: {
    color: '#445062',
    fontSize: '14px',
  },
  formContent: {
    height: '180px',
    marginTop: '19px',
  },
}))

const mapStateToProps = ({ ui }) => ({
  isOpen: ui.changePasswordErrorDialogOpen,
})

export default connect(mapStateToProps, {
  openChangePasswordDialog,
  closeChangePasswordErrorDialog,
  openChangePasswordErrorDialog,
})(withStyles(styles)(ChangePasswordErrorDialog))

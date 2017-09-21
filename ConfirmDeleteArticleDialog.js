import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStyleSheet, withStyles } from 'material-ui/styles'

import Dialog from '../common/Dialog'
import DialogButton from '../common/DialogButton'
import { deleteArticle } from '../../actions'

const ConfirmDeleteArticleDialog = ({
  articleId,
  classes,
  closeDeleteArticleConfirmationDialog,
  deleteArticle,
  isOpen,
}) => (
  <Dialog
    title="Change password"
    primaryButton={
      <DialogButton onClick={() => deleteArticle(articleId)}>
        Continue
      </DialogButton>
    }
    secondaryButton={
      <DialogButton secondary onClick={closeDeleteArticleConfirmationDialog}>
        Cancel
      </DialogButton>
    }
    isOpen={isOpen}
    onClose={closeDeleteArticleConfirmationDialog}
  >
    <div className={classes.formContent}>
      <p className={classes.message}>
        Are you sure you want to delete this article?
      </p>
    </div>
  </Dialog>
)

ConfirmDeleteArticleDialog.propTypes = {
  articleId: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  closeDeleteArticleConfirmationDialog: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
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
  ...ui.dialogProps,
})

export default connect(mapStateToProps, { deleteArticle })(
  withStyles(styles)(ConfirmDeleteArticleDialog),
)

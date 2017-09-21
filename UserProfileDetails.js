import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'material-ui'
import { createStyleSheet, withStyles } from 'material-ui/styles'

import Button from '../common/Button'
import EditProfileDialog from './EditProfileDialog'

setAvatar = a => a || '/img/Default_Avatar.png'

const UserProfileDetails = ({
  classes,
  user,
  openEditProfileDialog,
  editProfileDialogOpen,
  closeEditProfileDialog,
  editable,
}) => (
  <div className={classes.root}>
    <div className={classes.details}>
      <div className={classes.image}>
        <Avatar className={classes.avatar} src={setAvatar(user.avatar)} />
      </div>
      <div className={classes.more}>
        <div className={classes.title}>
          {user.firstName} {user.lastName}
        </div>
        <div className={classes.subtitle}>{user.status}</div>
      </div>
    </div>
    {editable && (
      <div className={classes.edit}>
        <Button onClick={openEditProfileDialog} type={'secondary'}>
          Edit
        </Button>
      </div>
    )}
    <EditProfileDialog
      user={user}
      isOpen={editProfileDialogOpen}
      onClose={closeEditProfileDialog}
    />
  </div>
)

UserProfileDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  closeEditProfileDialog: PropTypes.func.isRequired,
  editProfileDialogOpen: PropTypes.bool.isRequired,
  editable: PropTypes.bool.isRequired,
  openEditProfileDialog: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const styles = createStyleSheet('UserProfileDetails', () => ({
  root: {
    flexGrow: 1,
    marginTop: '40px',
    marginBottom: '20px',
  },
  details: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginRight: '24px',
    flex: 1,
  },
  more: {
    flex: 3,
  },
  edit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'Lato',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#435061',
  },
  subtitle: {
    fontFamily: 'Lato',
    fontSize: '18px',
    color: '#9b9b9b',
  },
}))

export default withStyles(styles)(UserProfileDetails)

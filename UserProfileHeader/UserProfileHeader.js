import React from 'react'
import PropTypes from 'prop-types'

import Content from '../../common/Content'
import Navigation from './Navigation'
import NavigationEditable from './NavigationEditable'
import UserProfileDetails from '../UserProfileDetails'

const UserProfileHeader = ({
  closeEditProfileDialog,
  editProfileDialogOpen,
  editable,
  match,
  openEditProfileDialog,
  user,
}) => (
  <Content type={'white'}>
    <UserProfileDetails
      closeEditProfileDialog={closeEditProfileDialog}
      editProfileDialogOpen={editProfileDialogOpen}
      editable={editable}
      openEditProfileDialog={openEditProfileDialog}
      user={user}
    />
    {editable ? (
      <NavigationEditable match={match} />
    ) : (
      <Navigation match={match} />
    )}
  </Content>
)

UserProfileHeader.propTypes = {
  closeEditProfileDialog: PropTypes.func.isRequired,
  editProfileDialogOpen: PropTypes.bool.isRequired,
  editable: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  openEditProfileDialog: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default UserProfileHeader

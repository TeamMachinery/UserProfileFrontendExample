import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import ConfirmDeleteArticleDialog from './ConfirmDeleteArticleDialog'
import TabContent from './TabContent'
import TabContentEditable from './TabContentEditable'
import UserProfileHeader from './UserProfileHeader'

import {
  getUserProfile,
  setHeader,
  closeDeleteArticleConfirmationDialog,
  openEditProfileDialog,
  closeEditProfileDialog,
  resetUserProfile,
} from '../../actions'

class UserProfileScreen extends Component {
  static propTypes = {
    closeDeleteArticleConfirmationDialog: PropTypes.func.isRequired,
    currentUser: PropTypes.object,
    deleteArticleConfirmationDialogOpen: PropTypes.bool.isRequired,
    match: PropTypes.object,
  }

  componentWillMount() {
    this.props.resetUserProfile()
  }

  componentDidMount() {
    this.props.setHeader({
      hideMenu: true,
    })
    const userId = this.props.match.params.id
    if (userId) {
      this.props.getUserProfile(userId)
    }
  }

  render() {
    const {
      articles,
      closeDeleteArticleConfirmationDialog,
      closeEditProfileDialog,
      user,
      deleteArticleConfirmationDialogOpen,
      drafts,
      editProfileDialogOpen,
      editable = false,
      match,
      openEditProfileDialog,
    } = this.props
    return (
      <div>
        <UserProfileHeader
          editable={editable}
          match={match}
          user={user}
          openEditProfileDialog={openEditProfileDialog}
          editProfileDialogOpen={editProfileDialogOpen}
          closeEditProfileDialog={closeEditProfileDialog}
        />
        {editable ? (
          <TabContentEditable
            match={match}
            articles={articles}
            drafts={drafts}
          />
        ) : (
          <TabContent match={match} articles={articles} />
        )}
        <ConfirmDeleteArticleDialog
          isOpen={deleteArticleConfirmationDialogOpen}
          closeDeleteArticleConfirmationDialog={
            closeDeleteArticleConfirmationDialog
          }
        />
      </div>
    )
  }
}

function mapStateToProps({ auth, users, ui }) {
  return {
    editable: auth.user.id === users.details.id,
    user: users.details,
    articles: users.details.articles,
    drafts: users.details.drafts,
    favorites: users.details.favorites,
    deleteArticleConfirmationDialogOpen: ui.deleteArticleConfirmationDialogOpen,
    editProfileDialogOpen: ui.editProfileDialogOpen,
  }
}

export default connect(mapStateToProps, {
  setHeader,
  getUserProfile,
  closeDeleteArticleConfirmationDialog,
  openEditProfileDialog,
  closeEditProfileDialog,
  resetUserProfile,
})(UserProfileScreen)

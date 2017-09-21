import React from 'react'
import PropTypes from 'prop-types'

import ChangePasswordButton from './ChangePasswordButton'
import SettingsItem from './SettingsItem'

const ChangePasswordSection = ({ onClick }) => (
  <SettingsItem
    sectionName="Account"
    title="Password"
    description="Feel like changing your password?"
    rightComponent={<ChangePasswordButton onClick={onClick} />}
  />
)

ChangePasswordSection.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ChangePasswordSection

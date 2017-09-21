import React from 'react'
import PropTypes from 'prop-types'
import { createStyleSheet, withStyles } from 'material-ui/styles'

import SectionBody from './SectionBody'
import SectionName from './SectionName'

const SettingsItem = ({
  classes,
  description,
  rightComponent,
  sectionName,
  title,
}) => (
  <div className={classes.container}>
    <SectionName sectionName={sectionName} />
    <hr className={classes.line} />
    <SectionBody
      title={title}
      description={description}
      rightComponent={rightComponent}
    />
  </div>
)

SettingsItem.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  rightComponent: PropTypes.node,
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

SettingsItem.defaultProps = {
  rightComponent: null,
}

const styles = createStyleSheet('SettingsItem', () => ({
  container: {
    padding: '24px 0 0 0',
  },
  line: {
    backgroundColor: '#CBCED2',
    border: 0,
    height: '1px',
  },
}))

export default withStyles(styles)(SettingsItem)

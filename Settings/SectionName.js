import React from 'react'
import PropTypes from 'prop-types'
import { createStyleSheet, withStyles } from 'material-ui/styles'

const SectionName = ({ classes, sectionName }) => (
  <div className={classes.nameContainer}>
    <span className={classes.name}>{sectionName}</span>
  </div>
)

SectionName.propTypes = {
  classes: PropTypes.object.isRequired,
  sectionName: PropTypes.string.isRequired,
}

const styles = createStyleSheet('SectionName', () => ({
  nameContainer: {
    marginBottom: '16px',
  },
  name: {
    color: '#9B9B9B',
    fontSize: '14px',
    lineHeight: '17px',
  },
}))

export default withStyles(styles)(SectionName)

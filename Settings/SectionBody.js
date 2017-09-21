import React from 'react'
import PropTypes from 'prop-types'
import { createStyleSheet, withStyles } from 'material-ui/styles'

const SectionBody = ({ classes, title, description, rightComponent }) => (
  <div>
    {rightComponent && (
      <div className={classes.rightContainer}>{rightComponent}</div>
    )}
    <div>
      <div className={classes.titleContainer}>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  </div>
)

SectionBody.propTypes = {
  classes: PropTypes.object,
  description: PropTypes.string,
  rightComponent: PropTypes.node,
  title: PropTypes.string.isRequired,
}

const styles = createStyleSheet('SectionBody', () => ({
  description: {
    color: '#9B9B9B',
    fontSize: '14px',
  },
  rightContainer: {
    float: 'right',
  },
  title: {
    color: '#445062',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  titleContainer: {
    margin: '16px 0',
  },
}))

export default withStyles(styles)(SectionBody)

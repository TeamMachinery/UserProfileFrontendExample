import React from 'react'
import PropTypes from 'prop-types'

import { withStyles, createStyleSheet } from 'material-ui/styles'

const Tabs = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
)

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const styles = createStyleSheet('Tabs', () => ({
  root: {
    height: '50px',
    padding: '15px 0',
    borderTop: '1px solid #cbced3',
  },
}))

export default withStyles(styles)(Tabs)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { NavLink } from 'react-router-dom'

const Tab = ({ label, to, classes, exact }) => (
  <NavLink
    to={to}
    exact={exact}
    activeStyle={{
      color: '#f26724',
    }}
    className={classes.tab}
  >
    {label}
  </NavLink>
)

Tab.propTypes = {
  label: PropTypes.node,
  to: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  exact: PropTypes.bool.isRequired,
}

Tab.defaultProps = {
  label: null,
}

const styles = createStyleSheet('Tab', theme => ({
  tab: {
    color: '#cbced3',
    flex: 'none',
    height: '100%',
    padding: '0',
    fontSize: 14,
    [theme.breakpoints.up('md')]: {
      margin: '0 32px 0 0',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 8px',
    },
    overflow: 'hidden',
    maxWidth: '264px',
    background: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    userSelect: 'none',
    webkitAppearance: 'none',
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    border: 'none',
  },
}))

export default withStyles(styles)(Tab)

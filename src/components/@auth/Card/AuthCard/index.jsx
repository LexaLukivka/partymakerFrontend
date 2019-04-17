import React from 'react'
import { node, object } from 'prop-types'
import { Card, CardHeader, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: 350,
    padding: 20,
    border: 'solid',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  title: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
    textAlign: 'center',
  },
}

const AuthCard = ({ classes, children, title }) =>
  <Card className={classes.root}>
    <CardHeader className={classes.title} title={title} />
    {children}
  </Card>

AuthCard.propTypes = {
  children: node,
  title: node.isRequired,
  classes: object.isRequired,
}

AuthCard.defaultProps = {
  children: null,
}

export default withStyles(styles)(AuthCard)

import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { CardContent, Typography, withStyles } from '@material-ui/core'
import AuthCardActions from 'src/components/@auth/Card/AuthCardActions'
import { Field, Form } from 'formik'
import FormikText from '../../formik/FormikText'
import formik from './formik'
import connector from './connector'

const styles = {
  root: {
    color: '#0083bc'
  },
  link: {
    marginTop: 10,
    marginLeft: 20,
  },
}

const RestoreForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          type="password"
          name="newPassword"
          placeholder="*******"
          label="Введите новый пароль"
          component={FormikText}
        />
        <Field
          type="password"
          name="repeatPassword"
          placeholder="*******"
          label="Повторите новый пароль"
          component={FormikText}
        />
      </CardContent>
      <AuthCardActions
        textButton="Готово"
        linkTo="/auth/login"
        textLink="Войти"
      />
      <Link to="/auth/register">
        <Typography className={classes.link} color="inherit">Создать аккаунт</Typography>
      </Link>
    </Form>
  </div>

RestoreForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(connector(formik(RestoreForm)))

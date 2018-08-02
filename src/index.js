import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import LayoutScene from 'components/LayoutScene'
import CircularProgress from '@material-ui/core/es/CircularProgress/CircularProgress'
import 'moment/locale/ru.js'
import './styles/index.scss'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(() =>
  <Provider store={store}>
    <PersistGate loading={<CircularProgress size={50} />} persistor={persistor}>
      <Router>
        <Switch>
          <Route path="/" component={LayoutScene} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)

if (module.hot) {
  module.hot.accept()
}

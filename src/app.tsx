import * as React from 'react'
import {render} from 'react-dom'
import * as configureTapEvent from 'react-tap-event-plugin'
import ChatApp from './components/ChatApp.tsx'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

import './style.scss'

configureTapEvent()

const theme = getMuiTheme({
  appBar: {
    height: 56
  }
})
const container = document.querySelector('#root')

render(<MuiThemeProvider muiTheme={theme}>
  <ChatApp />
</MuiThemeProvider>, container)


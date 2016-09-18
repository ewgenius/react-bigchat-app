import * as React from 'react'
import {Component} from 'react'
import {range} from 'ramda'

import AppBar from 'material-ui/AppBar'
import ListItem from 'material-ui/List/ListItem'
import Flex from './Layout/Flex.tsx'
import Scroller from './Layout/Scroller.tsx'

export interface Client {
  name: string
}

export interface ChatAppState {
  clients?: Client[]
}

export default class ChatApp extends Component<{}, ChatAppState> {
  constructor() {
    super()

    this.state = {
      clients: range(1, 100).map(i => {
        return {
          name: `client ${i}`
        }
      })
    }
  }

  render() {
    const {clients} = this.state

    return <Flex>
      <AppBar
        title='react big chat'
        titleStyle={{ fontSize: 20, textTransform: 'uppercase' }}/>
      <Scroller vertical>
        {clients.map((client, i) => <ListItem key={i} primaryText={client.name}/>) }
      </Scroller>
    </Flex>
  }
}
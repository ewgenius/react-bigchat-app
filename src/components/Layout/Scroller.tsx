import * as React from 'react'
import {Component, Props} from 'react'

export interface ScrollerProps extends Props<Scroller> {
  horizontal?: boolean
  vertical?: boolean
}

export default class Scroller extends Component<ScrollerProps, {}> {
  onScroll() {
    const container = this.refs['container'] as HTMLElement
    console.log(container.scrollTop)
  }

  render() {
    const {horizontal, vertical, children} = this.props
    return <div
      ref='container'
      onScroll={() => this.onScroll() }
      style={{
        flex: 1,
        overflowX: horizontal ? 'auto' : 'hidden',
        overflowY: vertical ? 'auto' : 'hidden'
      }}>
      {children}
    </div>
  }
}
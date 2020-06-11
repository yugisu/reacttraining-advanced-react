/*
Create a `withStorage` higher order component that manages saving and retrieving
the `sidebarIsOpen` state to local storage
*/

import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { set, get, subscribe } from 'utils/local-storage'

type State = {
  sidebarIsOpen: boolean
}

export class App extends React.Component<unknown, State> {
  state: State = {
    sidebarIsOpen: get('sidebarIsOpen', true),
  }

  unsubscribe: () => void = () => null

  componentDidMount() {
    this.unsubscribe = subscribe(() => {
      this.setState({
        sidebarIsOpen: get('sidebarIsOpen'),
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { sidebarIsOpen } = this.state
    return (
      <div className="app">
        <header>
          <button
            className="sidebar-toggle"
            title="Toggle menu"
            onClick={() => {
              set('sidebarIsOpen', !sidebarIsOpen)
            }}
          >
            <FiMenu />
          </button>
        </header>

        <div className="container">
          <aside className={sidebarIsOpen ? 'open' : 'closed'} />
          <main />
        </div>
      </div>
    )
  }
}

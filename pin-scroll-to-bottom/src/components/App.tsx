import React from 'react'

import { TMessage } from 'types/message.type'
import subscribeToMessages from 'util/messages'

import { FadeIn } from './FadeIn'
import { PinScrollToBottom } from './PinScrollToBottom'

type State = {
  messages: TMessage[]
}

export class App extends React.Component<unknown, State> {
  state: State = {
    messages: [],
  }

  componentDidMount() {
    subscribeToMessages((message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }))
    })
  }

  render() {
    const { messages } = this.state
    return (
      <div className="app">
        <div className="link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=VKHFZBUTA4k&list=RDVKHFZBUTA4k"
          >
            Sketch on YouTube
          </a>
        </div>
        <PinScrollToBottom subscribeTo={messages}>
          <ol className="messages">
            {messages.map((message, index) => (
              <FadeIn key={index}>
                <li className="message">
                  <div className="avatar" style={{ backgroundImage: `url(${message.avatar})` }} />
                  <div className="text">{message.text}</div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </PinScrollToBottom>
      </div>
    )
  }
}

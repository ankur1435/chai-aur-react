import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="Chai aur react"

const reactElement = react.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  anotherElement
)

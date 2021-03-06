import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import Heading from './components/Heading'
import Random from './components/Random'

injectGlobal`
  body {
    margin: 0;
    background: black;
    font-family: sans-serif;
  }
`

const Background = styled.div`
  z-index: -999;
  position: absolute;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: linear-gradient(10deg, #00152a, #3E0009);
`

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <Heading text="Junior Webmaster Camp #10"/>
        <Random />
      </div>
    )
  }
}

export default App

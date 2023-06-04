import { Component } from 'react'
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
      </div>
    )
  }
}

export default App
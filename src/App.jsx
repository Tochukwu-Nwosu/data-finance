import { Component } from 'react'
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import Analytics from './components/analytics/Analytics'
import Newsletter from './components/newsletter/Newsletter'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Analytics />
        <Newsletter />
      </div>
    )
  }
}

export default App
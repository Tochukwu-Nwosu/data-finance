import { Component } from 'react'
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import Analytics from './components/analytics/Analytics'
import Newsletter from './components/newsletter/Newsletter'
import Cards from './components/cards/Cards'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
      </div>
    )
  }
}

export default App
import { Component } from 'react'
import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import Analytics from './components/analytics/Analytics'
import Newsletter from './components/newsletter/Newsletter'
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
      </div>
    )
  }
}

export default App
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Work from './components/Work'
import Project from './components/Project'
import { ParallaxProvider } from 'react-scroll-parallax'


function App() {
 

  return (
   <div>
    <ParallaxProvider>
      <Header/>
      <Main />
      <Work/>
      <Project/>
      <Footer/>
    </ParallaxProvider>
    </div>
  )
}

export default App

import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
 
     <>
      <link rel="icon"  href="favicon.png" />
      <body className="background-layer">
        <h1>Web Developer Portfolio</h1>
        
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </body>
    </>
  );
}

export default App

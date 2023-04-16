import { Navigation } from './ components/Navigation/Navigation'
import { Footer } from './ components/Footer/Footer'
import { Main } from './ components/Main/Main'
import { About } from './ components/About/About'
import { Contact } from './ components/Contact/Contact'
import { Education } from './ components/Education/Education'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Main />
            <About />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

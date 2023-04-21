import { useRef } from 'react'

import { Navigation } from './ components/Navigation/Navigation'
import { Footer } from './ components/Footer/Footer'
import { Main } from './ components/Main/Main'
import { About } from './ components/About/About'
import { Contact } from './ components/Contact/Contact'
import { Education } from './ components/Education/Education'
import { TechStack } from './ components/TechStack/TechStack'
import { Projects } from './ components/Projects/Projects'

function App() {
    const mainRef = useRef(null);
    const educationRef = useRef(null);
    const aboutRef = useRef(null);
    const techStackRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (propName) => {
        const scrollSettings = { behavior: "smooth" };

        switch (propName) {
            case 'main':
                mainRef.current.scrollIntoView(scrollSettings);
                break;
            case 'education':
                educationRef.current.scrollIntoView(scrollSettings);
                break;
            case 'about':
                aboutRef.current.scrollIntoView(scrollSettings);
                break;
            case 'techStack':
                techStackRef.current.scrollIntoView(scrollSettings);
                break;
            case 'projects':
                projectsRef.current.scrollIntoView(scrollSettings);
                break;
            case 'contact':
                contactRef.current.scrollIntoView(scrollSettings);
                break;
        }
    }

    return (
        <div className="App">
            <Navigation scrollToRef={scrollToRef} />
            <Main mainRef={mainRef} scrollToRef={scrollToRef} />
            <About aboutRef={aboutRef} />
            <Education educationRef={educationRef} />
            <TechStack techStackRef={techStackRef}/>
            <Projects projectsRef={projectsRef} />
            <Contact contactRef={contactRef} />
            <Footer />
        </div>
    )
}

export default App

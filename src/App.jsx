import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Research from './components/Research'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
          <div className="px-10 py-12">
            <Header />
            <main className="space-y-10">
              <About />
              <Education />
              <Research />
              <Projects />
              <Publications />
              <Experience />
              <Skills />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

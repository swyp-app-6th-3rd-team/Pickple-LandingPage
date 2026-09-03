import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import IntroSection from './components/IntroSection'
import StorySection from './components/StorySection'
import SignupSection from './components/SignupSection'
import VisualSection from './components/VisualSection'
import './App.css'

function App() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <IntroSection />
      <VisualSection />
      <StorySection />
      <SignupSection />
      <SiteFooter />
    </main>
  )
}

export default App

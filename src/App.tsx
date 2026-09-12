import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import IntroSection from './components/IntroSection'
import IntroDecisionSection from './components/IntroDecisionSection'
import StorySection from './components/StorySection'
import SignupSection from './components/SignupSection'
import './App.css'

function App() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <IntroSection />
      <IntroDecisionSection />
      <StorySection />
      <SignupSection />
      <SiteFooter />
    </main>
  )
}

export default App

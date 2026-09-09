import SiteFooter from './pages/SiteFooter'
import SiteHeader from './pages/SiteHeader'
import IntroSection from './pages/IntroSection'
import StorySection from './pages/StorySection'
import SignupSection from './pages/SignupSection'
import VisualSection from './pages/VisualSection'
import './App.css'

function App() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <IntroSection />
      <StorySection />
      <VisualSection />
      <SignupSection />
      <SiteFooter />
    </main>
  )
}

export default App

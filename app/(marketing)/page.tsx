import Hero               from './components/Hero'
import TrustBar           from './components/TrustBar'
import HowItWorks         from './components/HowItWorks'
import BenefitsGrid       from './components/BenefitsGrid'
import ComparisonSection  from './components/ComparisonSection'
import ROICalculator      from './components/ROICalculator'
import SocialProof        from './components/SocialProof'
import FAQAccordion       from './components/FAQAccordion'
import FinalCTA           from './components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <BenefitsGrid />
      <ComparisonSection />
      <ROICalculator />
      <SocialProof />
      <FAQAccordion />
      <FinalCTA />
    </>
  )
}

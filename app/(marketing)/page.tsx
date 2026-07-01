import Hero               from './components/Hero'
import RetirementChallenge from './components/TrustBar'
import HowItWorks         from './components/HowItWorks'
import WhatYouGet         from './components/BenefitsGrid'
import RiskProfileBanner  from './components/RiskProfileBanner'
import ResourcesHub       from './components/ComparisonSection'
import ClientStories      from './components/SocialProof'
import FAQAccordion       from './components/FAQAccordion'
import ReviewRequestForm  from './components/ROICalculator'
import FinalCTA           from './components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RetirementChallenge />
      <HowItWorks />
      <WhatYouGet />
      <RiskProfileBanner />
      <ResourcesHub />
      <ClientStories />
      <FAQAccordion />
      <ReviewRequestForm />
      <FinalCTA />
    </>
  )
}

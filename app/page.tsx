import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/ProblemSection'
import ServicesSection from '@/components/home/ServicesSection'
import SocialProofSection from '@/components/home/SocialProofSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FinalCTASection />
    </div>
  )
}
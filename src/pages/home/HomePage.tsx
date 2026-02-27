import { AdvantagesSection } from './sections/AdvantagesSection'
import { DevicesSection } from './sections/DevicesSection'
import { HeroSection } from './sections/HeroSection'
import { PreviewSection } from './sections/PreviewSection'

export function HomePage() {
	return (
		<div className="w-full flex flex-col">
			<HeroSection />
			<PreviewSection />
			<AdvantagesSection />
			<DevicesSection />
		</div>
	)
}

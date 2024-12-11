import Navbar from '@/components/main/navbar'
import Hero from '@/components/main/hero'
import Partners from '@/components/main/partners'
import AboutUs from '@/components/main/about-us'
import Services from '@/components/main/services'
import FeaturedProperties from '@/components/main/featured-properties'
import Team from '@/components/main/team'
import Testimonials from '@/components/main/testimonials'
import Features from '@/components/main/features'
import MobileApp from '@/components/main/mobile-app'
import Footer from '@/components/main/footer'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<div className="flex-grow">
				<Hero />
				<div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
					<Partners />
					<FeaturedProperties />
					<AboutUs />
					<Features />
					<Services />
					<Team />
					<Testimonials />
					<MobileApp />
				</div>
			</div>
			<Footer />
		</main>
	)
}

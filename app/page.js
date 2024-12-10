import Navbar from '@/components/main/navbar'
import Hero from '@/components/main/hero'
import Partners from '@/components/main/partners'
import AboutUs from '@/components/main/about-us'
import Services from '@/components/main/services'
import Team from '@/components/main/team'
import Pricing from '@/components/main/pricing'
import Testimonials from '@/components/main/testimonials'
import Blog from '@/components/main/blog'
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
					<AboutUs />
					<Services />
					<Team />
					<Pricing />
					<Testimonials />
					<Blog />
					<MobileApp />
				</div>
			</div>
			<Footer />
		</main>
	)
}
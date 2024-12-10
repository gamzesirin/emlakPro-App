import { Button } from '@/components/ui/button'

export default function MobileApp() {
	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="grid md:grid-cols-2 items-center gap-8">
					<div>
						<img src="/images/ev1.jpg" alt="mobile app" className="max-w-md mx-auto" />
					</div>

					<div>
						<h2 className="text-3xl font-bold mb-4">Available for your Smartphones</h2>
						<p className="text-slate-500 mb-8">
							Start working with Techwind that can provide everything you need to generate awareness, drive traffic,
							connect.
						</p>
						<div className="flex gap-4">
							<Button className="bg-black hover:bg-gray-800">App Store</Button>
							<Button className="bg-black hover:bg-gray-800">Play Store</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

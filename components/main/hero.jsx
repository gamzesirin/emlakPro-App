import { Button } from '@/components/ui/button'

export default function Hero() {
	return (
		<section className="relative pt-32 pb-16 overflow-hidden">
			<div className="container mx-auto">
				<div className="text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">Qualified Business Consultancy</h1>
					<p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">
						Launch your campaign and benefit from our expertise on designing and managing conversion centered.
					</p>
					<Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
				</div>

				{/* Görsel Grid */}
				<div className="relative mt-16">
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-3">
							<img src="/images/ev1.jpg" alt="business" className="rounded-lg w-full h-40 object-cover" />
						</div>
						<div className="col-span-6">
							<img src="/images/ev1.jpg" alt="business" className="rounded-lg w-full h-40 object-cover" />
						</div>
						<div className="col-span-3">
							<img src="/images/ev1.jpg" alt="business" className="rounded-lg w-full h-40 object-cover" />
						</div>
						<div className="col-span-4">
							<img src="/images/ev1.jpg" alt="business" className="rounded-lg w-full h-40 object-cover" />
						</div>
						<div className="col-span-4">
							<img src="/images/ev1.jpg" alt="business" className="rounded-lg w-full h-40 object-cover" />
						</div>
						<div className="col-span-4">
							<img src="/images/ev1.jpg" alt="business" className="rounded-lg w-full h-40 object-cover" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

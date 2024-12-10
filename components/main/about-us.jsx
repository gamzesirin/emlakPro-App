'use client'

import { Button } from '@/components/ui/button'
import CountUp from 'react-countup'

export default function AboutUs() {
	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<img src="/images/ev1.jpg" alt="team" className="rounded-lg w-full h-48 object-cover" />
							<img src="/images/ev1.jpg" alt="team" className="rounded-lg w-full h-48 object-cover mt-8" />
							<img src="/images/ev1.jpg" alt="team" className="rounded-lg w-full h-48 object-cover" />
						</div>
					</div>

					<div>
						<div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
							<CountUp end={15} duration={2} />+ Years Experience
						</div>
						<h2 className="text-3xl font-bold mb-4">Who we are ?</h2>
						<p className="text-slate-500 mb-6">
							Start working with Techwind that can provide everything you need to generate awareness, drive traffic,
							connect.
						</p>
						<Button className="bg-indigo-600 hover:bg-indigo-700">Learn More</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
	{
		name: 'Basic',
		price: '$39',
		features: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security']
	},
	{
		name: 'Professional',
		price: '$59',
		features: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security', 'Priority Support']
	}
]

export default function Pricing() {
	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl font-bold mb-4">Our Comfortable Rates</h2>
					<p className="text-slate-500">
						Start working with Techwind that can provide everything you need to generate awareness, drive traffic,
						connect.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{plans.map((plan, index) => (
						<div key={index} className="border rounded-lg p-8 hover:shadow-lg transition-all">
							<h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
							<div className="text-4xl font-bold mb-6">
								{plan.price}
								<span className="text-lg font-normal">/mo</span>
							</div>
							<ul className="space-y-4 mb-8">
								{plan.features.map((feature, idx) => (
									<li key={idx} className="flex items-center">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										{feature}
									</li>
								))}
							</ul>
							<Button className="w-full bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

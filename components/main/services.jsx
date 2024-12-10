import { MonitorSmartphone, BarChart3, Workflow, Shield } from 'lucide-react'

const services = [
	{
		icon: <MonitorSmartphone className="w-8 h-8" />,
		title: 'Digital Marketing',
		description: 'The phrasal sequence of the is now so that many campaign and benefit'
	},
	{
		icon: <BarChart3 className="w-8 h-8" />,
		title: 'Best Analytics',
		description: 'The phrasal sequence of the is now so that many campaign and benefit'
	},
	{
		icon: <Workflow className="w-8 h-8" />,
		title: 'Fully Responsive',
		description: 'The phrasal sequence of the is now so that many campaign and benefit'
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: 'Data Security',
		description: 'The phrasal sequence of the is now so that many campaign and benefit'
	}
]

export default function Services() {
	return (
		<section className="py-20 bg-slate-50 dark:bg-slate-800">
			<div className="container px-4 mx-auto">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">What we do ?</h2>
					<p className="text-slate-500 dark:text-slate-400">
						Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital
						design.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="text-center p-6 hover:shadow-lg rounded-lg transition-all bg-white dark:bg-slate-900"
						>
							<div className="w-16 h-16 bg-indigo-600/10 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
								{service.icon}
							</div>
							<h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">{service.title}</h3>
							<p className="text-slate-500 dark:text-slate-400">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

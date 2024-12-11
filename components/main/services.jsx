import { Home, BarChart3, Shield, HandshakeIcon } from 'lucide-react'

const services = [
	{
		icon: <Home className="w-6 h-6" />,
		title: 'Emlak Danışmanlığı',
		description: 'Uzman kadromuzla size en uygun gayrimenkulü bulmanızda yardımcı oluyoruz',
		category: 'Temel Hizmet'
	},
	{
		icon: <BarChart3 className="w-6 h-6" />,
		title: 'Piyasa Analizi',
		description: 'Güncel piyasa analizleri ile en doğru yatırım kararını vermenizi sağlıyoruz',
		category: 'Analiz'
	},
	{
		icon: <HandshakeIcon className="w-6 h-6" />,
		title: 'Hukuki Danışmanlık',
		description: 'Gayrimenkul alım-satım süreçlerinde hukuki destek sağlıyoruz',
		category: 'Danışmanlık'
	},
	{
		icon: <Shield className="w-6 h-6" />,
		title: 'Güvenli Alım-Satım',
		description: 'Tüm işlemlerinizi güvenli bir şekilde gerçekleştirmenizi sağlıyoruz',
		category: 'Güvenlik'
	}
]

export default function Services() {
	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center mb-12">
					<span className="text-indigo-600 font-medium mb-2">Hizmetlerimiz</span>
					<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Size Nasıl Yardımcı Olabiliriz?</h2>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<div
							key={index}
							className="group p-8 bg-white dark:bg-slate-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-none dark:hover:bg-slate-700"
						>
							<div className="flex items-center justify-between mb-4">
								<span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{service.category}</span>
								<div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
									{service.icon}
								</div>
							</div>
							<h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
								{service.title}
							</h3>
							<p className="text-sm text-slate-500 dark:text-slate-400">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

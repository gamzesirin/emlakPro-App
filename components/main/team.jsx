import { Button } from '@/components/ui/button'

export default function Team() {
	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
			<div className="container px-4 mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Deneyimli Ekibimizle Tanışın</h2>
					<p className="text-slate-500 dark:text-slate-400">
						20 yıllık sektör tecrübemiz ve uzman kadromuzla, gayrimenkul süreçlerinizde yanınızdayız. Her biri alanında
						uzman ekip üyelerimiz, size en iyi hizmeti sunmak için hazır.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{['Mehmet Yılmaz', 'Ayşe Demir', 'Can Kaya'].map((name, index) => (
						<div
							key={index}
							className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all  flex flex-col items-center justify-center"
						>
							<div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								{name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</div>
							<h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{name}</h3>
							<p className="text-sm text-slate-500 dark:text-slate-400">
								{index === 0 ? 'Gayrimenkul Danışmanı' : index === 1 ? 'Satış Müdürü' : 'Portföy Yöneticisi'}
							</p>
						</div>
					))}
				</div>

				<div className="flex justify-center mt-12">
					<Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3 transition-all">
						Tüm Ekibi Görüntüle
					</Button>
				</div>
			</div>
		</section>
	)
}

import { Home, Shield, Clock, Phone } from 'lucide-react'

const FEATURES = [
	{
		icon: Home,
		title: 'Geniş Portföy',
		description: 'Binlerce gayrimenkul arasından size en uygun olanı bulun'
	},
	{
		icon: Shield,
		title: 'Güvenilir Hizmet',
		description: '20 yıllık tecrübemizle güvenle alım satım yapın'
	},
	{
		icon: Clock,
		title: '7/24 Destek',
		description: 'Sorularınız için her zaman yanınızdayız'
	},
	{
		icon: Phone,
		title: 'Kolay İletişim',
		description: 'Tek tıkla bizimle iletişime geçin'
	}
]

export default function Features() {
	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<h2 className="text-3xl font-bold text-center mb-4">Neden Biz?</h2>
				<p className="text-center text-muted-foreground mb-12">Size en iyi hizmeti sunmak için çalışıyoruz</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{FEATURES.map((feature, index) => (
						<div key={index} className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
								<feature.icon className="w-8 h-8 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
							<p className="text-muted-foreground">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

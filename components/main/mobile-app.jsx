import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function MobileApp() {
	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
			<div className="container px-4 mx-auto">
				<div className="grid md:grid-cols-2 items-center gap-8">
					<div>
						<Image src="/images/ev6.jpg" alt="mobil uygulama" width={500} height={256} className="rounded-lg" />
					</div>

					<div>
						<h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Akıllı Telefonlarınız İçin Uygun</h2>
						<p className="text-slate-500 dark:text-slate-400 mb-8">
							EmlakPro mobil uygulaması ile gayrimenkul arayışınızı her an her yerden kolayca yapabilirsiniz.
						</p>
						<div className="flex gap-4">
							<Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3 transition-all">
								App Store
							</Button>
							<Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3 transition-all">
								Play Store
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

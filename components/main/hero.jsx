import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
	return (
		<section className="relative pt-32 pb-16 overflow-hidden">
			<div className="container mx-auto">
				<div className="text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">Hayalinizdeki Eve Hoş Geldiniz</h1>
					<p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">
						İzmirin en prestijli lokasyonlarında, size özel seçilmiş gayrimenkul fırsatlarını keşfedin.
					</p>
					<Button className="bg-indigo-600 hover:bg-indigo-700">Hemen Başlayın</Button>
				</div>

				{/* Görsel Grid */}
				<div className="relative mt-16">
					<div className="grid grid-cols-12 gap-6">
						<div className="col-span-3">
							<Image
								src="/images/ev1.jpg"
								alt="emlak"
								width={300}
								height={256}
								className="rounded-lg w-full h-64 object-cover"
							/>
						</div>
						<div className="col-span-6">
							<Image
								src="/images/ev2.jpg"
								alt="emlak"
								width={600}
								height={256}
								className="rounded-lg w-full h-64 object-cover"
							/>
						</div>
						<div className="col-span-3">
							<Image
								src="/images/ev3.jpg"
								alt="emlak"
								width={300}
								height={256}
								className="rounded-lg w-full h-64 object-cover"
							/>
						</div>
						<div className="col-span-4">
							<Image
								src="/images/ev4.jpg"
								alt="emlak"
								width={300}
								height={256}
								className="rounded-lg w-full h-64 object-cover"
							/>
						</div>
						<div className="col-span-4">
							<Image
								src="/images/ev5.jpg"
								alt="emlak"
								width={300}
								height={256}
								className="rounded-lg w-full h-64 object-cover"
							/>
						</div>
						<div className="col-span-4">
							<Image
								src="/images/ev6.jpg"
								alt="emlak"
								width={300}
								height={256}
								className="rounded-lg w-full h-64 object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

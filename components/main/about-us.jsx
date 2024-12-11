'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import CountUp from 'react-countup'

export default function AboutUs() {
	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<Image
								src="/images/ev7.jpg"
								alt="emlak"
								width={300}
								height={192}
								className="rounded-lg w-full h-48 object-cover"
							/>
							<Image
								src="/images/ev8.jpg"
								alt="emlak"
								width={300}
								height={192}
								className="rounded-lg w-full h-48 object-cover mt-8"
							/>
							<Image
								src="/images/ev1.jpg"
								alt="emlak"
								width={300}
								height={192}
								className="rounded-lg w-full h-48 object-cover"
							/>
						</div>
					</div>

					<div>
						<div className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
							<CountUp end={20} duration={2} />+ Yıllık Tecrübe
						</div>
						<h2 className="text-3xl font-bold mb-4">Biz Kimiz?</h2>
						<p className="text-slate-500 mb-6">
							20 yılı aşkın tecrübemizle İzmirin önde gelen gayrimenkul danışmanlık şirketlerinden biriyiz.
							Müşterilerimize en doğru ve güvenilir hizmeti sunmak için çalışıyoruz.
						</p>
						<Button className="bg-indigo-600 hover:bg-indigo-700">Daha Fazla Bilgi</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
	return (
		<footer className="bg-slate-950 text-slate-50">
			<div className="container py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="text-xl font-bold">EmlakPro</div>
						<p className="text-sm text-slate-400">
							Gayrimenkul sektöründe 20 yıllık tecrübemizle size en iyi hizmeti sunuyoruz.
						</p>
						<div className="flex space-x-4">
							<Button variant="ghost" size="icon" className="hover:bg-slate-800" asChild>
								<Link href="#">
									<Facebook className="h-5 w-5" />
								</Link>
							</Button>
							<Button variant="ghost" size="icon" className="hover:bg-slate-800" asChild>
								<Link href="#">
									<Instagram className="h-5 w-5" />
								</Link>
							</Button>
							<Button variant="ghost" size="icon" className="hover:bg-slate-800" asChild>
								<Link href="#">
									<Twitter className="h-5 w-5" />
								</Link>
							</Button>
						</div>
					</div>
					<div className="space-y-4">
						<div className="text-base font-medium">Hızlı Erişim</div>
						<ul className="space-y-2 text-sm">
							{['Satılık', 'Kiralık', 'Projeler', 'Hakkımızda'].map((item) => (
								<li key={item}>
									<Link
										href={`/${item.toLowerCase()}`}
										className="text-slate-400 hover:text-slate-50 transition-colors"
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-4">
						<div className="text-base font-medium">İletişim</div>
						<ul className="space-y-2 text-sm">
							<li className="text-slate-400 flex items-center space-x-2">
								<span>Tel:</span>
								<a href="tel:+902321234567" className="hover:text-slate-50 transition-colors">
									+90 232 123 45 67
								</a>
							</li>
							<li className="text-slate-400 flex items-center space-x-2">
								<span>E-posta:</span>
								<a href="mailto:info@emlakpro.com" className="hover:text-slate-50 transition-colors">
									info@emlakpro.com
								</a>
							</li>
							<li className="text-slate-400">
								<span>Adres:</span>
								<p className="mt-1">Alsancak, İzmir</p>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<div className="text-base font-medium">Bülten</div>
						<p className="text-sm text-slate-400">Yeni fırsatlardan haberdar olmak için bültenimize abone olun.</p>
						<form className="space-y-2">
							<Input
								className="bg-slate-900 border-slate-800 focus:border-slate-700"
								placeholder="E-posta adresiniz"
								type="email"
							/>
							<Button className="w-full md:w-auto bg-slate-800 hover:bg-slate-700">Abone Ol</Button>
						</form>
					</div>
				</div>
				<Separator className="my-8 bg-slate-900" />
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
					<div>&copy; 2024 EmlakPro. Tüm hakları saklıdır.</div>
					<div className="flex space-x-4">
						<Link href="/gizlilik" className="hover:text-slate-50 transition-colors">
							Gizlilik Politikası
						</Link>
						<Link href="/kullanim-kosullari" className="hover:text-slate-50 transition-colors">
							Kullanım Koşulları
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

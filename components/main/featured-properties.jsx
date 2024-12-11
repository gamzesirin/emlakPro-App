import Image from 'next/image'
import PropertyCard from './property-card'

const FEATURED_PROPERTIES = [
	{
		id: 1,
		title: 'Lüks Deniz Manzaralı Daire',
		location: 'Karşıyaka, İzmir',
		price: '4.250.000',
		bedrooms: 3,
		bathrooms: 2,
		area: 165,
		imageUrl: '/images/ev1.jpg'
	},
	{
		id: 2,
		title: 'Modern Villa',
		location: 'Çeşme, İzmir',
		price: '12.500.000',
		bedrooms: 5,
		bathrooms: 3,
		area: 320,
		imageUrl: '/images/ev2.jpg'
	},
	{
		id: 3,
		title: 'Şehir Merkezinde Rezidans',
		location: 'Konak, İzmir',
		price: '3.850.000',
		bedrooms: 2,
		bathrooms: 1,
		area: 120,
		imageUrl: '/images/ev3.jpg'
	}
]

export default function FeaturedProperties() {
	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center mb-12">
					<span className="text-indigo-600 font-medium mb-2">Öne Çıkan Emlaklar</span>
					<h2 className="text-3xl font-bold text-slate-900 dark:text-white">Hayalinizdeki Evi Keşfedin</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{FEATURED_PROPERTIES.map((property) => (
						<div
							key={property.id}
							className="group p-6 bg-white dark:bg-slate-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-none dark:hover:bg-slate-700"
						>
							<div className="relative h-[300px]">
								<Image
									src={property.imageUrl}
									alt={property.title}
									width={400}
									height={300}
									className="object-cover w-full h-full rounded-lg"
									priority
								/>
							</div>
							<div className="flex items-center justify-between mb-2 mt-4">
								<h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
									{property.title}
								</h3>
								<span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{property.price} TL</span>
							</div>
							<p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{property.location}</p>
							<div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
								<span className="mr-4">{property.bedrooms} Yatak Odası</span>
								<span className="mr-4">{property.bathrooms} Banyo</span>
								<span>{property.area} m²</span>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<button className="inline-block px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition-all">
						Tüm Emlakları Gör
					</button>
				</div>
			</div>
		</section>
	)
}

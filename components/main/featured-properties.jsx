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
		imageUrl: '/properties/property-1.jpg'
	},
	{
		id: 2,
		title: 'Modern Villa',
		location: 'Çeşme, İzmir',
		price: '12.500.000',
		bedrooms: 5,
		bathrooms: 3,
		area: 320,
		imageUrl: '/properties/property-2.jpg'
	},
	{
		id: 3,
		title: 'Şehir Merkezinde Rezidans',
		location: 'Konak, İzmir',
		price: '3.850.000',
		bedrooms: 2,
		bathrooms: 1,
		area: 120,
		imageUrl: '/properties/property-3.jpg'
	}
]

export default function FeaturedProperties() {
	return (
		<section className="relative py-16 bg-slate-50">
			<div className="container">
				{/* Başlık */}
				<div className="grid grid-cols-1 pb-8 text-center">
					<h3 className="mb-4 md:text-3xl text-2xl font-medium">Öne Çıkan Emlaklar</h3>
					<p className="text-slate-400 max-w-xl mx-auto">
						En prestijli lokasyonlarda, size özel seçilmiş gayrimenkul fırsatları
					</p>
				</div>

				{/* Emlak Kartları */}
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
					{FEATURED_PROPERTIES.map((property) => (
						<PropertyCard key={property.id} property={property} />
					))}
				</div>

				{/* Tümünü Gör Butonu */}
				<div className="flex justify-center mt-8">
					<button className="btn bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-all">
						Tüm Emlakları Gör
					</button>
				</div>
			</div>
		</section>
	)
}

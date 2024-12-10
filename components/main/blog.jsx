export default function Blog() {
	const posts = [
		{
			title: 'Digital Marketing: Explained with Strategies',
			image: '/images/ev1.jpg',
			date: '13th March 2024'
		},
		{
			title: 'Manage Budget: How to get your first profit',
			image: '/images/ev1.jpg',
			date: '5th March 2024'
		},
		{
			title: 'Mindset That Will Increase Your Success',
			image: '/images/ev1.jpg',
			date: '27th Feb 2024'
		}
	]

	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl font-bold mb-4">Read Our Latest News & Blog</h2>
					<p className="text-slate-500">
						Start working with Techwind that can provide everything you need to generate awareness, drive traffic,
						connect.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{posts.map((post, index) => (
						<div key={index} className="group">
							<div className="relative overflow-hidden rounded-lg mb-4">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<p className="text-slate-500 text-sm mb-2">{post.date}</p>
							<h3 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">{post.title}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

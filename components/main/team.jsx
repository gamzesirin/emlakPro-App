import { Button } from '@/components/ui/button'

export default function Team() {
	return (
		<section className="py-20 bg-indigo-600">
			<div className="container px-4 mx-auto">
				<div className="grid md:grid-cols-2 items-center gap-8">
					<div className="text-white">
						<h2 className="text-3xl font-bold mb-4">Meet Experience Team Member</h2>
						<p className="mb-6">
							Start working with Techwind that can provide everything you need to generate awareness, drive traffic,
							connect.
						</p>
						<Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
							View Team
						</Button>
					</div>

					<div className="relative">
						<img src="/images/ev1.jpg" alt="team" className="rounded-lg" />
					</div>
				</div>
			</div>
		</section>
	)
}

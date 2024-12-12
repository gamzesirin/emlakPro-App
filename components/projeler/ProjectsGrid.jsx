'use client'

import ProjectCard from './ProjectCard'

export default function ProjectsGrid({ projects }) {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

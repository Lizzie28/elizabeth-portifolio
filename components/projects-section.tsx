import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'My own portfolio website built to showcase my learning, experiments, and web development practice projects.',
    tags: ['Next.js', 'React', 'Tailwind', 'JavaScript'],
    image: '/placeholder.svg', // Placeholder image
  },
  {
    title: 'UI Practice Project',
    description:
      'Experimenting with clean and user-friendly interfaces using component-based frontend structures.',
    tags: ['React', 'Tailwind', 'Figma'],
    image: '/placeholder.svg',
  },
  {
    title: 'Mini Web Apps',
    description:
      'Small practice projects to explore Firebase, APIs, and dynamic user interactions.',
    tags: ['JavaScript', 'Firebase', 'APIs'],
    image: '/placeholder.svg',
  },
  {
    title: 'AI Experiments',
    description:
      'Learning how to integrate AI-powered features and automation into simple applications.',
    tags: ['Python', 'AI', 'OpenAI API'],
    image: '/placeholder.svg',
  },
]

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Learning Projects & Experiments
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string // optional so you can omit if no image yet
}

export function ProjectCard({
  title,
  description,
  tags = [],
  image = "/placeholder.svg",
}: ProjectCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="mb-4 overflow-hidden border border-border bg-card rounded-xl md:rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
        {title}
      </h3>

      <p className="mb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-border bg-secondary px-3 py-1 rounded-lg text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

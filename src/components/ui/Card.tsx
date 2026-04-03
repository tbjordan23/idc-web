import Link from "next/link"
import Image from "next/image"

interface CardProps {
  title: string
  description: string
  href?: string
  image?: string
  tag?: string
  date?: string
  variant?: "course" | "resource" | "blog"
}

export default function Card({
  title,
  description,
  href,
  image,
  tag,
  date,
  variant = "blog",
}: CardProps) {
  const accentColor = {
    course: "bg-idc-primary-50 text-idc-primary",
    resource: "bg-idc-accent-50 text-idc-accent-700",
    blog: "bg-gray-100 text-gray-600",
  }[variant]

  const content = (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          {tag && (
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${accentColor}`}>
              {tag}
            </span>
          )}
          {date && <time className="text-xs text-gray-400">{date}</time>}
        </div>
        <h3 className="mt-3 text-base font-semibold text-gray-900 group-hover:text-idc-primary">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">{description}</p>
        {href && (
          <span className="mt-4 text-sm font-medium text-idc-accent hover:text-idc-accent-700">
            Read more →
          </span>
        )}
      </div>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

// Shared layout for content/learn pages (e.g. /whatisinstructionaldesign, /addie-model, etc.)

interface ContentPageProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function ContentPage({ title, subtitle, children }: ContentPageProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-idc-primary">{title}</h1>
        {subtitle && <p className="mt-4 text-xl text-gray-600">{subtitle}</p>}
        <div className="mt-6 h-1 w-16 rounded bg-idc-accent" />
      </header>
      <div className="prose prose-lg max-w-none prose-headings:text-idc-primary prose-a:text-idc-accent">
        {children}
      </div>
    </article>
  )
}

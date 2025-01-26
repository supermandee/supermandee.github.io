import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Couch to Startup
      </h1>
      <p className="mb-4">
        {`Stepping out of comfort, into creation.`}
      </p>
      <div className="my-8">
        <BlogPosts limit={3} />
      </div>
      <div className="text-neutral-600 dark:text-neutral-300">
        <Link 
          href="/blog"
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          Read all posts →
        </Link>
      </div>
    </section>
  )
}
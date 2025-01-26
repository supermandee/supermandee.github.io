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
      <Link 
        href="/blog"
        className="my-8"
      >
        Read all posts → 
      </Link>
    </section>
  )
}
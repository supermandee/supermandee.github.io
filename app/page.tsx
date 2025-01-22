import { BlogPosts } from 'app/components/posts'

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
        <BlogPosts />
      </div>
    </section>
  )
}

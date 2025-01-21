import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mandy Hong
      </h1>
      <p className="mb-4">
        {`I'm Mandy, I am so silly.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

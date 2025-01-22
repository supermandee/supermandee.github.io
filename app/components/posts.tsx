import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'


export async function BlogPosts() {
  let allBlogs = getBlogPosts()
  
  return (
    <div className="w-full">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map(async (post) => {
          const preview = post.metadata.preview || post.content.substring(0, 100) + '...'
          const html = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeStringify)
            .process(preview)

          return (
            <Link
              key={post.slug}
              className="flex flex-row items-start space-x-8 mb-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 p-2 rounded-lg transition-colors"
              href={`/blog/${post.slug}`}
            >
              <div className="min-w-[150px] pt-1">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                  {post.metadata.title}
                </p>
                <div 
                  className="text-neutral-700 dark:text-neutral-300 text-sm mt-1"
                  dangerouslySetInnerHTML={{ __html: String(html) }}
                />
              </div>
            </Link>
          )
        })}
    </div>
  )
}